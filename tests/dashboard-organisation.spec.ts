import { test, expect } from "@playwright/test";
import { removeOrganisation } from "./functions";

test.beforeEach(async ({ page }) => {
  await removeOrganisation("Organisation-Test");
  //To do with session = inject user with role admin or super admin ? and need connect the user and navigate to dashboard/organisation
  await page.goto("/dashboard/organisation");
});

//later we need to improve this test => User-Admin or SuperAdmin experience on dashboard/organisation
test("User experience on dashboard/organisation", async ({ page }) => {
  //check content
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
      - rowgroup
    `);
  //create organisation

  await page.getByRole("button", { name: "Créer" }).click();
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
  //to be removed when redirection to /dashboard/organisation is done
  await page
    .getByRole("link", {
      name: "Accéder à la page dashboard/organisation Organisations",
    })
    .click();
  await expect(
    page.getByRole("cell", { name: 'Organisation-Test', exact: true }),
  ).toContainText("Organisation-Test");
  await expect(page.getByRole("cell", { name: "Contact Test" })).toContainText(
    "Contact Test",
  );
  await expect(page.getByRole("cell", { name: "0123456789" })).toContainText(
    "0123456789",
  );
  //go to organisation/[id] page and check content
  await page.getByTestId("link-to-organisation/id0").click();
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
  //delete organisation
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
  await expect(page.locator("body")).toMatchAriaSnapshot(`
    - heading "Liste des organisations :" [level=1]
    - table:
      - rowgroup:
        - row "Nom Contact Numéro de téléphone Consulter":
          - cell "Nom"
          - cell "Contact"
          - cell "Numéro de téléphone"
          - cell "Consulter"
      - rowgroup
    `);

  await removeOrganisation("Organisation-Test");
});
