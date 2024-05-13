import { Page } from '@playwright/test';

export class SideMenu {
  constructor(private page: Page) {}
  selectNotebooksSideMenu = this.page.getByRole('link', { name: 'Notebooks' }).first();
}
