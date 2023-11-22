import { addElem } from "../utilities/addElem";
class Navbar extends HTMLElement {
  connectedCallback() {
    this._render();
  }

  _render() {
    const imgContent = `<img src="./images/logo.svg"/>`;
    addElem("div", this, ["navbar__brand"], imgContent);
    // Adding list
    const listMenu = addElem("ul", this, ["navbar__list"]);
    // adding menu item
    addElem("li", listMenu, ["list-item"], "<a>Home</a>");
    addElem("li", listMenu, ["list-item"], "<a>Favorites</a>");
  }
}

customElements.define("nav-bar", Navbar);
