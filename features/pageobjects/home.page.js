import BasePage from './basePage.page';
import { loginPage } from './login.page';
import { registerPage } from './register.page';

export default class HomePage extends BasePage {

    get loginLink() { return $('.list-inline  ul > li:nth-of-type(2) > a')}
    get registerLink() { return $('.list-inline  ul > li:nth-of-type(1) > a')}
    get searchInputElement() { return $('div#search > input[name="search"]')}
    get btnSearch() { return $('.btn.btn-default.btn-lg')}

    openHomePage() { 
        super.open('/') }

    userLogin(username, password) {
        this.dropdownMenu.click()
        this.loginLink.click()
        loginPage.login(username, password)
    }

    userRegister() {
        this.dropdownMenu.click()
        this.registerLink.click()
        registerPage.register()
    }

    searchProducts(searchItem) {
        this.searchInputElement.setValue(searchItem);
        this.btnSearch.click();
    }

}

export const homePage = new HomePage();