// It's deprecated, use it for legacy code. "configureStore" from RTK is the better way.
import { legacy_createStore } from "redux";
import reducers from "./reducers/index";

// Create the redux store with our reducer
const store = legacy_createStore(
  reducers,
  {},
  // Redux Devtools
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
