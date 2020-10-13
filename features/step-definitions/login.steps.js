import { Given, When, Then } from 'cucumber';

import { homePage } from '../pageobjects/home.page'
import { accountPage } from '../pageobjects/account.page';


Given(/^I am on the home page$/, () => {
    homePage.openHomePage()
});

When(/^I login with (.*) and (.*)$/, (username, password) => {
    homePage.userLogin(username, password)
});

Then(/^I should see a header message saying (.*)$/, (message) => {
    expect(accountPage.headerMessage).toBeExisting()
    expect(accountPage.headerMessage).toHaveTextContaining(message)
    accountPage.signOut()
});
