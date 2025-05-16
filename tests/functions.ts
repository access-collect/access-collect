import { db } from "@/lib/drizzle";
import { NewOrganisation, organisation } from "@/lib/schema/organisation";
import { eq } from "drizzle-orm";

export const insertOrganisation = async () => {
  const newOrganisation: NewOrganisation = {
    name: "Temporary Organisation",
    address: "1 rue test 01234 TEST",
    phoneNumber: "0987654321",
    contact: "Contact TEST",
    agrementNumber: "XX-1234-XX",
  };
  const result = await db
    .insert(organisation)
    .values(newOrganisation)
    .returning();
  if (result[0].id) {
    console.log("Temporary Organisation inserted");
    return;
  }
  console.log("Error in insertOrganisation function");
};

export const removeOrganisation = async (name: string) => {
  const deleted = await db
    .delete(organisation)
    .where(eq(organisation.name, name))
    .returning({ deleted: organisation.id });

  if (deleted[0].deleted) {
    console.log("Organisation with id : " + deleted + " has been deleted");
    return;
  }

  console.log("Error in removeOrganisation");
};
