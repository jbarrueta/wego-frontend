import { CHANGE_LOADING_STATUS } from "./types";

export const loading = (isLoading) => ({
  type: CHANGE_LOADING_STATUS,
  isLoading,
});
