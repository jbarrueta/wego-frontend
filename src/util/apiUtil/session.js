import axios from "axios";
import { hostedOnServer } from "../../config/config";

const api = hostedOnServer ? "/api" : "";

export const login = (user) => axios.post(`/${api}/login`, user);

export const registration = (user) => axios.post(`${api}/registration`);
