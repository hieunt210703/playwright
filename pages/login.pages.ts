import { Page, Locator } from "@playwright/test";

export class LoginPage {
  readonly page: Page;
  readonly username: Locator;
  readonly password: Locator;
  readonly loginBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.username = page.locator("#LoginInput_UserNameOrEmailAddress");
    this.password = page.locator("#LoginInput_Password");
    this.loginBtn = page.locator("#loginBtn");
  }

  async login(user: string, pass: string) {
    await this.username.fill(user);
    await this.password.fill(pass);

    await Promise.all([this.page.waitForNavigation(), this.loginBtn.click()]);
  }
}
