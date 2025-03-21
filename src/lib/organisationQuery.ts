"use server";
import "@/lib/config";
import { Organisation, organisation } from "./schema/schema";
import { db } from "./drizzle";
import { revalidatePath } from "next/cache";
import { replaceEmptyValueByNull } from "./utils";
import { eq } from "drizzle-orm";

export const getOrganisations = async () => {
  const selectResult = await db.select().from(organisation);

  return selectResult as Organisation[];
};

export const addOrganisation = async (formData: any) => {
  const data = await replaceEmptyValueByNull(formData);

  try {
    await db
      .insert(organisation)
      .values({
        name: data.name,
        address: data.address,
        phoneNumber: data.phone,
        contact: data.contact,
        agrementNumber: data.agrement,
      })
      .returning();

    revalidatePath("/dashboard/organisation");
  } catch {
    console.error("the organisation has not been added to the database");
  }
};

export const deleteOrganisation = async(organisationId: string) => {
  const result = await db.delete(organisation).where(eq(organisation.id, organisationId)).returning({deleted: organisation.id})
  if(result[0].deleted){
    return {result: result}
  }
  return {error: "Organisation has not been deleted"}
}
