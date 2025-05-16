import { pgTable, text, varchar, timestamp, pgEnum } from "drizzle-orm/pg-core";
import { InferInsertModel, InferSelectModel, relations } from "drizzle-orm";
import { user } from "./user";
import { organisation } from "./organisation";
import { collectedData } from "./collectedData";

export const daysEnum = pgEnum("day", [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
]);

export type days = keyof typeof daysEnum;

export const collectPoint = pgTable("collectPoint", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  name: varchar("name").notNull(),
  address: varchar("address").notNull(),
  daysOfCollect: daysEnum().array().notNull().default([]),
  clientId: text("user_id")
    .references(() => user.id, { onDelete: "cascade" })
    .notNull(),
  organisationId: text("organisationId"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow(),
});

export const collectPointRelations = relations(
  collectPoint,
  ({ one, many }) => ({
    client: one(user, {
      fields: [collectPoint.clientId],
      references: [user.id],
    }),
    organisation: one(organisation, {
      fields: [collectPoint.organisationId],
      references: [organisation.id],
    }),
    collectedData: many(collectedData),
  }),
);

export type NewCollectPoint = InferInsertModel<typeof collectPoint>;
export type CollectPoint = InferSelectModel<typeof collectPoint>;
