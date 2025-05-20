import { revalidatePath } from "next/cache";
import { db } from "./drizzle";
import { Key, key } from "./schema/key";
import { eq } from "drizzle-orm";

export const addKey = async (userId: string) => {
  const date = new Date();
  const expirationDate = new Date(date.setHours(date.getHours() + 2));

  try {
    await db
      .insert(key)
      .values({
        userId: userId,
        expirationDate: expirationDate,
      })
      .returning();

    revalidatePath("/forgotten-password");
  } catch (error) {
    console.error(error);
  }
};

export const getKeyByUserId = async (idUser: string) => {
  const key = await db.query.key.findFirst({
    where: (key, { eq }) => eq(key.userId, idUser),
  });
  return key as Key;
};

export const deleteKey = async (userKey: string) => {
  const deletedKey = await db
    .delete(key)
    .where(eq(key.id, userKey))
    .returning({ deletedId: key.id });
  if (!deletedKey || deletedKey[0].deletedId !== userKey) {
    return { error: "Key not found" };
  }
  return { result: "Key deleted" };
};
