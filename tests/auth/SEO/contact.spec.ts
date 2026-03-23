import { expect, test } from "@playwright/test";
import { ContactPage } from "../../../pages/SEO/contact.pages";
import { readAccounts } from "../../../utils/readExcel";

const contactData: any = readAccounts("test-data/SEO/customerContact.xlsx");
contactData.forEach((contact: any, index: number) => {
  test(`contact page test ${index + 1} with ${contact.name}`, async ({
    page,
  }) => {
    const contactPage = new ContactPage(page);

    await page.goto("https://staging.laztar.com/vi");

    await contactPage.sendingMessage(
      contact.name,
      contact.email,
      contact.message,
    );

    await expect(
      page.locator("text=Tin nhắn của bạn đã gửi thành công."),
    ).toBeVisible();
  });
});
