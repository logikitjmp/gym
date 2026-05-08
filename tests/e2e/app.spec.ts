import { expect, test } from "@playwright/test";

test("landing page presents the premium SaaS hero", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { name: "Manage Your Gym Smarter with AI" })).toBeVisible();
  await expect(page.locator("header").getByRole("link", { name: /Start Free Trial/i })).toBeVisible();
});

test("admin dashboard renders core operational widgets", async ({ page }) => {
  await page.goto("/dashboard/admin");
  await expect(page.getByRole("heading", { name: "Gym Owner Dashboard" })).toBeVisible();
  await expect(page.getByText("Member Management")).toBeVisible();
  await expect(page.getByText("AI Fitness Assistant")).toBeVisible();
});
