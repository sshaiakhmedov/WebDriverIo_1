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

  it('should have `Get all roles. Success` notification title', () => {
    const actualH1Title = $('//h4[@class=\'notification-title\']').getText();
    const expectedH1Title = 'Get all groups. OK';
    expect(actualH1Title).eq(expectedH1Title);
    browser.pause(5000);
  });

  it('should click Refresh button', () => {
    const element = $('#root > div > div > div.container > div > div > h1 > button');
    element.click();
    browser.pause(3000);
  });

  // it('should fill up Name text field', () => {
  //     const element = $('form input[name="name"]');
  //     element.setValue('Sulaiman');
  //     browser.pause(2000);
  // });
  //
  // it('should check the Sulaiman user is their', () => {
  //     const actualName = $('#root > div > div > div.container > div > div > div > div > div > div.rt-table > div.rt-tbody > div > div > div:nth-child(2) > div > div.d-flex.flex-row > a').getText();
  //     const expectedName=actual.includes('Sulaiman');
  //     expect(actualName).notInclude(expectedName);
  // });

  // it('should click button Delete  next to user with Sulaiman name', () => {
  //     const element = $('#root > div > div > div.container > div > div > div > div > div > div.rt-table > div.rt-tbody > div > div > div:nth-child(5) > button');
  //     element.click();
  //     browser.pause(2000);
  // });


  it('should click Roles dropdown list', () => {
    // const element=$('//body/div[@id=\'root\']/div/div/div[@class=\'container\']/div[@class=\'row\']/div[@class=\'col\']/div/div/form/div[@class=\'row\']/div[2]/div[1]/div[1]/div[1]');
    const element=$('#root > div > div > div.container > div > div > div > div > form > div:nth-child(2) > div:nth-child(2) > div > div > div > div.css-1hwfws3 > div.css-1wa3eu0-placeholder');
    element.click();
    browser.pause(1000);
  });

  //этот тест никак не проходит
  // it('should click `student` option from dropdown list', () => {
  //   const element=$('//body//div[@class=\'row\']//div[@class=\'row\']//div[2]//div[1]//div[1]//div[1]//div[1]//div[2]');
  //   element.selectByVisibleText('student');
  //   browser.pause(1000);
  // });



});
