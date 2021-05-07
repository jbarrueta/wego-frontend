import { RECEIVE_FLEET, RECEIVE_FLEET_LIST } from "../../actions/types";

const initialState = {
  fleetList: [],
};

export default (state = initialState, { type, payload }) => {
  Object.freeze(state);
  switch (type) {
    case RECEIVE_FLEET:
      return { ...state, fleetList: [...state.fleetList, payload] };
    case RECEIVE_FLEET_LIST:
      return { ...state, fleetList: payload };
    default:
      return state;
  }
};
