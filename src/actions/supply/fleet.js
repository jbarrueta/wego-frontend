import { RECEIVE_FLEET_LIST, RECEIVE_FLEET } from "../types";
import * as fleetAPI from "../../util/apiUtil/fleet";
import { loading } from "../common/other";

// export const requestOrder = (requestObj) => async (dispatch) => {
//   try {
//     dispatch(loading(true));
//     console.log("request sent");
//     const response = await orderAPI.requestOrder(requestObj);
//     dispatch(receiveOrder(response.data.data));
//     console.log("request done");
//     setTimeout(() => dispatch(loading(false)), 5000);
//   } catch (err) {
//     console.log(`requestOrder action ERROR: ${err}`);
//     alert(err.response.data.data.msg);
//   }
// };

const receiveFleet = (fleet) => ({
  type: RECEIVE_FLEET,
  payload: fleet,
});

const receiveFleetList = (fleetList) => ({
  type: RECEIVE_FLEET_LIST,
  payload: fleetList,
});

export const addFleet = (fleetObj) => async (dispatch) => {
  try {
    const response = await fleetAPI.addFleet(fleetObj);
    dispatch(receiveFleet(response.data.data));
  } catch (err) {
    alert(err.response.data.data.msg);
  }
};

export const getFleetList = () => async (dispatch) => {
  try {
    const response = await fleetAPI.getFleetList();
    dispatch(receiveFleetList(response.data.data.fleetList));
  } catch (err) {
    alert(err.response.data.data.msg);
  }
};
