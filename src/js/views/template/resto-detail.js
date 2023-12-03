const renderRestoDetail =  (resto) => {
    const stringedResto = JSON.stringify(resto);
    return (
        renderDetailComponent(stringedResto) +
        renderMenuDetailComponent(stringedResto)
    ); 
    
}

const renderMenuDetailComponent = (resto) =>  {
    const menuComponent = document.createElement('render-menu-detail');
    menuComponent.restoData = resto ;
    return menuComponent.outerHTML;
    
}

const renderDetailComponent = (resto) => {
    const detailElement =  document.createElement('render-detail-component');
    // set detail property
    detailElement.restoData = resto ;
    return detailElement.outerHTML;
}


export default renderRestoDetail;