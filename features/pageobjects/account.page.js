import BasePage from './basePage.page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class AccountPage extends BasePage {
    /**
     * define selectors using getter methods
     */
    get headerMessage () { return $('div#content > h2:nth-of-type(2)') }

    get signOutLnk() { return $('.list-inline  ul > li:nth-of-type(5) > a')}

    async signOut() {
        await (await this.dropdownMenu).click();
        await (await this.signOutLnk).click();
    }
}

export default new AccountPage();
