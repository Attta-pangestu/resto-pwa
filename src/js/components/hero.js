import { addElem } from "../utilities/addElem";
class Hero {
  connectedCallback() {
    this._render();
  }

  _render() {
    addElem("div");
  }
}

customElements.define("hero", Hero);
