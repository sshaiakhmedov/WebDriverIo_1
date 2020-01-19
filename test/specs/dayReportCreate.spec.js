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
