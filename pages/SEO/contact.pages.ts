import { Page, Locator } from "@playwright/test";

export class ContactPage {
  readonly page: Page;
  readonly name: Locator;
  readonly email: Locator;
  readonly message: Locator;
  readonly btnSend: Locator;

  constructor(page: Page) {
    this.page = page;
    this.name = page.locator("#name");
    this.email = page.locator("#email");
    this.message = page.locator("#message");
    this.btnSend = page.getByText("Gửi tin nhắn");
  }

  async sendingMessage(name: string, email: string, message: string) {
    await this.name.fill(name);
    await this.email.fill(email);
    await this.message.fill(message);

    await this.btnSend.click();
  }
}
