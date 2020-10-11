import { When, Then } from 'cucumber';

import AccountSuccessPage from '../pageobjects/accountSuccess.page';
import HomePage from '../pageobjects/home.page'

When(/^I register as a new user$/, () => {
    HomePage.userRegister()
});

Then(/^I should see a success message saying (.*)$/, async (message) => {
    await expect(AccountSuccessPage.successMessage).toBeExisting()
    await expect(AccountSuccessPage.successMessage).toHaveTextContaining(message)
});