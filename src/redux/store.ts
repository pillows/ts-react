import { createStore, applyMiddleware } from "redux";
import RootReducer from "./reducers";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const middleware = applyMiddleware(thunk);

const store = createStore(RootReducer, composeWithDevTools(middleware));

export default store;
