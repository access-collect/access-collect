import { test, expect } from "@playwright/test";
import { removeCollectPoint } from "./functions";

test.beforeEach(async ({ page }) => {
  await removeCollectPoint("Point de test");
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

test("Super-Admin create collect point on dashboard/collected-point-list", async ({
  page,
}) => {
  await page
    .getByRole("link", {
      name: "Accéder à la page dashboard/point de collecte Points de collecte",
    })
    .click();
  await expect(page).toHaveURL("dashboard/collected-point-list");
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
  await page.getByRole("button", { name: "Créer" }).click();
  // await expect(page).toHaveURL("dashboard/add-collected-point");
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
    .selectOption({ label: "Organisation-test-global" });
  await page
    .getByTestId("select-client")
    .selectOption({ label: "Client Name" });
  await page.getByRole("button", { name: "Confirmer" }).click();
  await expect(page.locator("#swal2-html-container")).toMatchAriaSnapshot(
    `- text: Le point de collecte a bien été ajouté !`,
  );
  await page.getByLabel("Fermer la pop up").click();
  await expect(page).toHaveURL("dashboard/collected-point-list");
  await expect(page.getByTestId("name-Point de test")).toContainText(
    "Point de test",
  );
  await expect(page.getByTestId("address-Point de test")).toContainText(
    "4 rue des tests",
  );
  await expect(page.getByTestId("days-Point de test")).toContainText(
    "Lundi Mercredi",
  );

  await removeCollectPoint("Point de test");
});
