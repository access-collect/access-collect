ALTER TABLE "collectPoint" DROP CONSTRAINT "collectPoint_organisationId_organisation_id_fk";
--> statement-breakpoint
ALTER TABLE "collectedData" DROP CONSTRAINT "collectedData_vehicleId_vehicles_id_fk";
--> statement-breakpoint
ALTER TABLE "collectPoint" ALTER COLUMN "organisationId" DROP NOT NULL;