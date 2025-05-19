import { FullConfig } from "@playwright/test";
import {
  cleanAllDatas,
  injectOrganisation,
  injectUser,
  injectUserWithOrganisationAlreadyExisting,
} from "./functions";
import { NewOrganisation } from "@/lib/schema/organisation";

const organisation: NewOrganisation = {
  name: "Organisation-test-global",
  address: "Rue des tests",
  phoneNumber: "0112233445",
  contact: "Test Contact",
  agrementNumber: "123-ABC-456",
};
export default async function globalSetup(config: FullConfig) {
  console.log(process.env.DATABASE_URL);

  await cleanAllDatas();

  await injectUser(
    organisation,
    "super-admin-test@access-collect.fr",
    "superAdmin",
    "SA Test",
  );
  await injectUserWithOrganisationAlreadyExisting(
    "admin-test@access-collect.fr",
    "admin",
    "Organisation-test-global",
    "A Test",
  );
  await injectUserWithOrganisationAlreadyExisting(
    "collector-test@access-collect.fr",
    "collector",
    "Organisation-test-global",
    "Col Test",
  );
  await injectUserWithOrganisationAlreadyExisting(
    "client-test@access-collect.fr",
    "client",
    "Organisation-test-global",
    "C Test",
  );
}
