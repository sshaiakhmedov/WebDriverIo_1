const {expect} = require('chai');
const {admin, urlDiary, urlLogin} = require('./register_data');

describe('Create daily report', () => {
  before ('Login as Admin', ()=>{
    browser.url(urlLogin);
    $('form input[name="email"]').setValue(admin.emailLogin);
    $('form input[name="password"]').setValue(admin.password);
    $('form button[type="submit"]').click();
    browser.pause(2000);
  });

  it('should go to Users page', () => {
    const element = $('#site-menu > ul > li:nth-child(6) > a');
    //const element = $('//a[@class='nav-link active']');
    element.click();
  });

  it('should have Daily reports h1 title', () => {
    const actualH1Title = $('//h1[contains(text(),\'Daily reports\')]').getText();
    const expectedH1Title = 'Daily reports';
    expect(actualH1Title).eq(expectedH1Title);
    browser.pause(1000);
  });

  it('should click Create day report button', () => {
    const element = $('//a[@class=\'btn btn-secondary\']');
    element.click();
    browser.pause(1000);
  });

  it('should have Create day report h1', () => {
    const actualH1title = $('h1').getText();
    const expectedH1title = 'Create day report';
    expect(actualH1title).eq(expectedH1title);
    browser.pause(1000);
  });

  it('should mark Code Practice', () => {
    const element = $('//input[@id=\'input-5\']');
    element.click();
  });

  it('should select 7 from What is your Morale range', () => {
    const element = $('//select[contains(@name,\'morale\')]');
    element.selectByVisibleText('7');
    browser.pause(1000);
  });

  it('should put 5 to How many hours did you study/practice today? field', () => {
    const element = $('//input[contains(@name,\'hours\')]');
    element.setValue('5');
    browser.pause(1000);
  });

  it('should enter >=30 characters to the text area How was your day?', () => {
    const element = $('//textarea[contains(@name,\'description\')]');
    element.setValue(' I did this and that to fluent QA Test Automation');
    browser.pause(3000);
  });

  it('should click Save button', () => {
    const element = $('//*[@id="root"]/div/div/div[4]/div/div/form/div[3]/div/button');
    element.click();
    browser.pause(1000);
  });

});

