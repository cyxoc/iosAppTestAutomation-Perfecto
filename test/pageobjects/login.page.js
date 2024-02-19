import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputEmail () {
        return $('~login_email');
    }

    get inputPassword () {
        return $('~login_password');
    }

    get btnSubmit () {
        return $('~Login');
    }
    
    get leftMenuIcon () {
        return $('~list_left_menu_btn');
    }


    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (email, password) {
        await this.inputEmail.waitForDisplayed();
        await this.inputEmail.setValue(email);
        await this.inputPassword.waitForDisplayed();
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

}

export default new LoginPage();
