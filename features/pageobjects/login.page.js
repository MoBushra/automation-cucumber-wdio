import BasePage from './basePage.page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
export default class LoginPage extends BasePage {
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
    login (username, password) {
        this.inputEmail.setValue(username);
        this.inputPassword.setValue(password);
        this.btnLogin.click();
    }
}

export const loginPage = new LoginPage();
