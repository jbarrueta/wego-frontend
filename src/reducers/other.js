import { CHANGE_LOADING_STATUS } from "../actions/types";

const initialState = {
  loading: false,
};

export default (state = initialState, payload) => {
  Object.freeze(state);
  switch (payload.type) {
    case CHANGE_LOADING_STATUS:
      return { ...state, loading: payload.isLoading };
    default:
      return state;
  }
};
