import { test, expect } from "@playwright/test";

test("Test connection and access to dashboard is forbidden when visitor is not connected", async ({
  page,
}) => {
  //user is not connected
  await page.goto("/dashboard");
  await expect(page.locator("body")).toMatchAriaSnapshot(
    `- text: Vous n'êtes pas authentifié`,
  );
  //user goes to homepage and try to login
  await page.goto("/");
  await page.getByRole("link", { name: "Cliquer sur le bouton SE" }).click();
  await page.getByRole("button", { name: "CONNEXION" }).click();
  await expect(page.getByPlaceholder("Email")).toHaveAttribute("required");
  await page.getByPlaceholder("Email").click();
  await page.getByPlaceholder("Email").fill("admin-test@access-collect.fr");
  await page.getByRole("button", { name: "CONNEXION" }).click();
  await expect(page.getByTestId("input-password-home")).toHaveAttribute(
    "required",
  );
  await page.getByTestId("input-password-home").fill("Test1234!");
  await page.getByRole("button", { name: "CONNEXION" }).click();
  await expect(page.getByRole("heading")).toMatchAriaSnapshot(
    `- heading "Bonjour Super Admin," [level=1]`,
  );
  await page.getByRole("button", { name: "deconnexion" }).click();
  await expect(page.getByRole("navigation")).toMatchAriaSnapshot(
    `- link "Cliquer sur le bouton SE CONNECTER"`,
  );
});
