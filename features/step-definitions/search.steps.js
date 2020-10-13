import { When, Then } from 'cucumber';

import { homePage } from '../pageobjects/home.page'
import { searchResultsPage } from '../pageobjects/searchResults.page';

When(/^I search (.*) on the site$/, (searchItem) => {
    homePage.searchProducts(searchItem)
});

Then(/^I should see results containing (.*)$/, (searchItem) => {
    expect(searchResultsPage.productResultsGrid).toBeExisting()
    expect(searchResultsPage.firstProductName).toHaveTextContaining(searchItem)
});