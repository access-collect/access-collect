import { test, expect } from "@playwright/test";
import { removeOrganisation } from "./functions";

test.beforeEach(async ({ page }) => {
  await removeOrganisation("Organisation-Test");
  await page.goto("/");
  await page.getByRole("link", { name: "Cliquer sur le bouton SE" }).click();
  await page.getByPlaceholder("Email").click();
  await page
    .getByPlaceholder("Email")
    .fill("super-admin-test@access-collect.fr");
  await page.locator('input[name="password"]').click();
  await page.locator('input[name="password"]').fill("Test1234!");
  await page.getByRole("button", { name: "CONNEXION" }).click();
  await page
    .getByRole("link", {
      name: "Accéder à la page dashboard/organisation Organisations",
    })
    .click();
});

test("Super-admin create and delete an organisation", async ({ page }) => {
  await expect(page).toHaveURL("dashboard/organisation");
  await expect(page.locator("body")).toMatchAriaSnapshot(`
    - text: ORGANISATIONS
    - img "Pictogramme rond avec +"
    - link "Créer":
      - button "Créer"
    - heading "Liste des organisations :" [level=1]
    - table:
      - rowgroup:
        - row "Nom Contact Numéro de téléphone Consulter":
          - cell "Nom"
          - cell "Contact"
          - cell "Numéro de téléphone"
          - cell "Consulter"
      - rowgroup:
        - row /Organisation-test-global Test Contact \\d+ voir l'organisation en détail/:
          - cell "Organisation-test-global"
          - cell "Test Contact"
          - cell /\\d+/
          - cell "voir l'organisation en détail":
            - link "voir l'organisation en détail":
              - img "voir l'organisation en détail"
    `);

  await page.getByRole("button", { name: "Créer" }).click();
  await expect(page).toHaveURL("dashboard/add-organisation");
  await page.getByPlaceholder("Nom").click();
  await page.getByPlaceholder("Nom").fill("Organisation-Test");
  await page.getByPlaceholder("Adresse").click();
  await page.getByPlaceholder("Adresse").fill("12 rue des tests");
  await page.getByPlaceholder("Téléphone").click();
  await page.getByPlaceholder("Téléphone").fill("0123456789");
  await page.getByPlaceholder("Contact").click();
  await page.getByPlaceholder("Contact").fill("Contact Test");
  await page.getByPlaceholder("N° d'agrément").click();
  await page.getByPlaceholder("N° d'agrément").fill("AA-12345-CD-3");
  await page.getByRole("button", { name: "Confirmer" }).click();
  await expect(page.locator("#swal2-html-container")).toMatchAriaSnapshot(
    `- text: L'organisation a bien été ajouté !`,
  );
  await page.getByLabel("Fermer la pop up").click();

  await expect(page.getByTestId("name-Organisation-Test")).toContainText(
    "Organisation-Test",
  );
  await expect(page.getByTestId("contact-Organisation-Test")).toContainText(
    "Contact Test",
  );
  await expect(page.getByTestId("phone-Organisation-Test")).toContainText(
    "0123456789",
  );
  //go to organisation/[id] page and check content
  await page.getByTestId("link-to-organisation/id-Organisation-Test").click();
  await expect(page.locator("body")).toMatchAriaSnapshot(`
    - text: ORGANISATION
    - img "Pictogramme avec crayon"
    - button "Modifier"
    - img "pictogramme poubelle"
    - button "Supprimer"
    - heading "INFORMATIONS DE L'ORGANISATION" [level=1]
    - paragraph: "NOM : Organisation-Test"
    - paragraph: "NOM DU CONTACT : Contact Test"
    - paragraph: "/ADRESSE : \\\\d+ rue des tests/"
    - paragraph: "/TELEPHONE : \\\\d+/"
    - paragraph: "/N° D'AGREMENT : AA-\\\\d+-CD-3/"
    `);

  await page.getByRole("button", { name: "Supprimer" }).click();
  await expect(page.getByLabel("Suppression de l'organisation"))
    .toMatchAriaSnapshot(`
    - dialog "Suppression de l'organisation":
      - heading "Suppression de l'organisation" [level=2]
      - text: Veuillez confirmer la suppression de l'organisation svp ?
      - button "Confirmer": CONFIRMER
      - button "Annuler": ANNULER
    `);
  await page.getByLabel("Confirmer").click();
  await expect(page.getByRole("dialog")).toMatchAriaSnapshot(`
    - dialog:
      - button "Fermer la pop up"
      - text: L'organisation a bien été supprimée
    `);
  await page.getByLabel("Fermer la pop up").click();
  await expect(page).toHaveURL("dashboard/organisation");
  await expect(
    page.getByText("Liste des organisations : NomContactNuméro de télé"),
  ).not.toContainText("Organisation-Test");
});
