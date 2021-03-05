import { combineReducers } from "redux";
import authenticateReducer from "./authenticate";

const RootReducer = combineReducers({ auth: authenticateReducer });

export type RootStoreI = ReturnType<typeof RootReducer>;

export default RootReducer;
