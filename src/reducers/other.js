import { CHANGE_LOADING_STATUS } from "../actions/types";

const initialState = {
  loading: false,
};

export default (state = initialState, { type, payload }) => {
  Object.freeze(state);
  switch (type) {
    case CHANGE_LOADING_STATUS:
      return { ...state, loading: payload };
    default:
      return state;
  }
};
