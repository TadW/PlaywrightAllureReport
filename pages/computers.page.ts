import { Page } from '@playwright/test';
import { TopMenu } from '../components/top-menu.component';

export class ComputersPage {
  constructor(private page: Page) {}

  selectCpu = this.page.getByLabel('Intel Core i7');
  selectMemory = this.page.getByLabel('16 GB');
  addTocart = this.page.getByRole('button', { name: 'Add to cart' });
  closeInfoCart = this.page.getByTitle('Close');
  gotoShoppingCart = this.page.getByRole('link', { name: 'Shopping cart (1)' });
  agreeTerms = this.page.getByLabel('I agree with the terms of');
  gotoCheckout = this.page.getByRole('button', { name: 'Checkout' });
  selectCountry = this.page.getByLabel('Country:');
  selectState = this.page.getByLabel('State / province:');
  selectCity = this.page.getByLabel('City:');
  fillAddress = this.page.getByLabel('Address 1:');
  fillPostalCode = this.page.getByLabel('Zip / postal code:');
  fillPhoneNumber = this.page.getByLabel('Phone number:');
  continueClick = this.page.getByRole('button', { name: 'Continue' });
  confirmClick = this.page.getByRole('button', { name: 'Confirm' });

  orderSuccessfully = this.page.locator('.page-body .title');

  topMenu = new TopMenu(this.page);

  async orderComputer(
    city: string,
    address: string,
    postalCode: string,
    phoneNumber: string,
  ): Promise<void> {
    await this.selectCpu.check();
    await this.selectMemory.check();
    await this.page.waitForTimeout(2000);
    await this.addTocart.click();
    await this.closeInfoCart.click();
    await this.gotoShoppingCart.click();
    await this.agreeTerms.check();
    await this.gotoCheckout.click();
    await this.selectCountry.selectOption('1');
    await this.selectState.selectOption('47');
    await this.selectCity.fill(city);
    await this.fillAddress.fill(address);
    await this.fillPostalCode.fill(postalCode);
    await this.fillPhoneNumber.fill(phoneNumber);
    await this.continueClick.click();
    await this.page.waitForTimeout(2000);
    await this.continueClick.click();
    await this.page.waitForTimeout(2000);
    await this.continueClick.click();
    await this.page.waitForTimeout(2000);
    await this.continueClick.click();
    await this.page.waitForTimeout(2000);
    await this.confirmClick.click();
    await this.page.waitForTimeout(2000);
  }
}
