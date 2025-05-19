import "@/lib/config";
import { db } from "@/lib/drizzle";
import { collectPoint } from "@/lib/schema/collectPoint";
import { NewOrganisation, organisation } from "@/lib/schema/organisation";
import { NewUser, user } from "@/lib/schema/user";
import { hashPassword } from "@/lib/userQuery";
import { eq } from "drizzle-orm";

//////////////////////////USERS//////////////////////////////

export const injectUser = async (
  organisation: NewOrganisation,
  email: string,
  role: "superAdmin" | "admin" | "client" | "collector",
  name: string,
) => {
  const insertOrganisation = await injectOrganisation(organisation);
  const password = await hashPassword("Test1234!");
  if (insertOrganisation && password) {
    const newUser: NewUser = {
      name: name,
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

export const injectUserWithOrganisationAlreadyExisting = async (
  email: string,
  role: "superAdmin" | "admin" | "client" | "collector",
  organisationName: string,
  name: string,
) => {
  const findOrganisation = await db.query.organisation.findFirst({
    where: eq(organisation.name, organisationName),
  });
  const password = await hashPassword("Test1234!");
  if (findOrganisation && password) {
    const newUser: NewUser = {
      name: name,
      email: email,
      password: password,
      role: role,
      organisationId: findOrganisation.id,
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

//////////////////////////COLLECT POINT//////////////////////////////

export const removeCollectPoint = async (name: string) => {
  await db.delete(collectPoint).where(eq(collectPoint.name, name));
};

export const cleanAllDatas = async () => {
  await removeUser("super-admin-test@access-collect.fr");
  await removeUser("admin-test@access-collect.fr");
  await removeUser("collector-test@access-collect.fr");
  await removeUser("client-test@access-collect.fr");
  await removeOrganisation("Organisation-test-global");
};
