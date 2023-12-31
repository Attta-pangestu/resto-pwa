import RestaurantData from "../../data/restaurant-data";
import { addElem } from "../../utilities/addElem";
import UrlParser from "../../routes/url-parser";
import Spinner from "../template/spinner";
import renderRestoDetail from "../template/resto-detail";
import LikeButtonPresenter from "../../utilities/like-button-presenter";

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
        const loadingElement = document.querySelector('.container__loading');
        const detilContainer = document.querySelector('.container__detail');
        const likeContainer = document.querySelector('#like-container');
        detilContainer.style.display = 'none';
        loadingElement.innerHTML = Spinner();
        const getId = UrlParser.parseURLParam()['id'];

        try{
            // RENDER DATA TO DOM
            const dataResto = await RestaurantData.getDetailResto(getId);
            detilContainer.innerHTML = renderRestoDetail(dataResto);
            // CHANGE VIEW FROM SPINNER TO DETAIL INFO
            loadingElement.style.display = 'none';
            detilContainer.style.display = 'block';

            // ADD LOGIC TO TOGGLE LIKE BUTTON
            LikeButtonPresenter.init({
                restoObj: dataResto, 
                likeContainer: likeContainer,
            });
            
        }
        catch(err) {
            console.log('error fetch data detail resto ', err);
        }
    }


}

export default DetailResto;