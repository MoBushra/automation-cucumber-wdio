import BasePage from './basePage.page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends BasePage {
    /**
     * define selectors using getter methods
     */
    get inputEmail () { return $('input#input-email') }
    get inputPassword () { return $('input#input-password') }
    get btnLogin () { return $("form[method='post'] > input[value='Login']") }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await (await this.inputEmail).setValue(username);
        await (await this.inputPassword).setValue(password);
        await (await this.btnLogin).click();
    }
}

export default new LoginPage();
