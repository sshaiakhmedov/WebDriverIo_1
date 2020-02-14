import Page from '../Page.js'; //типа приглашение

//через extends мы inheritance делаем одного класса на другой
//class - способ организации фукнций и каких-то значений.
//как Objects нужны чтобы организовать данные, - например Array, Object.
//class is name as the File name
//When we describe class-we don't describe the test itself, it is just a base.
//open(), email(), password() etc = methods.
class LoginPage extends Page {

    open (){
        super.open('https://stage.pasv.us/user/login');
        //super - мы вызываем метод РОДИТЕЛЬСКОГО класса
    };

    get email () {
        return browser.$('//input[@name="email"]');
    };
    //когда мы будем запускать свойство email => запускайте return...

    get password () {
        return browser.$('//input[@name="password"]');
    };

    get submitBtn () {
        return browser.$('//button[@type="submit"]');
    };

    get h1 () {
        return browser.$('//h1');
       };

    //put all methods in one method-container login()
    login () {
        this.open();
        this.email.setValue('olya6avg@gmail.com');
        this.password.setValue('11111');
        this.submitBtn.click();
        browser.pause(3000);
    };
}

export default new LoginPage();
//Добавляя new мы экспортируем экземляр класса, а не сам класс
//class - Это шаблон (солдат), default new = экземпляр класса (конкретный солдат);



