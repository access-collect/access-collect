import { test, expect } from "@playwright/test";
import { insertOrganisation, removeOrganisation } from "./functions";

test.beforeEach(async ({ page }) => {
  await page.goto("/dashboard/organisation");
});

//have to change bd test in local

// test("What page should contain", async ({ page }) => {
//   await expect(page.locator('body')).toMatchAriaSnapshot(`
//       - text: ORGANISATIONS
//       - link "pictogramme ajouter Créer":
//         - img "pictogramme ajouter"
//         - button "Créer"
//       - heading "Liste des organisations :" [level=1]
//       - table:
//         - rowgroup:
//           - row "Nom Contact Numéro de téléphone Consulter":
//             - cell "Nom"
//             - cell "Contact"
//             - cell "Numéro de téléphone"
//             - cell "Consulter"
//         - rowgroup:
//           - row /IléCompany Iléana BOLAS \\d+ voir l'organisation en détail/:
//             - cell "IléCompany"
//             - cell "Iléana BOLAS"
//             - cell /\\d+/
//             - cell "voir l'organisation en détail":
//               - link "voir l'organisation en détail":
//                 - img "voir l'organisation en détail"
//       `);

//   });

test("Layout link named 'utilisateurs' should redirect to user page", async ({
  page,
}) => {
  await page
    .getByRole("link", {
      name: "Accéder à la page dashboard/utilisateur Utilisateurs",
    })
    .click();
  await expect(page).toHaveURL(/.*\/user/);
});

test("Layout link named 'organisations' should redirect to organisations page", async ({
  page,
}) => {
  await page
    .getByRole("link", {
      name: "Accéder à la page dashboard/organisation Organisations",
    })
    .click();
  await expect(page).toHaveURL(/.*\/organisation/);
});

test("Layout link named 'Points de collecte' should redirect to collectPoint page", async ({
  page,
}) => {
  await page
    .getByRole("link", {
      name: "Accéder à la page dashboard/point de collecte Points de collecte",
    })
    .click();
  await expect(page).toHaveURL(/.*\/collected-point-list/);
});

test("Link named 'Créer' should redirect to add-organisation page", async ({
  page,
}) => {
  await page
    .getByRole("link", {
      name: "pictogramme ajouter Créer",
    })
    .click();
  await expect(page).toHaveURL(/.*\/add-organisation/);
});
