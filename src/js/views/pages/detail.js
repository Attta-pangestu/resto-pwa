import RestaurantData from "../../data/restaurant-data";
import { addElem } from "../../utilities/addElem";
import UrlParser from "../../routes/url-parser";
import Spinner from "../template/spinner";
import renderRestoDetail from "../template/resto-detail";
class DetailResto {
    constructor({mainSection}) {
        this._mainSection = mainSection;
        this._mainSection.innerHTML = '';
    }

    initialShell() {
        console.log('Menjalankan detail resto script');
        const mainContainer = addElem('div',this._mainSection,['container']);
        addElem('div', mainContainer, ['container__loading']);
        addElem('h1', mainContainer, ['container__title'], 'Memuat Data Restoran');
        addElem('section', mainContainer, ['container__detail']);
    }

    async afterRenderShell() {
        try{
            const loadingElement = document.querySelector('.container__loading');
            const mainContainer = document.querySelector('.container');
            const detilContainer = document.querySelector('.container__detail');
            
            detilContainer.style.display = 'none';
            loadingElement.innerHTML = Spinner();
            const getId = UrlParser.parseURLParam()['id'];
            console.log('Id Resto :',getId);
            const dataResto = await RestaurantData.getDetailResto(getId);
            console.log(dataResto);
            mainContainer.innerHTML = renderRestoDetail(dataResto);
        }
        catch(err) {
            console.log('error fetch data detail resto ', err);
        }
    }


}

export default DetailResto;