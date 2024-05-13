import { test, expect } from '@playwright/test';
import { RegisterPage } from '../pages/register.page';
import { registerData } from '../tests-data/register.data';

test.describe(
  'Register Page Tests - By creating an account',
  { tag: ['@register, @integration'] },
  () => {
    test('Creating new account', async ({ page }) => {
      await page.goto('/');
      const firstName = registerData.firstName;
      const lastName = registerData.lastName;
      const userEmail = registerData.userEmail;
      const userPassword = registerData.userPassword;
      const confirmPassword = registerData.confirmPassword;

      const registerPage = new RegisterPage(page);
      // await registerPage.registerButton.click();
      // await registerPage.registerFirstName.fill(firstName);
      // await registerPage.registerLastName.fill(lastName);
      // await registerPage.registerEmail.fill(userEmail);
      // await registerPage.registerPassword.fill(userPassword);
      // await registerPage.registerPasswordConfirm.fill(confirmPassword);
      // await registerPage.registerConfirm.click();

      await registerPage.register(
        firstName,
        lastName,
        userEmail,
        userPassword,
        confirmPassword,
      );

      await expect(registerPage.registerSuccessfull).toHaveText(
        'Your registration completed',
      );
    });
  },
);
