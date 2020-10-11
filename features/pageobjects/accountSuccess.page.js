import BasePage from './basePage.page';

class AccountSuccessPage extends BasePage {
    
    get successMessage () { return $('div#content > p:nth-of-type(1)') }

}

export default new AccountSuccessPage();
