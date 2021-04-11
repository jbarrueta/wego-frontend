import axios from "axios";
import config from "../../config/config";

const api = config.hostedOnServer ? "/api" : "";

export const getFleetList = () => axios.get(`${api}/fleets`);

export const addFleet = (fleet) => axios.post(`${api}/fleets`, fleet);
