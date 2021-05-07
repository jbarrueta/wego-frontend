import { combineReducers } from "redux";
import session from "./common/session";
import other from "./common/other";
import order from "./demand/order";
import fleet from "./supply/fleet";
import vehicle from "./supply/vehicle";
export default combineReducers({ session, order, other, fleet, vehicle });
