import Page from "../Page";

class ProfilePage extends Page{

    get h1(){
        return browser.$('//h1');
    }
}

export default new ProfilePage();
//через new - это экземпляр класса, как конкретный пример(артикль the). А класс это как артикль а.
/*import-export: есть связка
import -если имопртируем другой класс
export default -если нужно использовать, презентовать класс в другом классе.
*/