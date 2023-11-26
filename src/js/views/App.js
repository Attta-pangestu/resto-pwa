import DrawerIniator from "../utilities/drawer-iniator";
import UrlParser from "../routes/url-parser";
import Routes from "../routes/routes";

class App {
  constructor({ main, drawer, listMenu }) {
    this.main = main;
    this.drawer = drawer;
    this.listMenu = listMenu;
    this._initialAppShell();
  }

  _initialAppShell() {
    new DrawerIniator({
      main: document.querySelector(".header__hero__wrapper"),
      drawer: document.querySelector(".navbar__menu"),
      listMenu: document.querySelector(".navbar__list"),
    });
  }

  async renderPage() {
    console.log("Merender Explore ");
    const mainContainer = document.querySelector("#main-content");
    const url = UrlParser.hashUrl();
    const PageScript = Routes[url];
    const appShell = PageScript.initialShell();
    mainContainer.innerHTML = appShell.outerHTML;

    // Including data
    await PageScript.afterRenderShell();
  }
}

export default App;
