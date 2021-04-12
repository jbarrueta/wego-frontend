import axios from "axios";
import config from "../../config/config";

const api = config.hostedOnServer ? "/api" : "";

export const getVehicleList = (fleetId) =>
  axios.get(`${api}/${fleetId}/vehicle`);

export const addVehicle = (fleetId, vehicle) =>
  axios.post(`${api}/${fleetId}/vehicle`, vehicle);
