import { Page } from '@playwright/test';

export class TopMenu {
  constructor(private page: Page) {}
  selectComputersTopMenu = this.page.getByRole('link', { name: 'Computers' });
  selectElectronicsTopMenu = this.page.getByRole('link', { name: 'Electronics' });
  selectApparelTopMenu = this.page.getByRole('link', { name: 'Apparel' });
  selectDigitalTopMenu = this.page.getByRole('link', { name: 'Digital downloads' });
  selectBooksTopMenu = this.page.getByRole('link', { name: 'Books' });
  selectJewelryTopMenu = this.page.getByRole('link', { name: 'Jewelry' });
  selectGiftCardsTopMenu = this.page.getByRole('link', { name: 'Gift Cards' });
}
