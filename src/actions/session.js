import * as sessionAPI from "../util/apiUtil/session";
import { createSession, destroySession } from "../util/cookies";
import { loading } from "./other";
import { LOGOUT_USER, RECEIVE_USER } from "./types";

const receiveUser = (user) => ({
  type: RECEIVE_USER,
  user,
});

const logoutUser = () => ({
  type: LOGOUT_USER,
});

export const login = (user, cookies) => async (dispatch) => {
  try {
    dispatch(loading(true));
    const response = await sessionAPI.login(user);
    createSession(response.data.data, cookies);
    dispatch(receiveUser(response.data.data));
    return dispatch(loading(false));
  } catch (err) {
    console.log(err);
    alert(err.response.data.data.msg);
  }
};

export const register = (user, cookies) => async (dispatch) => {
  try {
    dispatch(loading(true));
    const response = await sessionAPI.register(user);
    createSession(response.data.data, cookies);
    dispatch(receiveUser(response.data.data));
    return dispatch(loading(false));
  } catch (err) {
    console.log(err);
    alert(err.response.data.data.msg);
  }
};

export const logout = (cookies) => {
  destroySession(cookies);
};
