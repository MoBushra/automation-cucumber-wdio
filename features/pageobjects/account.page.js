import BasePage from './basePage.page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
export default class AccountPage extends BasePage {
    /**
     * define selectors using getter methods
     */
    get headerMessage () { return $('div#content > h2:nth-of-type(2)') }

    get signOutLnk() { return $('.list-inline  ul > li:nth-of-type(5) > a')}

    signOut() {
     this.dropdownMenu.click();
     this.signOutLnk.click();
    }
    
}

export const accountPage = new AccountPage();
