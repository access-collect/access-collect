import { test, expect } from "@playwright/test";
import {
  injectOrganisation,
  removeOrganisation,
  removeUser,
} from "./functions";
import { NewOrganisation } from "@/lib/schema/organisation";

const organisation: NewOrganisation = {
  name: "Organisation-test-add-user",
  address: "3 rue du test",
  phoneNumber: "0123456789",
  contact: "Contact Test",
  agrementNumber: "ABC-123456-DE",
};

test.beforeEach(async ({ page }) => {
  //To do with session = inject user with role admin and need connect the user and navigate to dashboard/user
  await removeUser("test-add-user@access-collect.fr");
  await removeOrganisation("Organisation-test-add-user");
  await injectOrganisation(organisation);
  await page.goto("/dashboard/user");
});
//later we need to improve this test => User-Admin experience on dashboard/user
test("User experience on dashboard/user", async ({ page }) => {
  //check content of page 
  await expect(page.locator('body')).toMatchAriaSnapshot(`
    - text: UTILISATEURS
    - img "Pictogramme rond avec +"
    - link "Créer":
      - button "Créer"
    - heading "Liste des utilisateurs :" [level=1]
    - table:
      - rowgroup:
        - row "Nom Email Rôle Entreprise":
          - cell "Nom"
          - cell "Email"
          - cell "Rôle"
          - cell "Entreprise"
      - rowgroup
    `);
    //go to add-user and create a new user
  await page.getByRole('button', { name: 'Créer' }).click();
    await page.getByPlaceholder("Nom").click();
  await page.getByPlaceholder("Nom").fill("Test");
  await page.getByPlaceholder("Email").click();
  await page.getByPlaceholder("Email").fill("test@access-collect.fr");
  await page.locator('input[name="password"]').click();
  await page.locator('input[name="password"]').fill("Test1234!");
  await page.getByPlaceholder("Téléphone").click();
  await page.getByPlaceholder("Téléphone").fill("0101010101");
  await page.locator('select[name="role"]').selectOption("admin");
  await page
    .getByTestId("organisation-select")
    .selectOption({ label: organisation.name });
  await page.getByRole("button", { name: "Confirmer" }).click();
  await expect(page.getByRole('dialog')).toMatchAriaSnapshot(`
    - dialog:
      - button "Fermer la pop up"
      - text: L'utilisateur a bien été ajouté !
    `);
    await page.getByLabel('Fermer la pop up').click();
  await page
    .getByRole("link", {
      name: "Accéder à la page dashboard/utilisateur Utilisateurs",
    })
    .click();
  await expect(
    page.getByRole("cell", { name: "Test", exact: true }),
  ).toContainText("Test");
  await expect(
    page.getByRole("cell", { name: "test@access-collect.fr" }),
  ).toContainText("test@access-collect.fr");
  await expect(page.getByRole("cell", { name: "admin" })).toContainText(
    "admin",
  );
  await expect(
    page.getByRole("cell", { name: "Organisation-test-add-user" }),
  ).toContainText("Organisation-test-add-user");
  await removeUser("test@access-collect.fr");
  await removeOrganisation("Organisation-test-add-user");
});

