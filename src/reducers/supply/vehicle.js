import {
  RECEIVE_UPDATED_VEHICLE,
  RECEIVE_VEHICLE,
  RECEIVE_VEHICLE_LIST,
} from "../../actions/types";

const initialState = {
  vehicleList: [],
};

export default (state = initialState, { type, payload }) => {
  Object.freeze(state);
  switch (type) {
    case RECEIVE_VEHICLE:
      return { ...state, vehicleList: [...state.vehicleList, payload] };
    case RECEIVE_UPDATED_VEHICLE:
      const vehicleList = [
        ...state.vehicleList.filter((vehicle) => vehicle._id != payload._id),
        payload,
      ];
      return { ...state, vehicleList: vehicleList };
    case RECEIVE_VEHICLE_LIST:
      return { ...state, vehicleList: payload };
    default:
      return state;
  }
};
