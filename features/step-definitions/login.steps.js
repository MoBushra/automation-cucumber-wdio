import { Given, When, Then } from 'cucumber';

import HomePage from '../pageobjects/home.page'
import AccountPage from '../pageobjects/account.page';


Given(/^I am on the home page$/, () => {
    HomePage.openHomePage()
});

When(/^I login with (.*) and (.*)$/, (username, password) => {
    HomePage.userLogin(username, password)
});

Then(/^I should see a header message saying (.*)$/, async (message) => {
    await expect(AccountPage.headerMessage).toBeExisting()
    await expect(AccountPage.headerMessage).toHaveTextContaining(message)
    AccountPage.signOut()
});
