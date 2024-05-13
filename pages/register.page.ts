import { Page } from '@playwright/test';

export class RegisterPage {
  constructor(private page: Page) {}

  registerButton = this.page.getByRole('link', { name: 'Register' });
  registerFirstName = this.page.locator('id=FirstName');
  registerLastName = this.page.locator('id=LastName');
  registerEmail = this.page.locator('id=Email');
  registerPassword = this.page.locator('id=Password');
  registerPasswordConfirm = this.page.locator('id=ConfirmPassword');
  registerConfirm = this.page.locator('id=register-button');

  registerSuccessfull = this.page.locator('.registration-result-page .result');

  async register(
    firstName: string,
    lastName: string,
    userEmail: string,
    userPassword: string,
    confirmPassword: string,
  ): Promise<void> {
    this.registerButton.click();
    this.registerFirstName.fill(firstName);
    this.registerLastName.fill(lastName);
    this.registerEmail.fill(userEmail);
    this.registerPassword.fill(userPassword);
    this.registerPasswordConfirm.fill(confirmPassword);
    this.registerConfirm.click();
  }
}
