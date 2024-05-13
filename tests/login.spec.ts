import { test, expect } from '@playwright/test';
import { loginData } from '../tests-data/login.data';
import { LoginPage } from '../pages/login.page';

test.describe('Login Page Tests', { tag: ['@login, @integration'] }, () => {
  let loginPage: LoginPage;
  const userEmail = loginData.userEmail;
  const userPassword = loginData.userPassword;

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    loginPage = new LoginPage(page);
  });

  test('login with correct credentials @smoke', async ({ page }) => {
    const expectedInfoUserAccount = loginData.expectedInfoUserAccount;
    await loginPage.login(userEmail, userPassword);
    await loginPage.loginMyAccount.first().click();

    await expect(loginPage.loginSuccessfull).toHaveText(
      expectedInfoUserAccount,
    );
  });

  test('unsuccessful login with incorrect username', async ({ page }) => {
    const userEmailIncorrect = loginData.userEmailIncorrect;
    const expectedErrorUserNameIncorrect =
      loginData.expectedErrorUserNameIncorrect;
    await loginPage.loginFailed(userEmailIncorrect, userPassword);

    await expect(loginPage.loginErrorEmailInccorect).toHaveText(
      expectedErrorUserNameIncorrect,
    );
  });

  test('unsuccessful login with incorrect password', async ({ page }) => {
    const expectedErrorPasswordIncorrect =
      loginData.expectedErrorPasswordIncorrect;
    const userPasswordIncorrect = loginData.userPasswordIncorrect;
    await loginPage.loginFailed(userEmail, userPasswordIncorrect);

    await expect(loginPage.loginErrorPasswordInccorect).toHaveText(
      expectedErrorPasswordIncorrect,
    );
  });
});
