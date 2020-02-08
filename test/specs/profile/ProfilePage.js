import Page from "../Page";

class ProfilePage extends Page{

    get h1(){
        return browser.$('//h1');
    }
}

export default  new ProfilePage();

/*import-export: есть связка
import -если имопртируем другой класс
export default -если нужно использовать, презентовать класс в другом классе.
*/