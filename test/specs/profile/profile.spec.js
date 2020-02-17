import {expect} from 'chai';
import LoginPage from "../login/LoginPage";
import ProfilePage from './ProfilePage';
import DiaryPage from "../diary/DiaryPage";
import CreateDayReport from "../diary/CreateDayReport";

describe('PROFILE (Positive Testing)', () =>{
    before(() =>{
        LoginPage.login();
        browser.pause(500);
    });

    it('should have correct title `Progress Monitor`', function () {
       const actual=ProfilePage.title.getText();
       expect(actual).eq('Progress Monitor');
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

    it('should have like button to be clickable', function () {
        const actual=ProfilePage.likeButton.isClickable();
        expect(actual).be.true;
    });

    it('should show notification when click on Like button', function () {
        ProfilePage.likeButton.click();
        const actual=ProfilePage.likeNotificationTitle.getText();
        expect(actual).includes('Success');
    });

    it('should click `Create day report` button ', function () {
       const actual=ProfilePage.createDayReport.isClickable();
       expect(actual).to.be.true;
       ProfilePage.createDayReport.click();
    });

    it('should have correct h1 title after redirection', function () {
        CreateDayReport.open();
        browser.pause(500);
        const actual=CreateDayReport.h1dayReportForm.getText();
        const expected='Create day report';
        expect(actual).eq(expected);
    });

    // it('should check the like count', function () {
    //     const actual=ProfilePage.likeButton.click();
    //     browser.url('https://stage.pasv.us/user/5ddd6a9f7fe541003cb3e188');
    //     browser.pause(1000);
    //     const expected=ProfilePage.likeButtonCount.getValue();
    //     expect(expected).above(0);
    //});

});