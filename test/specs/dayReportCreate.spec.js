const {expect} = require ('chai');
const email=Math.random().toFixed(4)+'e.shayakhmedov@gmail.com';

const url_reg='https://stage.pasv.us/user/register';
const url_log='https://stage.pasv.us/user/login';
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

describe('Create Day report', () => {
    before('should Login as admin', () => {
        browser.url(url_log);
        $('form input[name="email"]').setValue('olya6avg@gmail.com');
        $('form input[name="password"]').setValue('11111');
        $('form button[type="submit"]').click();
        browser.pause(1000);
    });
});

    // it('should have the right title', () => {
    //     browser.url(new url of daily reports);
    //     const actualTitle = browser.getTitle();
    //     const expectedTitle = page_log.title;
    //     expect(actualTitle).eq(expectedTitle)cd wc
    // });



// describe('New User Confirmation page', () => {
//
//     it('should have the right title', () => {
//         browser.url(url_log);
//         const actualTitle = browser.getTitle();
//         const expectedTitle = page_log.title;
//         expect(actualTitle).eq(expectedTitle)
//     });