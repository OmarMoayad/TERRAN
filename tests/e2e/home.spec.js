import { expect, test } from "@playwright/test";

test("homepage renders the storefront and ordering links", async ({ page }) => {
  await page.goto("/");

  await expect(page).toHaveTitle(/TERRAN/);
  await expect(page.getByRole("heading", { name: "أناقتك تبدأ من" })).toBeVisible();
  await expect(page.getByRole("link", { name: "اطلب الآن" })).toHaveAttribute(
    "href",
    "https://www.instagram.com/terran.ps/",
  );
  await expect(page.getByRole("heading", { name: "اختر بكجك" })).toBeVisible();
});

test("unknown routes render the branded not-found page", async ({ page }) => {
  const response = await page.goto("/missing-e2e-route");

  expect(response?.status()).toBe(404);
  await expect(page.getByRole("heading", { name: "عذرًا، الصفحة التي تبحث عنها غير موجودة" })).toBeVisible();
});
