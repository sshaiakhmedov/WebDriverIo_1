const {expect} = require('chai');
const {urlLogin} = require('./register_data');

describe('Create Day report', () => {
    it('should Login as admin', () => {
        browser.url(urlLogin);
        $('form input[name="email"]').setValue('olya6avg@gmail.com');
        $('form input[name="password"]').setValue('11111');
        $('form button[type="submit"]').click();
        browser.pause(4000);
    });
});

    // it('should have the right title', () => {
    //     browser.url(new url of daily reports);
    //     const actualTitle = browser.getTitle();
    //     const expectedTitle = page_log.title;
    //     expect(actualTitle).eq(expectedTitle)cd wc
    // });



// describe('New User Confirmation page', () => {
//
//     it('should have the right title', () => {
//         browser.url(url_log);
//         const actualTitle = browser.getTitle();
//         const expectedTitle = page_log.title;
//         expect(actualTitle).eq(expectedTitle)
//     });