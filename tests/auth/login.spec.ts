import { test } from "@playwright/test";
import { LoginPage } from "../../pages/login.pages";
import { readAccounts } from "../../utils/readExcel";

const accounts: any = readAccounts("test-data/accounts.xlsx");

accounts.forEach((account: any) => {
  test(`login test with ${account.username}`, async ({ page }) => {
    const loginPage = new LoginPage(page);

    await page.goto(
      "https://auth-staging.vikble.com/Account/Login?client_id=PickCourt_Portal_Staging&response_type=code&ReturnUrl=%2Fconnect%2Fauthorize%3Fclient_id%3DPickCourt_Portal_Staging%26response_type%3Dcode%26redirect_uri%3Dhttps%253A%252F%252Fportal-staging.vikble.com%252Fauth%252Fcallback%26scope%3Dopenid%2Bprofile%2Bemail%2BPickCourt%2Boffline_access%26code_challenge%3DbWh4RNnkIO6AyJtOKC0v27G4DJJC2TqMuyaaLpVZgh4%26code_challenge_method%3DS256&culture=vi&__tenant=Vietnam",
    );

    await loginPage.login(account.username, account.password);
  });
});
