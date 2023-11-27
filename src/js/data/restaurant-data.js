import APIEndpoint from "../global/api-endpoint";
import axios from "axios";

const RestaurantData = {
  async getListAll() {
    const result = await axios.get(APIEndpoint.GET_LIST);
    return result.data.restaurants;
  },

  async getDetailResto(id) {
    const result = await axios.get(APIEndpoint.GET_DETAIL(id));
    console.log(result, APIEndpoint.GET_DETAIL(id));
    return result.data.restaurants;
  }
};

export default RestaurantData;
