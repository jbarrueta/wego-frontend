import axios from "axios";
import config from "../../config/config";

const api = config.hostedOnServer ? "/api" : "";

export const login = (user) => axios.post(`${api}/login`, user);

export const register = (user) => axios.post(`${api}/registration`, user);
