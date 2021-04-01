import * as sessionAPI from "../util/apiUtil/session";
import { createSession, destroySession } from "../util/cookies";

const receiveUser = (user) => ({
  type: "RECEIVE_USER",
  user,
});

const logoutUser = () => ({
  type: "LOGOUT_USER",
});

export const login = (user) => async (dispatch) => {
  try {
    dispatch(loading(true));
    const response = await sessionAPI.login(user);
    createSession(response.data.data);
    dispatch(receiveUser(response.data.data));
    return dispatch(loading(false));
  } catch (err) {
    console.log(err);
    alert(err.response.data.data.msg);
  }
};

export const registration = (user) => async (dispatch) => {
  try {
    dispatch(loading(true));
    const response = await sessionAPI.registration(user);
    createSession(response.data.data);
    dispatch(receiveUser(response.data.data));
    return dispatch(loading(false));
  } catch (err) {
    console.log(err);
    alert(err.response.data.data.msg);
  }
};

export const logout = () => {
  destroySession();
};
