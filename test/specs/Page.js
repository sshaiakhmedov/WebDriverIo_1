/*here we put the methods which can be used everywhere in tests.
so far it is only open(path)
 */
export default class Page {
    open(path){
        browser.url(path);
    }
}

