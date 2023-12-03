class DetailRestoComponent extends LitElement  {
    
    static get properties() {
        return {
            restoData : {type:Object}, 
            testHelo : {type: String},
            restoObject : {type:Object},
            restoArray : {type:Array},
        }
    }
    
    set MyAttributes(restoData) {
        this.restoObject = restoData;
    }

    constructor() {
        super();
        this.restoData = '';
        this.testHelo = {};
        this.restoObject = {};
        this.restoArray = [{}];
        console.log('DetailRestoComponent constructor called');
    }

    updated(changedProperties) {
        console.log('DetailRestoComponent updated:', changedProperties);
    }

    render(){
        // const parseRestoData = JSON.parse(this.restoData);
        console.log(this.testHelo);
        console.log(this.restoData);
        console.log(this.restoObject);
        // console.log(parseRestoData);
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
                        <p class="info__point">${this.restoData.address}, ${this.restoData.city}</p>
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
export default DetailRestoComponent;