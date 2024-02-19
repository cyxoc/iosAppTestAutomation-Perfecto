import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SignUpPage extends Page {
    /**
     * define selectors using getter methods
     */
    get singnUpButton () {
        return $('~Signup');
    }

    get name () {
        return $('~signup_name');
    }

    get email () {
        return $('//XCUIElementTypeApplication[@name="Perfecto Expense Tracker"]/XCUIElementTypeWindow/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeScrollView/XCUIElementTypeOther[1]/XCUIElementTypeTextField[2]');
    }

    get password () {
        return $('~signup_password');
    }

    get confirmPassword () {
        return $('~signup_confirmpassword');
    }

    get submitButton () {
        return $('~signup_save_btn');
    }

    get okButton () {
        return $('~OK');
    }

    async signUp (name, email, password) {
        await this.name.waitForDisplayed();
        await this.name.setValue(name);
        await this.email.waitForDisplayed();
        await this.email.setValue(email);
        await this.password.waitForDisplayed()
        await this.password.setValue(password);
        await this.confirmPassword.setValue(password);
        await this.submitButton.click()
    }

    async dismissOkAlert () {
        await this.okButton.waitForDisplayed();
        await this.okButton.click();
    }

    async startSignUp (){
        await this.singnUpButton.waitForDisplayed()
        await this.singnUpButton.click()
    }
}

export default new SignUpPage();
