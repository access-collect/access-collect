import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/dashboard/add-user");
});

//to be done again but need to change add-user form
test.describe("Add User Page", () => {
  test("What add-user page should contains", async ({ page }) => {
    await expect(page).toHaveTitle(/Access Collect/);
    expect(page.getByText("UTILISATEUR")).toBeVisible;
    expect(page.getByText("AJOUTER UN UTILISATEUR :")).toBeVisible;
    expect(page.locator('input[name:"name"]')).toBeVisible;
    expect(page.locator('input[name:"email"]')).toBeVisible;
    expect(page.locator('input[name:"password"]')).toBeVisible;
    expect(page.locator('input[name:"phone"]')).toBeVisible;
    expect(page.locator('input[name:"agrement"]')).toBeVisible;
    expect(page.locator('select[name:"role"]')).toBeVisible;
    expect(page.locator('select[name:"organisationId"]')).toBeVisible;
    expect(page.getByRole("button", { name: "ANNULER" })).toBeVisible;
    expect(page.getByRole("button", { name: "Confirmer" })).toBeVisible;
  });

  test("Button named 'ANNULER' should redirect to user page", async ({
    page,
  }) => {
    await page
      .getByRole("button", {
        name: "ANNULER",
      })
      .click();
    await page.goto("/dashboard/user");
  });

  test("UserForm should add a user to db", async ({ page }) => {
    await page.getByPlaceholder("Nom").click();
    await page.getByPlaceholder("Nom").fill("Jean");
    await page.getByPlaceholder("Email").click();
    await page.getByPlaceholder("Email").fill("jeanValou@mail.fr");
    await page.locator('input[name="password"]').click();
    await page.locator('input[name="password"]').fill("JeanValJean");
    await page.getByPlaceholder("Téléphone").click();
    await page.getByPlaceholder("Téléphone").fill("0606060606");
    await page.locator('select[name="role"]').selectOption("admin");
    //have to correct this test here there is a problem with the selector
    await page.locator('select[name="organisationId"]').click();

    await page.getByRole("button", { name: "Confirmer" }).click();
  });
});
