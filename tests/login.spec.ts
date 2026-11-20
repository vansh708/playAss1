 
import { test, expect } from '@playwright/test';
 
test('test', async ({ page }) => {
  await page.goto('https://thedappled.com/testing/ui-automation/login?a=UF0VkoWqSoiq');
  await page.getByTestId('login-email').click();
  await expect(page.getByTestId('login-email')).toHaveValue('');
  await expect(page.getByTestId('login-password')).toHaveValue('');
  await page.getByTestId('login-submit').click();
  await page.getByTestId('login-email').fill('Test@1234');
  await page.getByTestId('login-email').fill('demo@gmail.com');
  await page.getByTestId('login-email').click();
  await page.getByTestId('login-email').click();
  await page.getByTestId('login-email').fill('demo@gmail.com');
  await page.getByTestId('login-password').click();
  await page.getByTestId('login-password').fill('Test@1234');
  await page.getByTestId('login-toggle-password').click();
  await page.getByTestId('login-remember').check();
  await page.getByTestId('login-submit').click();
  await page.getByTestId('login-password').click();
  await page.getByTestId('login-password').fill('Test@1235');
  await page.getByTestId('login-submit').click();
  await page.getByTestId('login-error').click();
});