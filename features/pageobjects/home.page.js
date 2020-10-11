import BasePage from './basePage.page';
import LoginPage from './login.page';
import RegisterPage from './register.page';

class HomePage extends BasePage {

    get loginLink() { return $('.list-inline  ul > li:nth-of-type(2) > a')}

    get registerLink() { return $('.list-inline  ul > li:nth-of-type(1) > a')}

    openHomePage() { 
        super.open('/') }

    async userLogin(username, password) {
        await (await this.dropdownMenu).click()
        await (await this.loginLink).click()
        LoginPage.login(username, password)
    }

    async userRegister() {
        await (await this.dropdownMenu).click()
        await (await this.registerLink).click()
        RegisterPage.register()
    }

}

export default new HomePage();