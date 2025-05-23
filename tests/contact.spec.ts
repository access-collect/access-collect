import {expect, test} from "@playwright/test";

test.beforeEach(async ({ page }) => {
    await page.goto("/");
});

test("success: user send an email on page contact", async ({ page }) => {
    await page.getByRole('link', { name: 'Contact', exact: true }).click();
    await expect(page.locator("body")).toMatchAriaSnapshot(`
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
    await page.getByPlaceholder('Nom*').click();
    await page.getByPlaceholder('Nom*').fill('synowski');
    //await expect(page.getByRole('button', { name: 'Valider' })).toBeDisabled();
    await page.getByPlaceholder('Adresse mail*').click();
    await page.getByPlaceholder('Adresse mail*').fill('testContact@gmail.com');
    await page.getByPlaceholder('Votre message ici...*').click();
    await page.getByPlaceholder('Votre message ici...*').fill('blablabla');
    await page.getByRole('checkbox').check();
    await page.locator('iframe[name="a-jols5ic3hyg4"]').contentFrame().getByText('I\'m not a robot').click();
    await page.getByRole('button', { name: 'Valider' }).click();
    await page.getByLabel('Fermer la pop up').click();
})