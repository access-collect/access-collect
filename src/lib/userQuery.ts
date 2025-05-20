"use server";
import "@/lib/config";
import { user, organisation, User, Organisation } from "./schema/schema";
import { db } from "./drizzle";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import Bcrypt from "bcryptjs";
import {
  creationOfTransporter,
  replaceEmptyValueByNull,
  sendMailToUser,
} from "./utils";
import { addKey, deleteKey, getKeyByUserId } from "./keyQuery";

export const hashPassword = async (text: string) => {
  try {
    const salt = await Bcrypt.genSalt(10);
    const hash = await Bcrypt.hash(text, salt);

    return hash;
  } catch (error: any) {
    console.log(error.message);
  }
};

export const getUsers = async () => {
  const selectResult = await db.select().from(user);

  return selectResult as User[];
};

interface UserWithOrganisation {
  organisation: Organisation | null;
  user: User;
}

export const getUsersWithOrganisationName = async () => {
  const selectResult = await db
    .select()
    .from(user)
    .leftJoin(organisation, eq(user.organisationId, organisation.id));

  return selectResult as UserWithOrganisation[];
};

export const addUser = async (formData: any) => {
  const data = await replaceEmptyValueByNull(formData);

  const newPassword = await hashPassword(data.password);

  try {
    await db
      .insert(user)
      .values({
        name: data.name,
        email: data.email,
        password: newPassword as string,
        phone: data.phone,
        role: data.role,
        organisationId: data.organisationId,
      })
      .returning();

    revalidatePath("/dashboard/user");
  } catch (error) {
    console.error(error);
  }
};

export const getUserDataWithEmail = async (email: string) => {
  const user = await db.query.user.findFirst({
    where: (user, {eq}) => eq(user.email, email),
  });
  if (!user) {
    return {error: "user not found"};
  }

  return {result : user as User};

};

export const sendResetPasswordEmailIfUserExists = async (email: string) => {
  const user = await getUserDataWithEmail(email);
  if (user.error || !user.result) {
    return { error: "email doesn't exists on database" };
  }

  if(user.result) {
    await addKey(user.result.id);
    const userKey = await getKeyByUserId(user.result.id);
    const info: any = await creationOfTransporter();
    const url: string =
        process.env.NEXTAUTH_URL +
        "/reset-password/" +
        user.result.id +
        "/" +
        userKey.id;
    await sendMailToUser(url, info, user.result.email);
  }
};

export const updatePassword = async (
  newPassword: string,
  userId: string,
  userKey: string,
) => {
  const hashedPassword = await hashPassword(newPassword);
  const update = await db
    .update(user)
    .set({ password: hashedPassword })
    .where(eq(user.id, userId))
    .returning({ updatedId: user.id });

  if (!update) {
    return { error: "password not updated" };
  }
  deleteKey(userKey);
  return { result: update };
};
