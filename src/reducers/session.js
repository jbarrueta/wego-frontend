const initialState = {
  userId: null,
  email: null,
  firstName: null,
  lastName: null,
  role: null,
};

export default (state = initialState, payload) => {
  Object.freeze(state); //state should never be manually changed
  //switch case is used to determine the kind of action performed
  switch (payload.type) {
    case "RECEIVE_USER":
      return payload.user;
    case "LOGOUT_USER":
      // reset to initial state with no user
      return initialState;
  }
};
