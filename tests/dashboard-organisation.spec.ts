import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  //To do with session = inject user with role admin and need connect the user and navigate to dashboard/organisation

  await page.goto("/dashboard/organisation");
});

//later we need to improve this test => User-Admin or SuperAdmin experience on dashboard/organisation
test("User experience on dashboard/organisation", async ({ page }) => {
    
})