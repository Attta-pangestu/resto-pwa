class renderMenuDetailComponent extends HTMLElement {

    set restoData(data){
        this._restoData = JSON.parse(data);
        this.render();
    }

    render(){
        console.log(this._restoData);
        this.innerHTML = `
            <h2>List Menu On This Restaurant</h2>
            <div class="menu">
                <h4>Food</h4>
                <ul class="list-menu">
                ${this._restoData.menus.foods.map(
                    (food,i) => `<li class="list-item"><p>${i + 1}) ${food.name}</p></li>`
                    
                ).join('')}
                </ul>
                <h4>Drink</h4>
                <ul  class="list-menu">
                ${this._restoData.menus.drinks.map(
                    (food,i) => `<li class="list-item"><p>${i + 1}) ${food.name}</p></li>`
                    
                ).join('')}
                </ul>
                <h4>Customer Reviews</h4>
                <ul class="list-menu list-review">
                    ${this._restoData.customerReviews.map(
                        (review) => {
                            return `
                                <li class="list-item ">
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