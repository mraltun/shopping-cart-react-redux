// Legacy for legacy code. "configureStore" from RTK is the better way.
import { legacy_createStore } from "redux";
import reducers from "./reducers/index";

const store = legacy_createStore(reducers, {});

export default store;
