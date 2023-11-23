import { addElem } from "../../utilities/addElem";
class Explore {
  render() {
    this._initialShell();
  }

  _initialShell() {
    const mainContainer = addElem("div", null, ["container"]);
    addElem("div", mainContainer, ["container__loading"]);
    addElem("h1", mainContainer, ["container__title"]);
    addElem("section", mainContainer, ["container__explore"]);
  }
}

export default Explore;
