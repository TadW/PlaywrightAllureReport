import { test, expect } from '@playwright/test';
import { loginData } from '../tests-data/login.data';
import { LoginPage } from '../pages/login.page';
import { computersData } from '../tests-data/computers.data';
import { ComputersPage } from '../pages/computers.page';

test.describe(
  'Computers Page Order Tests',
  { tag: ['@computers, @integration'] },
  () => {
    const userEmail = loginData.userEmail;
    const userPassword = loginData.userPassword;

    test.beforeEach(async ({ page }) => {
      await page.goto('/');

      const loginPage = new LoginPage(page);
      await loginPage.login(userEmail, userPassword);
      await loginPage.topMenu.selectComputersTopMenu.click();
      await loginPage.sideMenu.selectNotebooksSideMenu.click();
    });

    test('select notebooks and order successfully ', async ({ page }) => {
      const computersPage = new ComputersPage(page);
      const city = computersData.city;
      const address = computersData.address;
      const postalCode = computersData.postalCode;
      const phoneNumber = computersData.phoneNumber;

      await computersPage.orderComputer(city, address, postalCode, phoneNumber);

      await expect(computersPage.orderSuccessfully).toHaveText(
        computersData.orderSuccessfullyMessage,
      );
    });
  },
);
