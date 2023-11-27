import RestaurantData from "../../data/restaurant-data";
import { addElem } from "../../utilities/addElem";

class DetailResto {
    constructor({mainSection}) {
        this._mainSection = mainSection;
    }

    initialShell() {
        console.log('Menjalankan detail resto script');
        const mainContainer = addElem('div',this._mainSection,['container']);
        addElem('div', mainContainer, ['container_loading']);
        addElem('h1', mainContainer, ['container-title'], 'Memuat Data Restoran');
        addElem('section', mainContainer, ['container__detail']);
        
    }

}