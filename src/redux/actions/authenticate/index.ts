import { Dispatch } from "redux";
import {
  AuthenticateDispatchTypes,
  LOG_IN_LOADING,
  LOG_IN_SUCCESS,
  LOG_IN_FAIL,
  LOG_OUT,
} from "./authenticateTypes";
import StorageHelper from "../../../services/storageHelper";
const localStore = new StorageHelper.storageWorker();

export const authenticate = (email: string) => (
  dispatch: Dispatch<AuthenticateDispatchTypes>
) => {
  try {
    dispatch({ type: LOG_IN_LOADING });
    setTimeout(() => {
      localStore.add("tsToken", "tokenFromApi");
      dispatch({
        type: LOG_IN_SUCCESS,
        payload: { name: email },
      });
    }, 2000);
  } catch (e) {
    dispatch({
      type: LOG_IN_FAIL,
      payload: { message: "Invalid Credentials" },
    });
  }
};

export const validateError = (message: string) => (
  dispatch: Dispatch<AuthenticateDispatchTypes>
) => {
  dispatch({
    type: LOG_IN_FAIL,
    payload: { message },
  });
};

export const logOut = () => (dispatch: Dispatch<AuthenticateDispatchTypes>) => {
  localStore.remove("tsToken");
  dispatch({
    type: LOG_OUT,
  });
};
