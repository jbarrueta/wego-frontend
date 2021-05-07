import axios from "axios";
import config from "../../config/config";

const api = config.hostedOnServer ? `https://supply.${config.baseURL}/api` : "";

export const getFleetList = () => axios.get(`${api}/fleets`);

export const addFleet = (fleet) => axios.post(`${api}/fleets`, fleet);
