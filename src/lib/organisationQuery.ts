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

export const getOrganisation = async (id: string) => {
  const result = await db.query.organisation.findFirst({
    where: eq(organisation.id, id),
  });
  if (!result) {
    console.error("Error: Organisation not found");
    return;
  }
  return result as Organisation;
};

export const addOrganisation = async (formData: FormData) => {
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
    return { error: "Organisation not inserted" };
  }
};

export const deleteOrganisationById = async (organisationId: string) => {
  const result = await db
    .delete(organisation)
    .where(eq(organisation.id, organisationId))
    .returning({ deleted: organisation.id });
  if (result[0].deleted) {
    revalidatePath("/dashboard/organisation");
    return { result: result };
  }
  return { error: "Organisation has not been deleted" };
};
