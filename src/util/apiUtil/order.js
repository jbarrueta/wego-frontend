import axios from "axios";
import config from "../../config/config";

const api = config.hostedOnServer ? `https://demand.${config.baseURL}/api` : "";

export const requestOrder = (requestObj) =>
  axios.post(`${api}/order/request`, requestObj);

export const getOrders = (query = "") => axios.get(`${api}/order?${query}`);
