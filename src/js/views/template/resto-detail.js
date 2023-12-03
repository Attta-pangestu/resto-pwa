const renderRestoDetail =  (resto) => {
    console.log(resto)
    return `
    <render-detail-component
    .restoData=${{key: "i am here"}}
    testHelo= "Halo ini render "
    .restoobject=${resto}
    ></render-detail-component>
    
    `;
}


export default renderRestoDetail;