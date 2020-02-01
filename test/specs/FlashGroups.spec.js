const {expect} = require('chai');
const {admin, urlLogin, urlCards} = require('./register_data');

//Test Scenario Cards_1
describe('FlashGroup Create', () => {

  before('Login as admin', function () {
    browser.url(urlLogin);
    $('form input[name="email"]').setValue(admin.emailLogin);
    $('form input[name="password"]').setValue(admin.password);
    $('form button[type="submit"]').click();
    browser.pause(400);
  });

  it('should redirect to Cards page', () => {
    const element = $('//div[@id="site-menu"]//a[@qa="cards-link"]');
    element.click();
  });

  it('should have FlashCards h1 title', () => {
    const actualH1Title = $('//h1[contains(text(),\'FlashCards\')]').getText();
    const expectedH1Title = 'FlashCards';
    expect(actualH1Title).eq(expectedH1Title);
    browser.pause(400);
  });

  it('should have `Get all Flash cards groups` notification title', () => {
    const actualH1Title = $('//h4[@class=\'notification-title\']').getText();
    const expectedH1Title = 'Get all Flash cards groups';
    expect(actualH1Title).eq(expectedH1Title);
    browser.pause(500);
  });

});

describe('Cards page--> Create new FlashGroup', () => {
  it('should click button `Create new FlashGroup`', function () {
    //const button = $('//button[@class=\'btn btn-secondary\']');
    browser.$('//button[@qa="flash-create-new-group"]').click();
    browser.pause(500);
  });

  it('should check if pop-up modal-window is open', function () {
    const el = $('//div[contains(@class, "sidepanel")]');
    expect(el.isDisplayed()).true;
    browser.pause(400);
  });

  it('should check is pop-up modal-window has title `Create Flash Group`', function () {
    const actualh1Title = $('//h5[@class="modal-title"]').getText();
    const expectedh1Title = 'Create Flash Group';
    expect(actualh1Title).equal(expectedh1Title);
    browser.pause(400);
  });

  it('should enter new Group name `cs`', function () {
    $('//div[contains(@class, "sidepanel")]//input[@name="name"]').setValue('cs');
    $('//div[contains(@class, "sidepanel")]//input[@name="description"]').setValue('test');
  });

  it('should submit form', function () {
    $('//button[@class="btn btn-primary"]').click();
  });

  //через CSS selectors
  //it('should enter new Group name `Sulaiman_qa5`', function () {
  //$('form input[name="name"]').setValue('Sulaiman_qa5');
  //$('form input[name="description"]').setValue('MockInterview_qa5');
  //const flashCardsButton=$('//button[@class=\'btn btn-primary\']');
  //flashCardsButton.click();
  //});


  it('should check first item in the group list the one we created',function (){
    const firstGroup=$('//div[@qa="flash-group-list "]//h4//a').getText();
    const expected=firstGroup;
    const actual='cs';
    expect(expected).eq(actual);
    browser.pause(500);
  });

  it('should check the group is clickable',function (){
    const firstInList=$('//div[@qa="flash-group-list "]//h4//a');
    firstInList.click();
    browser.pause(1000);
  });

  it('should group has correct title',function (){
    const actual=$('//h1').getText();
    const expected='cs';
    expect(actual).eq(expected);
    browser.pause(600);
  });

    // it('should grouped has correct description',function (){
    //   const actual=$('//div[@class="result mt-4"]//p').getText();
    //   const expected='MockInterview_qa5';
    //   expect(actual).eq(expected);
    //   browser.pause(500);
    // });
});


