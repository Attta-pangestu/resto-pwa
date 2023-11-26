import Config from "../../global/config";

const renderRestoCard = (restoData) => {
  return `
        <div class="card">
            <a href="#/detail/${restoData.id}" class="card__link">
                <div class="card__img">
                    <img 
                    src="${Config.BASE_URL_IMAGE + restoData.pictureId}"
                    alt="${restoData.description}"
                    crossorigin="anonymous">
                    <span class="card__img__rating">
                        <i class="fa fa-star"></i>
                        <span>${restoData.rating}</span>
                    </span>
                </div>

                <div class="card__content">
                    <h2 class="card__content__title">${restoData.name}</h2>
                    <p>${restoData.description}</p>
                </div>
            </a>
        </div>
    `;
};

export default renderRestoCard;
