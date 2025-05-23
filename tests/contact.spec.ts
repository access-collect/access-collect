import { expect, test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

test("check content of page contact and check button is disabled", async ({
  page,
}) => {
  await page.getByRole("link", { name: "Contact", exact: true }).click();
  await expect(page.getByTestId("contactFormPage")).toMatchAriaSnapshot(`
    - heading "FORMULAIRE DE CONTACT" [level=1]
    - img "image décoratif pour nous contacter"
    - text: Nom
    - textbox "Nom*"
    - text: Adresse mail
    - textbox "Adresse mail*"
    - text: Message
    - textbox "Votre message ici...*"
    - checkbox: En soumettant ce formulaire, j'accepte que les informations saisies soient utilisées dans le but de me recontacter.
    - text: En soumettant ce formulaire, j'accepte que les informations saisies soient utilisées dans le but de me recontacter.
    - button "Valider" [disabled]
    `);
});
