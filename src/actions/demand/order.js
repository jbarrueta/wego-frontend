import { RECEIVE_ORDER } from "../types";
import * as orderAPI from "../../util/apiUtil/order";
import { loading } from "../common/other";

const receiveOrder = (order) => ({
  type: RECEIVE_ORDER,
  payload: order,
});

export const requestOrder = (requestObj) => async (dispatch) => {
  try {
    dispatch(loading(true));
    console.log("request sent");
    const response = await orderAPI.requestOrder(requestObj);
    dispatch(receiveOrder(response.data.data));
    console.log("request done");
    setTimeout(() => dispatch(loading(false)), 5000);
  } catch (err) {
    console.log(`requestOrder action ERROR: ${err}`);
    alert(err.response.data.data.msg);
  }
};
