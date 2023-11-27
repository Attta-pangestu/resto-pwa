import RestaurantData from "../../data/restaurant-data";
import { addElem } from "../../utilities/addElem";
import UrlParser from "../../routes/url-parser";
import Spinner from "../template/spinner";

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

    async afterRenderShell() {
        const loadingElement = document.querySelector('.container__loading');
        const mainContainer = document.querySelector('.container');
        const detilContainer = document.querySelector('.container__detail');
        
        detilContainer.style.display = 'none';
        loadingElement.innerHTML = Spinner();

        const getId = UrlParser._urlSplitter.id;
        console.log('Id Resto : ', getId);
        try{
            const dataResto = await RestaurantData.getDetailResto(getId);
            console.log(dataResto);
        }
        catch(err) {
            console.log('error fetch data detail resto ', err);
        }
    }


}

export default DetailResto;