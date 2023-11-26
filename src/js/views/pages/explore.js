import { addElem } from "../../utilities/addElem";
import RestaurantData from "../../data/restaurant-data";
import renderRestoCard from "../template/resto-card";
import Spinner from "../template/spinner";

class Explore {
  initialShell() {
    console.log("menjalankan initial app shell");
    const mainContainer = addElem("div", null, ["container"]);
    addElem("div", mainContainer, ["container__loading"]);
    addElem(
      "h1",
      mainContainer,
      ["container__title"],
      "Explore Our Best Restaurant"
    );
    addElem("section", mainContainer, ["container__explore"]);
    console.log(mainContainer);
    return mainContainer;
  }

  async afterRenderShell() {
    const loadingElement = document.querySelector('.container__loading');
    const mainContainer = document.querySelector('.container');
    const listContainer = document.querySelector(".container__explore");

    listContainer.style.display = 'none';
    loadingElement.innerHTML = Spinner();
    try{
      const RestoListAll = await RestaurantData.getListAll();
    RestoListAll.forEach((resto) => {
      listContainer.innerHTML +=
        renderRestoCard(resto);
    });
    
    }catch(err) {
      console.log('Error mengambil data list restaurant ', err);
    }

    
  }
}

export default Explore;
