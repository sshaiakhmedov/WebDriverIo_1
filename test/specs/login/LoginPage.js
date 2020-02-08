import Page from '../Page.js'; //типа приглашение

//через extends мы inheritance делаем
class LoginPage extends Page {

    get email () {
        return browser.$('//input[@name="email"]');
    };
    //когда мы будем запускать свойство email => запускайте return...

    get password () {
        return browser.$('//input[@name="password"]');
    };

       get  submitBtn () {
            return browser.$('//button[@type="submit"]');
    };

       get h1 () {
           return browser.$('//h1');
       }

    login () {
        this.open();
        this.email.setValue('olya6avg@gmail.com');
        this.password.setValue('11111');
        this.submitBtn.click();
        browser.pause(3000);
    };

    open (){
        super.open('https://stage.pasv.us/user/login');
    };
}
export default new LoginPage();
//Добавляя new мы экспортируем экземляр класса, а не сам класс


