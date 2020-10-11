import BasePage from './basePage.page';
import loginPage from './login.page';

class HomePage extends BasePage {

    get loginLink() { return $('.list-inline  ul > li:nth-of-type(2) > a')}

    openHomePage() { 
        super.open('/') }

    async userLogin(username, password) {
        await (await this.dropdownMenu).click();
        await (await this.loginLink).click();
        loginPage.login(username, password);
    }

}

export default new HomePage();