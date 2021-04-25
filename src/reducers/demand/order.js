import { RECEIVE_ORDER, RECEIVE_ORDERS_LIST } from "../../actions/types";

const initialState = {
  currentOrder: {
    id: null,
    publicId: null,
    status: null,
  },
  orderList: [],
};

export default (state = initialState, { type, payload }) => {
  Object.freeze(state);
  switch (type) {
    case RECEIVE_ORDER:
      console.log(payload.routeObj.ETA, "test");
      return {
        ...state,
        currentOrder: {
          ...payload,
          routeObj: {
            ...payload.routeObj,
            ETA: new Date(payload.routeObj.ETA),
          },
        },
        // currentOrder: "TEST",
      };
    case RECEIVE_ORDERS_LIST:
      return { ...state, orderList: payload };
    default:
      return state;
  }
};
