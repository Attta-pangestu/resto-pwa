import { addElem } from "../utilities/addElem";
class Navbar extends HTMLElement {
  connectedCallback() {
    this._render();
  }

  _render() {
    const navElement = addElem("nav", this, []);
    const imgContent = `<img src="./images/logo.svg"/>`;
    addElem("div", navElement, ["navbar__brand"], imgContent);
    // Adding Icon Hamburger Menu
    const menuContainer = addElem("button", navElement, [
      "navbar__menu",
      "button",
    ]);
    addElem("span", menuContainer, ["fa", "fa-bars"]);
    // Adding list
    const listMenu = addElem("ul", navElement, ["navbar__list"]);
    // adding menu item
    addElem("li", listMenu, ["list-item"], "<a href=\"#\">Home</a>");
    addElem("li", listMenu, ["list-item"], "<a href=\"#/favorite\">Favorites</a>");
    addElem("li", listMenu, ["list-item"], "<a>about</a>");
  }
}

customElements.define("nav-bar", Navbar);
