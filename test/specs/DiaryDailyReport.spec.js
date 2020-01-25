const {expect} = require('chai');
const {urlDiary, urlLogin} = require('./register_data');

describe('Create Daily reports', () => {
    it('should Login as admin', () => {
        browser.url(urlLogin);
        $('form input[name="email"]').setValue('olya6avg@gmail.com');
        $('form input[name="password"]').setValue('11111');
        $('form button[type="submit"]').click();
        browser.pause(4000);
    });

    it('should go to Diary page', () => {
        const element=$('#site-menu > ul > li:nth-child(6) > a');
        element.click();
        browser.pause(2000);
    });

    it('should have Daily reports h1 title', () => {
        const actualH1Title=$('h1').getText();
        const expectedH1Title='Daily Reports';
        expect(actualH1Title).eq(expectedH1Title);
       browser.pause(1000);
    });

    it('should have Daily reports h1 title', () => {
        const element=$('#root > div > div > div.container > div > div > div > div > div.form-group > a');
        element.click();
        browser.pause(1000);
    });

    it('should have Create day report h1 title', () => {
        const actualH1Title=$('#root > div > div > div.container > div > div > h1').getText();
        const expectedH1Title='Create day report';
        expect(actualH1Title).equal(expectedH1Title);
        browser.pause(1000);
    });
});

describe('Create day report', () => {
    it('should check Code Practise mark field', () => {
        $('/*[@id="input-[5]"]').click();
    });
});