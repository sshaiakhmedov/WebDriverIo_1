const {expect} = require('chai');
const {admin, urlLogin} = require('./register_data');

//Test Scenario Student Roles_1
describe('Select student Roles users', () => {
  it('should Login as admin', () => {
    browser.url(urlLogin);
    $('form input[name="email"]').setValue(admin.emailLogin);
    $('form input[name="password"]').setValue(admin.password);
    $('form button[type="submit"]').click();
    browser.pause(2000);
  });

  it('should go to Users page', () => {
    const element = $('#site-menu > ul > li:nth-child(7) > a');
    element.click();
  });

  it('should have Users h1 title', () => {
    const actualH1Title = $('#root > div > div > div.container > div > div > h1 > span').getText();
    const expectedH1Title = 'Users';
    expect(actualH1Title).eq(expectedH1Title);
    browser.pause(3000);
  });

  // it('should have `Get all roles. Success` notification title', () => {
  //   const actualH1Title = $('//h4[@class=\'notification-title\']').getText();
  //   const expectedH1Title = 'Get all groups. OK';
  //   expect(actualH1Title).eq(expectedH1Title);
  //   browser.pause(5000);
  // });

  it('should click Refresh button', () => {
    const element = $('#root > div > div > div.container > div > div > h1 > button');
    element.click();
    browser.pause(3000);
  });

  it('should click Roles dropdown list', () => {
    const element=$('//*[@id="root"]/div/div/div[4]/div/div/div/div/form/div[2]/div[2]/div/div/div/div[1]/div[1]');
    element.click();
    browser.pause(3000);

    const element2=$('');
    element2.click();
  });

});

//From Sergey Troyeglazov to Everyone:  10:21 PM
// 'h4.notification-title' через CSS
// From anna_ to Everyone:  10:21 PM
// $('//notification-wrapper .notification-title')