import axios from "axios";
import config from "../../config/config";

const api = config.hostedOnServer ? "/api" : "";

export const requestOrder = (requestObj) =>
  axios.post(`${api}/order/request`, requestObj);
