import * as sessionAPI from "../../util/apiUtil/session";
import { createSession, destroySession } from "../../util/cookies";
import { loading } from "./other";
import { LOGOUT_USER, RECEIVE_USER } from "../types";

export const receiveUser = (user) => ({
  type: RECEIVE_USER,
  payload: user,
});

const logoutUser = () => ({
  type: LOGOUT_USER,
});

export const login = (user, cookies) => async (dispatch) => {
  try {
    dispatch(
      loading({
        isLoading: true,
        loadMsg: ``,
      })
    );
    const response = await sessionAPI.login(user);
    createSession(response.data.data, cookies);
    dispatch(receiveUser(response.data.data));
    setTimeout(
      () =>
        dispatch(
          loading({
            isLoading: false,
            loadMsg: ``,
          })
        ),
      2000
    );
  } catch (err) {
    console.log(`login action ERROR: ${err}`);
    alert(err.response.data.data.msg);
    dispatch(
      loading({
        isLoading: false,
        loadMsg: ``,
      })
    );
  }
};

export const register = (user, cookies) => async (dispatch) => {
  try {
    dispatch(
      loading({
        isLoading: true,
        loadMsg: ``,
      })
    );
    const response = await sessionAPI.register(user);
    createSession(response.data.data, cookies);
    dispatch(receiveUser(response.data.data));
    setTimeout(
      () =>
        dispatch(
          loading({
            isLoading: false,
            loadMsg: ``,
          })
        ),
      2000
    );
  } catch (err) {
    console.log(`register action ERROR: ${err}`);
    alert(err.response.data.data.msg);
    dispatch(
      loading({
        isLoading: false,
        loadMsg: ``,
      })
    );
  }
};

export const logout = (cookies) => {
  destroySession(cookies);
  return logoutUser();
};
