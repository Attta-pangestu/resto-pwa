import { html, LitElement, property } from "lit";

import Config from "../../../global/config";


class DetailRestoComponent extends LitElement  {
    @property({type: Object}) restoData={}
    

    render(){
        console.log(this.restoData);
        return html `
            <div class="detail">
            <div class="detail__image">
                <img src="${Config.BASE_URL_IMAGE + this.restoData.pictureId}" alt="Resto Image"/>
            </div>
            
            <div class="detail__info">
                <ul class="info__points">
                    <li>
                        <i title="restaurant" class="fas fa-store-alt icon-primary"></i>
                        <p class="info__point">${this.restoData.name}</p>
                    </li>
                    <li>
                    <i title="address" class="fas fa-map-marker-alt icon-primary"></i>
                        <p class="info__point">${this.restoData.address}, ${resto.city}</p>
                    </li>
                    <i title="ratings" class="fas fa-star icon-primary"></i>
                        <p class="info__point">${this.restoData.rating}</p>
                    </li>

                    <li>
                        <p class="info__description">${this.restoData.description}</p>
                    </li>

                    <li>
                        ${this.restoData.categories.map(
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