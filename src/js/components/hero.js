import { addElem } from "../utilities/addElem";
class Hero extends HTMLElement {
  connectedCallback() {
    this._render();
  }

  _render() {
    const heroWrapper = addElem("div", this, ["header__hero__wrapper"]);
    addElem(
      "h1",
      heroWrapper,
      ["header__hero__heading"],
      "Find Best Restorant"
    );
    addElem(
      "p",
      heroWrapper,
      ["header__hero__paragraf"],
      "Our restaurants offer more than just great food"
    );
    const readMoreContainer = addElem("div", heroWrapper, ["button-container"]);
    readMoreContainer.innerHTML += `
      <a href="#" class="button">Read More</a>
    `;
  }
}

customElements.define("hero-content", Hero);
