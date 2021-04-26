import { RECEIVE_FLEET_LIST, RECEIVE_FLEET } from "../types";
import * as fleetAPI from "../../util/apiUtil/fleet";
import { loading } from "../common/other";

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
