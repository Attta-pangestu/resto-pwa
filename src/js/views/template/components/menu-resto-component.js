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
                <h4>Food ${this._restoData.name}</h4>
                <ul> </ul>
            </div>
        `;
    }
}

customElements.define('render-menu-detail', renderMenuDetailComponent);
export default renderMenuDetailComponent;