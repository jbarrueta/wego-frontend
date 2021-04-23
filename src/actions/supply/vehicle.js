import {
  RECEIVE_VEHICLE,
  RECEIVE_VEHICLE_LIST,
  RECEIVE_UPDATED_VEHICLE,
} from "../types";
import * as vehicleAPI from "../../util/apiUtil/vehicle";
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

const receiveVehicle = (vehicle) => ({
  type: RECEIVE_VEHICLE,
  payload: vehicle,
});

const receiveUpdatedVehicle = (vehicle) => ({
  type: RECEIVE_UPDATED_VEHICLE,
  payload: vehicle,
});

const receiveVehicleList = (vehicleList) => ({
  type: RECEIVE_VEHICLE_LIST,
  payload: vehicleList,
});

export const addVehicle = (fleetId, vehicleObj) => async (dispatch) => {
  try {
    console.log("here");
    const response = await vehicleAPI.addVehicle(fleetId, vehicleObj);
    dispatch(receiveVehicle(response.data.data));
  } catch (err) {
    alert(err.response.data.data.msg);
  }
};

export const updateVehicle = (vehicleId, vehicleObj) => async (dispatch) => {
  try {
    const response = await vehicleAPI.updateVehicle(vehicleId, vehicleObj);
    dispatch(receiveUpdatedVehicle(response.data.data));
  } catch (err) {
    alert(err.response.data.data.msg);
  }
};

export const getVehicleList = (fleetId) => async (dispatch) => {
  try {
    const response = await vehicleAPI.getVehicleList(fleetId);
    dispatch(receiveVehicleList(response.data.data.vehicleList));
  } catch (err) {
    alert(err.response.data.data.msg);
  }
};
