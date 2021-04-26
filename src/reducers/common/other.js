import { CHANGE_LOADING_STATUS } from "../../actions/types";

const initialState = {
  isLoading: false,
  loadMsg: "",
};

export default (state = initialState, { type, payload }) => {
  Object.freeze(state);
  switch (type) {
    case CHANGE_LOADING_STATUS:
      return {
        ...state,
        isLoading: payload.isLoading,
        loadMsg: payload.loadMsg,
      };
    default:
      return state;
  }
};
