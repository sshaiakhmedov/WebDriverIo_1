import Page from "../Page";

//через extends мы inheritance делаем одного класса на другой
//class - способ организации фукнций и каких-то значений.
class DiaryPage extends Page {

    open(path) {
        super.open('https://stage.pasv.us/diary');
    }

    get h1() {
        return browser.$('//h1[@qa="daily-title"]')
    }

    get CreateDayReportButton () {
        return browser.$('//a[@qa="create-day-report-button"]');
    };

    get h1dayReportForm () {
        return browser.$('//h1');
    };

    get submitButtonInActive(){
        return browser.$('//*[@type="submit"]');
    }

   get watchedLectures () {
        return browser.$('//input[@id="input-3"]');
    };

    get morale() {
        return browser.$('//select[@name="morale"]');
    }

    get hrsStudy() {
        return browser.$('//input[@name="hours"]');
    }

    get dayDescription() {
        return browser.$('//textarea[@name="description"]');
    }

    get submitButton() {
        return browser.$('//button[@type="submit"]');
    }

    dayReportForm() {
            this.watchedLectures.click();
            this.morale.selectByVisibleText('7');
            this.hrsStudy.setValue('4');
            this.dayDescription.setValue('today i was doing this and that and this and that and this');
            this.submitButton.click();
            browser.pause(3000);
        }

}
export default new DiaryPage();
//Добавляя new мы экспортируем экземляр класса, а не сам класс


