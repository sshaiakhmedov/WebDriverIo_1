import Page from "../Page";

class ProfilePage extends Page {

    get title() {
        return browser.$('//span[@id="site-name"]');
    }

    get h1() {
        return browser.$('//h1');
    }

    get score() {
        return browser.$('//div[@id="user-section"]//span[@class="ml-1 mr-4"]');
    }

    get h1Drop() {
        return browser.$('//li[@class="dropdown nav-item"]//a');
    }

    get h3About() {
        return browser.$('//div[@qa="about"]//h3');
    }

    get h3Goals() {
        return browser.$('//div[@qa="goals"]//h3');
    }

    get h3CompletedChallenges() {
        return browser.$('//div[@qa="kata-list"]//h3');
    }

    get h3DailyReports() {
        return browser.$('//div[@qa="diary-list"]//h3');
    }

    get userRole() {
        return browser.$('//span[@qa="user-roles"]//span[@qa="role"]');
    }

    get coin1() {
        return browser.$('//ul//img');
    }

    get coin2() {
        return browser.$('//div[@class="col"]//img');
    }

    get countDailyReports() {
        return browser.$('//div[@qa="diary-list"]//span[@class="badge badge-light"]');
    }

    get userDropDownClickable() {
        return browser.$('//li[contains(@class, \'dropdown\')]');
    }

    get userDropDownClicked() {
        return browser.$('//li[contains(@class, \'dropdown show\')]');
    }

    //Profile Menu Dropdown

    get userMenuProfile() {
        return browser.$('//li//div//a');
    }

    get userMenuProfile1() {
        return browser.$('//li//div//a//button[1]');
    }

    get userMenuSettings() {
        return browser.$('//li[contains(@class, \'dropdown\')]//div');
    }

    get userMenuSettings1() {
        return browser.$('//li//div//a[2]//button[1]');
    }

    get userMenuLogout() {
        return browser.$('//li[contains(@class, \'dropdown\')]//div');
    }

    get userMenuLogout1() {
        return browser.$('//*[@id="user-section"]/div/ul/li/div/button');
    }

    get userMenuLogout2() {
        return browser.$('//button[text()="Logout"]');
    }

    get likeButton() {
        return browser.$('//div[15]//button[@qa="like-button"]');
    }

    get likeNotificationTitle() {
        return browser.$('//h4[contains(text(),"Diary Like")]');
    }

    get createDayReport(){
        return browser.$('//a[contains(text(),"Create day report")]');
    }

}

export default new ProfilePage();

/*
1. import-export: есть связка
2. через `new` - это экземпляр класса, как конкретный пример(артикль the). А класс это как артикль а.
3. import -если имопртируем другой класс
4. export default - если нужно использовать, презентовать класс в другом классе.
*/
