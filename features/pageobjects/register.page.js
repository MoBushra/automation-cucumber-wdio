import BasePage from './basePage.page';
import * as faker from 'faker';


export default class RegisterPage extends BasePage {
    
    get firstNameElem() { return $('input#input-firstname') }

    get lastNameElem() { return $('input#input-lastname') }

    get userEmailElem() { return $('input#input-email') }

    get userPhoneNumberElem() { return $('input#input-telephone') }

    get userAddresselem() { return $('input[name="address_1"]') }

    get userCityElem() { return $('input#input-city') }

    get userPostCodeElem() { return $('input#input-postcode') }
    
    // UK is pre-selected at index 222, change if needed
    userCountryElem(index) { return $(`select#input-country > option[value='${index}']`) }

    // Send random number between 3513-3612
    get userRegionElem() { return $('select#input-zone') }
    userRegion(index) { return $(`select#input-zone > option[value='${index}']`) }

    get userPassElem() { return $('input#input-password') }
    
    get userPassConfirmElem() { return $('input#input-confirm') }

    get agreePrivacyPolicy() { return $('input[name="agree"]') }

    get btnContinue() { return $('input[value="Continue"]') }
    
   register() { 
       this.firstNameElem.setValue(faker.name.firstName())
       this.lastNameElem.setValue(faker.name.lastName())
       this.userEmailElem.setValue(faker.internet.email())
       this.userPhoneNumberElem.setValue(`+44${faker.phone.phoneNumber('07#########')}`)
       this.userAddresselem.setValue(faker.address.streetAddress())
       this.userCityElem.setValue(faker.address.city())
       this.userPostCodeElem.setValue(faker.address.zipCode('W# #SN'))
       this.userRegion(3516).click()
       this.userPassElem.setValue('test12345')
       this.userPassConfirmElem.setValue('test12345')

       // Accept the Privacy Policy
       this.agreePrivacyPolicy.click()
       this.btnContinue.click()
   }
    
}

export const registerPage = new RegisterPage();
