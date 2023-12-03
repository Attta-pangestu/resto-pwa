class renderMenuDetailComponent extends HTMLElement {

    set restoData(data){
        this._restoData = JSON.parse(data);
        this.render();
    }

    render(){
        console.log(this._restoData);
        this.innerHTML = `
            <h3>List Menu On This Restaurant</h3>
            <div classs="menu">
                <h4>Food</h4>
                <ul>
                ${this._restoData.menus.foods.map(
                    (food,i) => `<li><p>${i + 1}) ${food.name}</p></li>`
                    
                ).join('')}
                </ul>
                <h4>Drink</h4>
                <ul>
                ${this._restoData.menus.drinks.map(
                    (food,i) => `<li><p>${i + 1}) ${food.name}</p></li>`
                    
                ).join('')}
                </ul>
                <h4>Customer Reviews</h4>
                <ul>
                    ${this._restoData.customerReviews.map(
                        (review) => {
                            return `
                                <li>
                                    <div class="review-header">
                                        <h3>${review.name}</h3>
                                        <p>${review.date}</p>
                                    </div>
                                    <div class="review-body">
                                        ${review.review}
                                    </div>
                                </li>
                            `;
                        }
                    ).join('')}
                </ul>
            </div>
        `;
    }
}

customElements.define('render-menu-detail', renderMenuDetailComponent);
export default renderMenuDetailComponent;