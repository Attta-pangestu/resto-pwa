import APIEndpoint from "../global/api-endpoint";
import axios from "axios";

const RestaurantData = {
  async getListAll() {
    const result = await axios.get(APIEndpoint.GET_LIST);
    return result.data.restaurants;
  },

  async getDetailResto(id) {
    try{
      const result = await axios.get(APIEndpoint.GET_DETAIL(id));
      return result.data.restaurant;
    }catch(err){
      console.log('gagal mengakses detail resto : ', err)
    }
  }
};

export default RestaurantData;
