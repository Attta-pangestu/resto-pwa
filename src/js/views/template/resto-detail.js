import Config from "../../global/config";

const renderRestoDetail = (resto) => {
    return `
        <div class="detail">
            <div class="detail__image">
                <img src="${Config.BASE_URL_IMAGE + resto.pictureId}" alt="Resto Image"/>
            </div>
            
            <div class="detail__info">
                <ul class="info__points">
                    <li>
                        <i title="restaurant" class="fas fa-store-alt icon-primary"></i>
                        <p class="info__point">${resto.name}</p>
                    </li>
                    <li>
                    <i title="address" class="fas fa-map-marker-alt icon-primary"></i>
                        <p class="info__point">${resto.address}, ${resto.city}</p>
                    </li>
                    <i title="ratings" class="fas fa-star icon-primary"></i>
                        <p class="info__point">${resto.rating}</p>
                    </li>

                    <li>
                        <p class="info__description">${resto.description}</p>
                    </li>

                    <li>
                        ${resto.categories.map(
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

export default renderRestoDetail;