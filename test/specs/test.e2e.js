import { expect } from '@wdio/globals'
import loginPage from '../pageobjects/login.page';
import signUpPage from '../pageobjects/signUpPage';

describe('Invoice App Tests', () => {

    it('should Sign up successfully', async () => {
        // Perform Sign up
        await signUpPage.startSignUp()
        await signUpPage.signUp('Shubham','shubhamranjan@gmail.com','your_password')
        await signUpPage.dismissOkAlert()
        await signUpPage.getLogo.waitForDisplayed()
        expect(signUpPage.getLogo).toBeDisplayed();
    });
    
    it('should log in successfully', async () => {
        // Perform login
        await loginPage.getLogo.waitForDisplayed()
        await loginPage.login('shubhamranjan@gmail.com','your_password');
        // Wait for home screen to load
        expect(loginPage.leftMenuIcon).toBeDisplayed();

    });

    
});

