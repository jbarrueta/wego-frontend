import { LOGOUT_USER, RECEIVE_USER } from "../../actions/types";

const initialState = {
  user: {
    id: null,
    email: null,
    firstName: null,
    lastName: null,
    role: null,
  },
  loggedIn: false,
};

export default (state = initialState, { type, payload }) => {
  Object.freeze(state); //state should never be manually changed
  //switch case is used to determine the kind of action performed
  switch (type) {
    case RECEIVE_USER:
      return { ...state, user: payload, loggedIn: true };
    case LOGOUT_USER:
      // reset to initial state with no user
      return initialState;
    default:
      return state;
  }
};
