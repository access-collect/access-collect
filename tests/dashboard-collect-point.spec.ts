import { NewOrganisation } from "@/lib/schema/organisation";
import { test, expect } from "@playwright/test";
import {
  injectOrganisation,
  injectUser,
  removeOrganisation,
  removeUser,
} from "./functions";

const organisation: NewOrganisation = {
  name: "Organisation-test-add-collect-point",
  address: "6 rue du test",
  phoneNumber: "0123456789",
  contact: "Contact Test",
  agrementNumber: "EFG-123456-HI",
};

test.beforeEach(async ({ page }) => {
  await removeUser("client-collect-point@access-collect.fr");
  await removeOrganisation("Organisation-test-add-collect-point");
  await injectUser(
    organisation,
    "client-collect-point@access-collect.fr",
    "client",
  );
  await injectOrganisation(organisation);
  //To do with session = inject user with role admin and need connect the user and navigate to dashboard/collected-point-list
  await page.goto("/dashboard/collected-point-list");
});
//later we need to improve this test => User-Admin experience on dashboard/collected-point-list
test("User experience on dashboard/collected-point-list", async ({ page }) => {
  //check content
  await expect(page.locator("body")).toMatchAriaSnapshot(`
      - text: POINT DE COLLECTE
      - img "Pictogramme rond avec +"
      - link "Créer":
        - button "Créer"
      - heading "Liste de mes points de collectes :" [level=1]
      - table:
        - rowgroup:
          - row "Nom Adresse Jour de collecte Consulter":
            - cell "Nom"
            - cell "Adresse"
            - cell "Jour de collecte"
            - cell "Consulter"
        - rowgroup
      `);
  //create a collect point - check content
  await page.getByRole("button", { name: "Créer" }).click();
  await expect(page.locator("body")).toMatchAriaSnapshot(`
      - text: "POINT DE COLLECTE AJOUTER UN POINT DE COLLECTE Nom du point de collecte :"
      - textbox "Point Exemple"
      - text: "Adresse:"
      - textbox /3 rue de l'exemple \\d+ Exemple-Ville/
      - text: "Jour de collecte: Lundi"
      - checkbox: monday
      - text: Mardi
      - checkbox: tuesday
      - text: Mercredi
      - checkbox: wednesday
      - text: Jeudi
      - checkbox: thursday
      - text: Vendredi
      - checkbox: friday
      - text: "Nom de l'organisation:"
      - combobox:
        - option "--Choisir une option--" [selected]
        - text: ;
      - text: "Nom du client:"
      - combobox [disabled]:
        - option "--Choisir une option--" [selected]
      - button "ANNULER"
      - button "Confirmer"
      `);
  await page.getByPlaceholder("Point Exemple").click();
  await page.getByPlaceholder("Point Exemple").fill("Point de test");
  await page.getByPlaceholder("3 rue de l'exemple 01234").click();
  await page
    .getByPlaceholder("3 rue de l'exemple 01234")
    .fill("4 rue des tests");
  await page
    .locator("div")
    .filter({ hasText: /^Lundi$/ })
    .getByRole("checkbox")
    .check();
  await page
    .locator("div")
    .filter({ hasText: /^Mercredi$/ })
    .getByRole("checkbox")
    .check();
  await page
    .getByTestId("select-organisation")
    .selectOption({ label: organisation.name });
  await page.getByTestId("select-client").selectOption({ label: "User Test" });
  await page.getByRole("button", { name: "Confirmer" }).click();
  await page
    .getByRole("link", {
      name: "Accéder à la page dashboard/point de collecte Points de collecte",
    })
    .click();
  await expect(page.getByRole("cell", { name: "Point de test" })).toContainText(
    "Point de test",
  );
  await expect(page.getByRole("cell", { name: "rue des tests" })).toContainText(
    "rue des tests",
  );
  await expect(
    page.getByRole("cell", { name: "Lundi Mercredi" }),
  ).toContainText("Lundi Mercredi");
  await removeOrganisation("Organisation-test-add-collect-point");
  await removeOrganisation("Organisation-client-collect-point");
});
