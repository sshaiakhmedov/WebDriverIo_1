import { expect } from 'chai';
import LoginPage from './LoginPage';
import ProfilePage from "../profile/ProfilePage";

//login.spec - пишем spec, чтобы определялся как файл тестирования


describe('LOGIN (positive)', () => {
    it('should open login page', ()=>{
        LoginPage.open();
        browser.pause(5000);
    });


    it('should have correct title',() => {
        const actual = LoginPage.h1.getText();
        const expected = 'User Login';
        expect(actual).eq(expected);
    });

    it('should fill email field',() => {
        LoginPage.email.setValue('olya6avg@gmail.com');
    });

    it('should fill up pass', () => {
        LoginPage.password.setValue('11111');
    });

    it('should submit form', () => {
        LoginPage.submitBtn.click();
        browser.pause(3000);
    });

    it('should check h1 text', () => {
        expect(ProfilePage.h1.getText()).eq('Test Testovich')
    });
});