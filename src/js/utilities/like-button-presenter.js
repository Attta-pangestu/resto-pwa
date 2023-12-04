import { 
    createLikeButton, 
    createNotLikeButton 
} from "../views/template/components/like-button";

import FavRestoIdb from "../data/favorite-resto-idb";

const LikeButtonPresenter = {
    async init({restoObj,likeContainer }){
        this._restoObj = restoObj;
        this._likeContainer = likeContainer;
        this._renderButton();
    },
    
    async _renderButton(){
        const { id } = this._restoObj;
        // get resto stat by ID from indexDB
        const likedResto = await FavRestoIdb.getResto(id);
        if(!likedResto){
            console.log('Not like this resto', id);
            this._renderNotLikeStat();
        }else{
            console.log('Like this resto');
            this._renderLikeStat();
        }
    }, 

    _renderNotLikeStat(){
        this._likeContainer.innerHTML = createLikeButton();
        this._likeListener(false);
    }, 

    _renderLikeStat(){
        this._likeContainer.innerHTML = createNotLikeButton();
        this._likeListener(true);
    }, 
    
    _likeListener(likedStat){
        document.querySelector('#likeButton').addEventListener('click', async () => {
        if(!likedStat){
            await FavRestoIdb.putResto(this._restoObj);
            this._renderLikeStat();
        }else{
            await FavRestoIdb.deleteResto(this._restoObj.id);
            this._renderNotLikeStat();            
        }
        });
    }
    
}

export default LikeButtonPresenter;