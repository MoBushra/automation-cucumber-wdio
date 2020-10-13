import { When, Then } from 'cucumber';

import { accountSuccessPage } from '../pageobjects/accountSuccess.page';
import { homePage } from '../pageobjects/home.page';


When(/^I register as a new user$/, () => {
    homePage.userRegister()
});

Then(/^I should see a success message saying (.*)$/, (message) => {
    expect(accountSuccessPage.successMessage).toBeExisting()
    expect(accountSuccessPage.successMessage).toHaveTextContaining(message)
});