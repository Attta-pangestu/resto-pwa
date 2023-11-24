import { addElem } from "../../utilities/addElem";
import RestaurantData from "../../data/restaurant-data";

class Explore {
  initialShell() {
    console.log("menjalankan initial app shell");
    const mainContainer = addElem("div", null, ["container"]);
    addElem("div", mainContainer, ["container__loading"]);
    addElem("h1", mainContainer, ["container__title"]);
    addElem("section", mainContainer, ["container__explore"]);
    console.log(mainContainer);
    return mainContainer;
  }

  async afterRenderShell() {
    const RestoListAll = await RestaurantData.getListAll();
    console.log(RestoListAll);
  }
}

export default Explore;
