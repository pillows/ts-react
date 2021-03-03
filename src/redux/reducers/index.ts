import { combineReducers } from "redux";
import globalReducer from "./appData";

const RootReducer = combineReducers({ globalReducer });

export type RootStore = ReturnType<typeof RootReducer>;

export default RootReducer;