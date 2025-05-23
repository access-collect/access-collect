import { test, expect } from "@playwright/test";
import {
  injectOrganisation,
  injectUser,
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
  await removeUser("test@access-collect.fr");
  await removeOrganisation("Organisation-test-add-user");
  await injectOrganisation(organisation);
  await page.goto("/");
  await page.getByRole("link", { name: "Cliquer sur le bouton SE" }).click();
  await page.getByPlaceholder("Email").click();
  await page
    .getByPlaceholder("Email")
    .fill("super-admin-test@access-collect.fr");
  await page.locator('input[name="password"]').click();
  await page.locator('input[name="password"]').fill("Test1234!");
  await page.getByRole("button", { name: "CONNEXION" }).click();
});

test("Creating a user by a super admin", async ({ page }) => {
  await page.getByText("Utilisateurs").click();
  await expect(page).toHaveURL("dashboard/user");
  await expect(page.locator("body")).toMatchAriaSnapshot(`
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
      - rowgroup:
        - row "Super-admin Name super-admin-test@access-collect.fr superAdmin Organisation-test-global":
          - cell "Super-admin Name"
          - cell "super-admin-test@access-collect.fr"
          - cell "superAdmin"
          - cell "Organisation-test-global"
        - row "Admin Name admin-test@access-collect.fr admin Organisation-test-global":
          - cell "Admin Name"
          - cell "admin-test@access-collect.fr"
          - cell "admin"
          - cell "Organisation-test-global"
        - row "Collecteur Name collector-test@access-collect.fr collector Organisation-test-global":
          - cell "Collecteur Name"
          - cell "collector-test@access-collect.fr"
          - cell "collector"
          - cell "Organisation-test-global"
        - row "Client Name client-test@access-collect.fr client Organisation-test-global":
          - cell "Client Name"
          - cell "client-test@access-collect.fr"
          - cell "client"
          - cell "Organisation-test-global"
    `);

  await page.getByRole("button", { name: "Créer" }).click();
  await expect(page).toHaveURL("dashboard/add-user");
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
      - button "Fermer la pop up"
      - text: L'utilisateur a bien été ajouté !
    `);
  await page.getByLabel("Fermer la pop up").click();
  await expect(page).toHaveURL("dashboard/user");

  await expect(page.getByTestId("name-Test")).toContainText("Test");
  await expect(page.getByTestId("email-Test")).toContainText(
    "test@access-collect.fr",
  );
  await expect(page.getByTestId("role-Test")).toContainText("admin");
  await expect(page.getByTestId("orga-name-Test")).toContainText(
    "Organisation-test-add-user",
  );
  await removeUser("test@access-collect.fr");
  await removeOrganisation("Organisation-test-add-user");
});
