import { combineReducers } from "redux";
import session from "./session";
import other from "./other";
import order from "./order";

export default combineReducers({ session, order, other });
