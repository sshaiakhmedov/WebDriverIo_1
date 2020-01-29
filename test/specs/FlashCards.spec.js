const {expect} = require('chai');
const {admin, urlLogin, urlCards} = require('./register_data');

//Test Scenario Cards_1
describe('Cards page', () => {
  browser.url(urlLogin);
  it('should login to the app by credentials', function () {
    $('form input[name="email"]').setValue(admin.emailLogin);
    $('form input[name="password"]').setValue(admin.password);
    $('form button[type="submit"]').click();
    browser.pause(1000);
  });

  it('should redirect to Cards page', () => {
    const element = $('#site-menu > ul > li:nth-child(2) > a');
    element.click();
  });

  it('should have FlashCards h1 title', () => {
    const actualH1Title = $('//h1[contains(text(),\'FlashCards\')]').getText();
    const expectedH1Title = 'FlashCards';
    expect(actualH1Title).eq(expectedH1Title);
    browser.pause(3000);
  });

  it('should have `Get all Flash cards groups` notification title', () => {
    const actualH1Title = $('//h4[@class=\'notification-title\']').getText();
    const expectedH1Title = 'Get all Flash cards groups';
    expect(actualH1Title).eq(expectedH1Title);
    browser.pause(2000);
  });

});

describe('Cards page--> Create new FlashGroup', () => {
  it('should click button `Create new FlashGroup`', function () {
    const button = $('//button[@class=\'btn btn-secondary\']');
    button.click();
    browser.pause(1000);
  });

  it('should pop-up modal-window with title `Create Flash Group`', function () {
    const actualh1Title = $('//h5[@class=\'modal-title\']').getText();
    const expectedh1Title = 'Create Flash Group';
    expect(actualh1Title).equal(expectedh1Title);
  });

  it('should enter new Group name `Sulaiman_qa5`', function () {
    $('form input[name="name"]').setValue('Sulaiman_qa5');
    $('form input[name="description"]').setValue('MockInterview_qa5');
    const flashCardsButton=$('//button[@class=\'btn btn-primary\']');
    flashCardsButton.click();
  });
});