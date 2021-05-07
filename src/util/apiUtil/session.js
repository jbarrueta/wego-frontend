import axios from "axios";
import config from "../../config/config";

const subdomain = config.hostedOnServer
  ? window.location.hostname.split(".")[0]
  : config.workingBranch;

const api = config.hostedOnServer ? `https://${subdomain}.${config.baseURL}/api` : "";

export const login = (user) => axios.post(`${api}/login`, user);

export const register = (user) => axios.post(`${api}/registration`, user);
