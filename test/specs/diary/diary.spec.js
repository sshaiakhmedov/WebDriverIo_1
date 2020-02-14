import { expect } from 'chai';
import DiaryPage from "./DiaryPage";
import LoginPage from "../login/LoginPage";

describe('DIARY (Positive Testing)', () => {
    before(() =>{
        LoginPage.login();
        DiaryPage.open();
        browser.pause(4000);

    });

    it('should have correct  h1 title', () => {
        let actual=DiaryPage.h1.getText();
        let expected='Daily reports';
        expect(actual).eq(expected);
        browser.pause(500);
    });

    it('shall click `Create day report` and be redirected',()=>{
        DiaryPage.CreateDayReportButton.click();
        browser.pause(2000);
    });

    it('shall check Title',()=>{
        let actual=DiaryPage.h1dayReportForm.getText();
        let expected="Create day report";
        expect(actual).eq(expected);
        browser.pause(500);
    });

     it('Shall check `Submit` button be Inactive',()=>{
         const actual=DiaryPage.submitButtonInActive.isClickable();
         expect(actual).be.false;
        browser.pause(400);
     });

    it('Shall fill up the form',()=>{
       DiaryPage.dayReportForm();
       browser.pause(1000);
    })



});