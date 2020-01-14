const {expect} = require ('chai');
const email=Math.random()+'e.shayakhmedov@gmail.com';
const firstName='John';
const lastName='Shaiakhmedov';


describe('Register page', () => {
    it('should have the right title', () => {
        browser.url('https://stage.pasv.us/user/register/')
        const actualTitle = browser.getTitle();
        const expectedTitle = 'Progress Monitor';
        expect(actualTitle).eq (expectedTitle)
    })
    it ('should have a correct title', () => {
        const actualH1Text = $('h1').getText ();
        const expectedH1Text = 'User Register';
        expect (actualH1Text).equal (expectedH1Text);
    });

    it ('should have a correct description', () => {
        const actual = $('p').getText ();
        const expected= 'Profiles with fictitious or dummy data will be deleted.';
        expect (actual).equal (expected);
    });

    it ('should have a correct button text', () => {
        const actual = $('form button').getText ();
        const expected= 'Submit';
        expect (actual).equal (expected);
    });

    it ('should fill First Name field', () => {
        const element=$('form input[name="firstName"]')
        element.setValue(firstName);
        browser.pause(2000);
    });

    it ('should fill Last Name field', () => {
        const element=$('form input[name="lastName"]')
        element.setValue(lastName);
        browser.pause(2000);
    });

    it ('should fill up phone number', () => {
        const element=$('form input[name="phone"]')
        element.setValue('12345678900');
    });

    it ('should fill up e-mail address', () => {
        const element=$('form input[name="email"]')
        element.setValue(email);
    });

    it ('should fill up password', () => {
        const element=$('form input[name="password"]')
        element.setValue('3473512');
    });

    it ('should fill About field', () => {
        const element=$('form textarea[name="about"]')
        element.setValue('123');
    });

    it ('should fill Goals field', () => {
        const element=$('form textarea[name="goals"]')
        element.setValue('paradise');
    });

    it ('should fill English level from drop-down list', () => {
        const element=$('form select[name="englishLevel"]')
        element.selectByVisibleText('Upper intermediate');
    });

    it ('should click the Button', () => {
        const element=$('form button[type="submit"]');
        element.click();
        browser.pause(2000);
    });

    /*login title
    email pass
    login button
    wait
    title firstName lastName
     */
})