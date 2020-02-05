const {expect} = require('chai');
const {admin, urlDiary, urlLogin} = require('./register_data');

describe('Create daily report', () => {
  before('GIVEN we are Login as Admin', () => {
    browser.url(urlLogin);
    $('//input[@name="email"]').setValue(admin.emailLogin);
    $('//input[@name="password"]').setValue(admin.password);
    $('//button[@type="submit"]').click();
    browser.pause(500);
  });

  it('AND it should redirect to Diary page', () => {
    const diary = $('//*[@qa="diary-link"]');
    diary.click();
  });

  it('AND you should have Daily reports h1 title', () => {
    const actualH1Title = $('//h1').getText();
    const expectedH1Title = 'Daily reports';
    expect(actualH1Title).eq(expectedH1Title);
    browser.pause(500);
  });

  it('THEN Should click `Create day report` button', () => {
    const createDayRepButton = $('//a[contains(@qa,\'create\')]');
    createDayRepButton.click();
    browser.pause(500);
    // const element = $('//input[contains(@name,\'hours\')]');
  });
});

describe('Create day report', ()=> {
  it('should have Create day report h1', () => {
    const actualH1title = $('//h1').getText();
    const expectedH1title = 'Create day report';
    expect(actualH1title).eq(expectedH1title);
    browser.pause(400);
  });

  it('should `Save` button be Disabled/inClickable', function () {
    const actual = $('//*[@type="submit"]').isClickable();
    expect(actual).be.false;
  });

  it('should mark Code Practice', () => {
    const element = $('//*[@label="Code practice"]');
    element.click();
    browser.pause(400);
  });

  it('should select 7 from What is your Morale range', () => {
    const element = $('//select[contains(@name,\'morale\')]');
    element.selectByVisibleText('7');
    browser.pause(500);
  });

  it('should put 5 to How many hours did you study/practice today? field', () => {
    const element = $('//input[contains(@name,\'hours\')]');
    element.setValue('5');
    browser.pause(500);
  });

  it('should enter >=30 characters to the text area How was your day?', () => {
    const element = $('//textarea[contains(@name,\'description\')]');
    element.setValue(' I did this and that to fluent QA Test Automation');
    browser.pause(500);
  });

  it('should click Save button if Active', () => {
    const saveButton = $('//button');
    const element = $('//button').isClickable();
    if (element == true) {
      saveButton.click();
    };
    browser.pause(400);
  });
});
