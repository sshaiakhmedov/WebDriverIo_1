
const {urlRegister, urlLogin, user, pageReg, pageRegSelector, pageLog}=require('./register_data');
const {expect} = require ('chai');

describe('Register page', () => {
    it('should have the right title', () => {
        browser.url(urlRegister);
        const actualTitle = browser.getTitle();
        const expectedTitle = pageReg.title;
        expect(actualTitle).eq(expectedTitle)
    });

    it ('should have a correct title', () => {
        const actualH1Text = $(pageRegSelector.h1).getText ();
        const expectedH1Text = pageReg.h1;
        expect(actualH1Text).equal(expectedH1Text);
    });

    it ('should have a correct description', () => {
        const actual = $(pageRegSelector.descr).getText ();
        const expected= pageReg.description;
        expect(actual).equal(expected);
    });

    it ('should have a correct button text', () => {
        const actual = $(pageRegSelector.submitB).getText ();
        const expected= pageReg.buttonText;
        expect(actual).equal(expected);
    });

    it ('should fill First Name field', () => {
        const element=$(pageRegSelector.firstNameInput);
        element.setValue(user.firstName);
        browser.pause(2000);
    });

    it ('should fill Last Name field', () => {
        const element=$(pageRegSelector.lastNameInput);
        element.setValue(user.lastName);
        browser.pause(2000);
    });

    it ('should fill up phone number', () => {
        const element=$(pageRegSelector.phoneInput);
        element.setValue(user.phone);
    });

    it ('should fill up e-mail address', () => {
        const element=$(pageRegSelector.emailInput);
        element.setValue(user.email);
    });

    it ('should fill up password', () => {
        const element=$(pageRegSelector.passwordInput);
        element.setValue(user.password);
    });

    it ('should fill About field', () => {
        const element=$(pageRegSelector.aboutInput);
        element.setValue(user.about);
    });

    it ('should fill Goals field', () => {
        const element=$(pageRegSelector.goalInput);
        element.setValue(user.goals);
    });

    it ('should fill English level from drop-down list', () => {
        const element=$(pageRegSelector.englishInput);
        element.selectByVisibleText(user.englishLevel);
    });

    it ('should click the Button', () => {
        const element=$('form button[type="submit"]');
        element.click();
        browser.pause(2000);
    });

});

describe('User Login should let the registered user login', () => {
    it('should have the right title', () => {
        browser.url(urlLogin);
        const actualTitle = browser.getTitle();
        const expectedTitle = pageLog.title;
        expect(actualTitle).eq(expectedTitle)
    });

    it ('should have a correct h1 title', () => {
        const actualH1Text = $('h1').getText();
        const expectedH1Text = pageLog.h1;
        expect(actualH1Text).eq(expectedH1Text);
        browser.pause(2000);
    });

    it ('should fill up e-mail address', () => {
       const element=$('form input[name="email"]');
        element.setValue(user.email);
    });

    it ('should fill up password', () => {
         const element=$('form input[name="password"]');
         element.setValue(user.password);
     });

     it ('should click the Login button', () => {
         const element = $('form button[type="submit"]');
         element.click();
         browser.pause(5000);
     })
});
