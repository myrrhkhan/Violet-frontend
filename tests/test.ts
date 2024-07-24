import { expect, test } from '@playwright/test';

test('home page has expected h1', async ({ page }) => {
	await page.goto('/');
	await expect(page.locator('h1')).toBeVisible();
});

test('home page has "not browser"', async ({ page }) => {
	await page.goto('/');
	expect(page.innerText('Not browser')).toBeDefined();
});
