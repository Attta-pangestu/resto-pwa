import Config from "../../global/config";
import DetailRestoComponent from "./components/detail-resto-component";

const renderRestoDetail = (resto) => {
    console.log('Init dari resto detail ', resto);
    return `
        <render-detail-component
            restoData=${resto}
        ></render-detail-component>
    `;
    
}

export default renderRestoDetail;