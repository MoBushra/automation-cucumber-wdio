import BasePage from './basePage.page';

export default class AccountSuccessPage extends BasePage {
    
    get successMessage () { return $('div#content > p:nth-of-type(1)') }

}

export const accountSuccessPage = new AccountSuccessPage();
