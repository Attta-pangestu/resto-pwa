const renderRestoDetail =  (resto) => {
    return `
    <render-detail-component
    .restoData=${JSON.stringify(resto)}
    testHelo= "Halo"
    .restoObject=${resto}
    ></render-detail-component>
    
    `;
}


export default renderRestoDetail;