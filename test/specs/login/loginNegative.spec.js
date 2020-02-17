import { expect } from 'chai';
import LoginPage from './LoginPage';

describe('LOGIN (Negative Testing)', () => {
    it('should open login page', () => {
        LoginPage.open();
        browser.pause(3000);
    });

    it('should have correct title',() => {
        const actual = LoginPage.h1.getText();
        const expected = 'User Login';
        expect(actual).eq(expected);
    });

    it('should fill e-mail field',() => {
        LoginPage.email.setValue('olya6avg@gmail.com');
    });

    it('should fill up password field with the wrong data', () => {
        LoginPage.password.setValue('11111+');
    });

    it('should click submit form and not redirect', () => {
        LoginPage.submitBtn.click();
        browser.pause(3000);
    });

    it('should verify h1 text on Login page', () => {
        const actual=LoginPage.h1.getText();
        const expected='User Login';
        expect(actual).eq(expected);
    });


});