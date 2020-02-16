import {expect} from 'chai';
import LoginPage from "../login/LoginPage";
import ProfilePage from './ProfilePage';

describe('PROFILE (Positive Testing)', () =>{
    before(() =>{
        LoginPage.login();
    });

    it('should go to profile Page and check h1', ()=>{
        expect(ProfilePage.h1.getText()).eq('Test Testovich')
    });

    it('should check coin score', function () {
        let actual=ProfilePage.score.isDisplayed();
        let expected=true;
        expect(actual).eq(actual);
    });

    it('should have dropdown list with same h1', function () {
        let actual=ProfilePage.h1Drop.getText();
        let expected='Test Testovich';
        expect(actual).eq(expected);
    });

    it('should have h3 About/Goals/Completed Challenges/Daily Reports', function () {
       expect(ProfilePage.h3About.getText()).eq('About');
        expect(ProfilePage.h3DailyReports.getText()).includes('Daily reports');
        expect(ProfilePage.h3Goals.getText()).eq('Goals');
        expect(ProfilePage.h3CompletedChallenges.getText()).includes('Completed Challenges');
    });

    it('should have user-role bage', function () {
        let actual=ProfilePage.userRole.isExisting();
        let expected=true;
        expect(actual).eq(expected);
    });

    it('should coin img exist', function () {
        let actual1=ProfilePage.coin1.isExisting();
        let actual2=ProfilePage.coin2.isExisting();
        expect(actual1, actual2).to.be.true;
    });

    it('should have Daily reports count', function () {
        const actual=ProfilePage.countDailyReports.getText();
        expect(+actual).be.not.below(0);
    });

    it('should check user dropdown window', function () {
        const actual=ProfilePage.userDropDownClickable.isClickable();
        expect(actual).be.true;
    });

    it('should have expanded dropdown list', function () {
        ProfilePage.userDropDownClickable.click();
        browser.pause(500);
        const actual=ProfilePage.userDropDownClicked.isDisplayed();
        const expected=true;
        expect(actual).eq(expected);
    });

    it('should has Profile button', function () {
        const actual=ProfilePage.userMenuProfile.getText();
        expect(actual).eq('Profile');
    });

    it('should has Settings button ', function () {
        const actual=ProfilePage.userMenuSettings.getText();
        expect(actual).contains('Settings');

    });

    it('should hav Logout button', function () {
        const actual=ProfilePage.userMenuLogout.getText();
        expect(actual).contains('Logout')
    });

    it('should  Profile button be clickable', function () {
        expect(ProfilePage.userMenuProfile1.isClickable()).be.true;
        browser.pause(500);
    });

    it('should  Settings button be clickable', function () {
        expect(ProfilePage.userMenuSettings1.isClickable()).be.true;
        browser.pause(500);
    });

    it('should  Logout button be clickable', function () {
        expect(ProfilePage.userMenuLogout1.isClickable()).be.true;
        browser.pause(500);
    });

    it('should ', function () {
        const actual=ProfilePage.userMenuLogout2.isClickable();
        expect(actual).be.true;

    });

});