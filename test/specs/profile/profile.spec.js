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
        expect(actual1,actual2).to.be.true;
    });

});