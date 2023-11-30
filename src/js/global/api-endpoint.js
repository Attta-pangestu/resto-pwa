import Config from "./config";
const APIEndpoint = {
  GET_LIST: `${Config.BASE_URL}/list`,
  GET_DETAIL: (id) => `${Config.BASE_URL}/detail/${id}`,
  SEARCH_RESTO: (query) => {
    `${Config.BASE_URL}/search?q=${query}`;
  },
};

export default APIEndpoint;
