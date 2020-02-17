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

    get createDayReportButton () {
        return browser.$('//a[@qa="create-day-report-button"]');
    };



        get newReport(){
        return browser.$('//div[@class="col"]//div[@class="mt-2"]');

        }
    //const element = $('//input[contains(@name,\'hours\')]')
}
export default new DiaryPage();
//Добавляя new мы экспортируем экземляр класса, а не сам класс


