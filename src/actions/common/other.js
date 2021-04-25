import { CHANGE_LOADING_STATUS } from "../types";

export const loading = (loading) => {
  return {
    type: CHANGE_LOADING_STATUS,
    payload: loading,
  };
};
