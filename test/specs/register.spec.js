const {expect} = require ('chai');
const email=Math.random().toFixed(4)+'e.shayakhmedov@gmail.com';

const url_reg='https://stage.pasv.us/user/register';
const url_log='https://stage.pasv.us/user/login/';
const user ={
    firstName: 'John',
    lastName: 'Shaiakhmedov',
    password: 'password',
    phone: '12345678900',
    email: email,
    about: '123',
    goals: 'paradise',
    englishLevel: 'Upper intermediate',
};

const page_reg={
    title: 'Progress Monitor',
    h1: 'User Register',
    description: 'Profiles with fictitious or dummy data will be deleted.',
    buttonText: 'Submit',
};

const page_log={
    title: 'Progress Monitor',
    h1: 'User Login',
};

describe('Register page', () => {
    it('should have the right title', () => {
        browser.url(url_reg);
        const actualTitle = browser.getTitle();
        const expectedTitle = page_reg.title;
        expect(actualTitle).eq(expectedTitle)
    });

    it ('should have a correct title', () => {
        const actualH1Text = $('h1').getText ();
        const expectedH1Text = page_reg.h1;
        expect (actualH1Text).equal (expectedH1Text);
    });

    it ('should have a correct description', () => {
        const actual = $('p').getText ();
        const expected= page_reg.description;
        expect (actual).equal (expected);
    });

    it ('should have a correct button text', () => {
        const actual = $('form button').getText ();
        const expected= page_reg.buttonText;
        expect (actual).equal (expected);
    });

    it ('should fill First Name field', () => {
        const element=$('form input[name="firstName"]');
        element.setValue(user.firstName);
        browser.pause(2000);
    });

    it ('should fill Last Name field', () => {
        const element=$('form input[name="lastName"]');
        element.setValue(user.lastName);
        browser.pause(2000);
    });

    it ('should fill up phone number', () => {
        const element=$('form input[name="phone"]');
        element.setValue(user.phone);
    });

    it ('should fill up e-mail address', () => {
        const element=$('form input[name="email"]');
        element.setValue(user.email);
    });

    it ('should fill up password', () => {
        const element=$('form input[name="password"]');
        element.setValue(user.password);
    });

    it ('should fill About field', () => {
        const element=$('form textarea[name="about"]');
        element.setValue(user.about);
    });

    it ('should fill Goals field', () => {
        const element=$('form textarea[name="goals"]');
        element.setValue(user.goals);
    });

    it ('should fill English level from drop-down list', () => {
        const element=$('form select[name="englishLevel"]');
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
        browser.url(url_log);
        const actualTitle = browser.getTitle();
        const expectedTitle = page_log.title;
        expect(actualTitle).eq(expectedTitle)
    });

    it ('should have a correct h1 title', () => {
        const actualH1Text = $('h1').getText ();
        const expectedH1Text = page_log.h1;
        expect(actualH1Text).eq(expectedH1Text);
        browser.pause(2000);
    });

    it ('should fill up e-mail address', () => {
       const element=$('form input[name="email"]');
        element.setValue(user.email);
        browser.pause(2000);
    });

    it ('should fill up password', () => {
         const element=$('form input[name="password"]');
         element.setValue(user.password);
        browser.pause(2000);
     });

     it ('should click the Login button', () => {
         const element = $('form button[type="submit"]');
         element.click();
         browser.pause(3000);
     })
});

// describe('New User Confirmation page', () => {
//
//     it('should have the right title', () => {
//         browser.url(url_log);
//         const actualTitle = browser.getTitle();
//         const expectedTitle = page_log.title;
//         expect(actualTitle).eq(expectedTitle)
//     });