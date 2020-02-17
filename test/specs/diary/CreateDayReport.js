import Page from "../Page";

class CreateDayReport extends Page {

    open (path) {
        super.open('https://stage.pasv.us/diary/create');
    }

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

export default new CreateDayReport();