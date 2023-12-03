
import Config from "../../../global/config";

class DetailRestoComponent extends HTMLElement  {
    
    set restoData(data) {
        this._restoData = JSON.parse(data);
        this.render();
    }

    get restoData() {
        return this._restoData;
    }

    render(){

        this.innerHTML =  `
            <div class="detail">
            <h2>${this._restoData.name}</h3>
            <div class="detail__image">
                <img src="${Config.BASE_URL_IMAGE + this._restoData.pictureId}" alt="Resto Image"/>
            </div>
            
            <div class="detail__info">
                <ul class="info__points">
                    <li>
                        <i title="restaurant" class="fas fa-store-alt icon-primary"></i>
                        <p class="info__point">${this._restoData.name}</p>
                    </li>
                    <li>
                        <i title="address" class="fas fa-map-marker-alt icon-primary"></i>
                        <p class="info__point">${this._restoData.address}, ${this._restoData.city}</p>
                    </li>
                    <li>
                        <i title="ratings" class="fas fa-star icon-primary"></i>
                        <p class="info__point">${this._restoData.rating}</p>
                    </li>

                    <li>
                        <p class="info__description">${this._restoData.description}</p>
                    </li>

                    <li>
                        ${this._restoData.categories.map(
                            (category) => `
                                <span class="category">${category.name}</span>
                            `
                        )}
                    </li>
                </ul>
            </div>
        </div>
        `;
    }
    
}

customElements.define('render-detail-component', DetailRestoComponent);
export default DetailRestoComponent;