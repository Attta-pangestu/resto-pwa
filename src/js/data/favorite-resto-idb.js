import { openDB} from "idb";
import Config from "../global/config";

const {DB_NAME, DB_VERSION, OBJECT_STORE_NAME} = Config ;

const openIdbObj = openDB(DB_NAME, DB_VERSION, {
    upgrade(db) {
        db.createObjectStore(OBJECT_STORE_NAME,{
            keyPath: 'id', 
            autoIncrement: true,
        })
    }
});

const FavRestoIdb = {
    // get resto by Id
    async getResto(id) {
        return (await openIdbObj).get(OBJECT_STORE_NAME, id);
    },

    async putResto(restoObj){
        if(!restoObj.hasOwnProperty('id')){
            return;
        }
        // check if there the id s
        (await openIdbObj).put(OBJECT_STORE_NAME, restoObj, restoObj.id);
    }, 

    async deleteResto(id){
        (await openIdbObj).delete(OBJECT_STORE_NAME, id);
    }
}

export default FavRestoIdb;