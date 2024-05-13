import { Page } from '@playwright/test';
import { TopMenu } from '../components/top-menu.component';
import { SideMenu } from '../components/side-menu.component';

export class LoginPage {
  constructor(private page: Page) {}

  gotoLoginPage = this.page.getByRole('link', { name: 'Log in' });
  loginEmail = this.page.getByLabel('Email:');
  loginPassword = this.page.getByLabel('Password:');
  loginButton = this.page.getByRole('button', { name: 'Log in' });
  loginMyAccount = this.page.getByRole('link', { name: 'My account' });

  loginSuccessfull = this.page.getByRole('heading', {
    name: 'My account - Customer info',
  });
  loginErrorEmailInccorect = this.page.locator('id=Email-error');
  loginErrorPasswordInccorect = this.page.locator('.message-error');

  topMenu = new TopMenu(this.page);
  sideMenu = new SideMenu(this.page);

  async login(userEmail: string, userPassword: string): Promise<void> {
    await this.gotoLoginPage.click();
    await this.loginEmail.fill(userEmail);
    await this.loginPassword.fill(userPassword);
    await this.loginButton.click();
  }

  async loginFailed(userEmail: string, userPassword: string): Promise<void> {
    await this.gotoLoginPage.click();
    await this.loginEmail.fill(userEmail);
    await this.loginPassword.fill(userPassword);
    await this.loginButton.click();
  }
}
