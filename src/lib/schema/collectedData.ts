import {
  pgTable,
  text,
  timestamp,
  integer,
  decimal,
} from "drizzle-orm/pg-core";
import { InferInsertModel, InferSelectModel, relations } from "drizzle-orm";
import { waste } from "./waste";
import { containing } from "./containing";
import { collectPoint } from "./collectPoint";
import { vehicle } from "./vehicle";

export const collectedData = pgTable("collectedData", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  wasteId: text("wasteId"),
  containingId: text("containingId"),
  quantity: integer("quantity"),
  weight: decimal("weight"),
  collectPointId: text("collectPointId"),
  vehicleId: text("vehicleId"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow(),
});

export const collectedDataRelations = relations(collectedData, ({ one }) => ({
  waste: one(waste, {
    fields: [collectedData.wasteId],
    references: [waste.id],
  }),
  containing: one(containing, {
    fields: [collectedData.containingId],
    references: [containing.id],
  }),
  collectPoint: one(collectPoint, {
    fields: [collectedData.collectPointId],
    references: [collectPoint.id],
  }),
  vehicle: one(vehicle, {
    fields: [collectedData.vehicleId],
    references: [vehicle.id],
  }),
}));

export type NewCollectedData = InferInsertModel<typeof collectedData>;
export type CollectedData = InferSelectModel<typeof collectedData>;
