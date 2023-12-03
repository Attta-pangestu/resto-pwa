const renderRestoDetail =  async (resto) => {
    const detailElement =  await document.createElement('render-detail-component');
    
    detailElement.restoData = await JSON.stringify(resto) ;
    return detailElement.outerHTML;
}

const renderDetailComponent = (resto) => {
    const detailElement =  document.createElement('render-detail-component');

    // set detail property
    detailElement.restoData = JSON.stringify(resto) ;
    return detailElement;
}


export default renderRestoDetail;