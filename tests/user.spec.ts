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

test("check content of user page", async ({ page }) => {
  await page.goto("/dashboard/user");
  await expect(page.locator("body")).toMatchAriaSnapshot(`
    - text: UTILISATEURS
    - link "pictogramme ajouter Créer":
      - img "pictogramme ajouter"
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
});

test('the link named "Créer" should redirect to add-user page', async ({
  page,
}) => {
  await removeUser("test-add-user@access-collect.fr");
  await removeOrganisation("Organisation-test-add-user");
  await injectOrganisation(organisation);
  await page.goto("/dashboard/user");
  await page.getByRole("link", { name: "Pictogramme rond avec +" }).click();
  await expect(page.locator('body')).toMatchAriaSnapshot(`
    - text: "UTILISATEUR AJOUTER UN UTILISATEUR : Nom:"
    - textbox "Nom"
    - text: "Email:"
    - textbox "Email"
    - text: "Mot de passe:"
    - textbox
    - text: "N° de téléphone:"
    - textbox "Téléphone"
    - text: "Rôle:"
    - combobox:
      - option "--Choisir une option--" [selected]
      - option "superadmin"
      - option "admin"
      - option "client"
      - option "collector"
    - text: "Organisation:"
    - combobox:
      - option "--Choisir une option--" [selected]
      - option "IléCompany"
      - text: ;
    - button "ANNULER"
    - button "Confirmer"
    `);

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
  await expect(page.getByRole("dialog")).toMatchAriaSnapshot(`
    - dialog:
      - button "Close this dialog"
      - text: L'utilisateur a bien été ajouté !
    `);
  await page.getByLabel("Close this dialog").click();
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
