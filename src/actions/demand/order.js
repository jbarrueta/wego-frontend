import { RECEIVE_ORDER } from "../types";
import * as orderAPI from "../../util/apiUtil/order";
import { loading } from "../common/other";
import axios from "axios";

const receiveOrder = (order) => ({
  type: RECEIVE_ORDER,
  payload: order,
});

export const requestOrder = (requestObj) => async (dispatch) => {
  const loadMsg = (
    <>
      Requesting your <span className="logoFont f3">WeGo</span> vehicle
    </>
  );
  try {
    dispatch(
      loading({
        isLoading: true,
        loadMsg,
      })
    );
    const response = await orderAPI.requestOrder(requestObj);
    dispatch(receiveOrder(response.data.data));
    setTimeout(
      () =>
        dispatch(
          loading({
            isLoading: false,
            loadMsg: ``,
          })
        ),
      4000
    );
  } catch (err) {
    alert(err.response.data.data.msg);
    window.location.href = "/landing";
    dispatch(
      loading({
        isLoading: false,
        loadMsg: ``,
      })
    );
  }
};

export const getOrder = (query) => async (dispatch) => {
  try {
    dispatch(
      loading({
        isLoading: true,
        loadMsg: `Loading your order info`,
      })
    );
    const response = await orderAPI.getOrders(query);
    dispatch(receiveOrder(response.data.data[0]));
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
    alert(err.response.data.data.msg);
    dispatch(
      loading({
        isLoading: false,
        loadMsg: ``,
      })
    );
    window.location.href = "/landing";
  }
};
