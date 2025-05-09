import "@/lib/config";
import { db } from "@/lib/drizzle";
import { NewOrganisation, organisation } from "@/lib/schema/organisation";
import { NewUser, user } from "@/lib/schema/user";
import { hashPassword } from "@/lib/userQuery";
import { eq } from "drizzle-orm";

//////////////////////////USERS//////////////////////////////

export const injectUser = async (
  organisation: NewOrganisation,
  email: string,
  role: "superAdmin" | "admin" | "client" | "collector",
) => {
  const insertOrganisation = await injectOrganisation(organisation);
  const password = await hashPassword("Test1234!");
  if (insertOrganisation && password) {
    const newUser: NewUser = {
      name: "User Test",
      email: email,
      password: password,
      role: role,
      organisationId: insertOrganisation[0].insertedId,
    };
    const result = await db.insert(user).values(newUser).returning();

    if (result[0].id) {
      return result;
    }

    console.log("User not injected");
  }
};

export const removeUser = async (email: string) => {
  await db.delete(user).where(eq(user.email, email));
};

////////////////////ORGANISATIONS/////////////////////////////
export const injectOrganisation = async (newOrganisation: NewOrganisation) => {
  const result = await db
    .insert(organisation)
    .values(newOrganisation)
    .returning({ insertedId: organisation.id });
  if (result[0].insertedId) {
    return result;
  } else {
    console.log("error: organisation not inserted");
  }
};

export const removeOrganisation = async (name: string) => {
  await db.delete(organisation).where(eq(organisation.name, name));
};
