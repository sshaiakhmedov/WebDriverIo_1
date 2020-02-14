import Page from "../Page";

class ProfilePage extends Page {

    get h1() {
        return browser.$('//h1');
    }
}

export default new ProfilePage();

/*
1. import-export: есть связка
2. через new - это экземпляр класса, как конкретный пример(артикль the). А класс это как артикль а.
3. import -если имопртируем другой класс
4. export default - если нужно использовать, презентовать класс в другом классе.
*/