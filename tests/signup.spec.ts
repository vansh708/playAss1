


// import { test, expect } from '@playwright/test';
 
// test('test', async ({ page }) => {
//   await page.goto('https://thedappled.com/testing/ui-automation/signup?a=UF0VkoWqSoiq');

//   await page.getByTestId('signup-submit').click();

//   await expect(page.getByTestId('signup-name')).toHaveValue('');
//   await expect(page.getByTestId('signup-email')).toHaveValue('');
//   await expect(page.getByTestId('signup-password')).toHaveValue('');
//   await expect(page.getByTestId('signup-confirm')).toHaveValue('');

//   await page.getByTestId('signup-name').fill('Test User');
//   await page.getByTestId('signup-email').fill('demo@thedappled.com');

//   await expect(page.getByTestId('signup-email')).toHaveValue('demo@thedappled.com');

//   await page.getByTestId('signup-email').fill('invalid-email');
//   await page.getByTestId('signup-submit').click();


//   await page.getByTestId('signup-email').fill('demo@thedappled.com');
//   await page.getByTestId('signup-password').fill('Test@1234');

//   await expect(page.getByTestId('signup-strength'))
//     .toHaveText('Strong — use 8+ characters, a number and a symbol.');



//   await page.getByTestId('signup-confirm').fill('Test@1234');

//   await expect(page.getByTestId('signup-terms')).not.toBeChecked();
//   await page.getByTestId('signup-terms').check();
//   await expect(page.getByTestId('signup-terms')).toBeChecked();

//   await page.getByTestId('signup-submit').click();

//   await expect(page.getByTestId('signup-success')).toBeVisible();
// });

// test.only("Validate password missmatch",async({page})=>{
//   await page.goto('https://thedappled.com/testing/ui-automation/signup?a=UF0VkoWqSoiq');
//   await page.getByTestId('signup-password').fill('Test@1234');
//   await page.getByTestId('signup-confirm').fill('Test@123');
//   await page.getByTestId('signup-submit').click();
//   await expect(page.getByTestId('signup-error-confirm')).toHaveText('Passwords do not match.')
// });
