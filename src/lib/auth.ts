import { DrizzleAdapter } from "@auth/drizzle-adapter";
import NextAuth from "next-auth";
import { db } from "./drizzle";
import Bcrypt from "bcryptjs";
import CredentialsProvider from "@auth/core/providers/credentials";
import { getUserDataWithEmail } from "./userQuery";


export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: DrizzleAdapter(db),
  secret: process.env.NEXTAUTH_SECRET,

  session: {
    strategy: "jwt",
  },

  providers: [
    CredentialsProvider({
      type: "credentials",

      async authorize(credentials) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };

        if (!email || !password) {
          throw new Error("Wrongs credentials");
        }

        const userData = await getUserDataWithEmail(email);

        if (
          !userData ||
          (await Bcrypt.compare(password, userData.password)) === false
        ) {
          throw new Error("Wrong password");
        }

        return {
          id: userData.id,
          email: userData.email,
          name: userData.name,
          randomKey: "Hey cool",
        };
      },
    }),
  ],

  callbacks: {
    async jwt({ token, trigger, session, user }) {
      if (trigger === "update") {
        // Note, that `session` can be any arbitrary object, remember to validate it!
        token.type = session?.type;
        token.name = session?.name;
        return token;
      }

   
      user && (token.user = user);
      return token;
    },

    async session({ session, token }) {
      //@ts-expect-error
      session.user.id = token.id;
      return session;
    },

    async authorized({ auth }) {
      return !!auth;
    },
  },
});
