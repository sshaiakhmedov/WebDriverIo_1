import { expect } from 'chai';
import DiaryPage from "./DiaryPage";
import LoginPage from "../login/LoginPage";
import CreateDayReport from "./CreateDayReport";

describe('Diary Page (Positive Testing)', () => {
    before(() =>{
        LoginPage.login();
        DiaryPage.open();
        browser.pause(2000);
    });

    it('should have correct  h1 title', () => {
        let actual=DiaryPage.h1.getText();
        let expected='Daily reports';
        expect(actual).eq(expected);
        browser.pause(500);
    });

    it('shall click `Create day report` and be redirected',()=>{
        DiaryPage.createDayReportButton.click();
        browser.pause(1000);
    });

    it('shall check Title',()=>{
        let actual=CreateDayReport.h1dayReportForm.getText();
        let expected="Create day report";
        expect(actual).eq(expected);
    });

     it('shall check `Submit` button be Inactive',()=>{
         const actual=CreateDayReport.submitButtonInActive.isClickable();
         expect(actual).be.false;
        browser.pause(400);
     });

    it('shall fill up the form and Submit',()=>{
       CreateDayReport.dayReportForm();
    });

    it('shall have h1 title `Daily reports`',()=>{
        let actual=DiaryPage.h1.getText();
        let expected='Daily reports';
        expect(actual).eq(expected);
    });

    it('shall have generated report in the list',()=>{
        let actual=DiaryPage.newReport.getText();
        let expected='today i was doing this and that and this and that and this';
        expect(actual).eq(expected);
    });

});