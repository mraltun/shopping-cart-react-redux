// It's deprecated, use it for legacy code. "configureStore" from RTK is the better way.
import { legacy_createStore, applyMiddleware, compose } from "redux";
import reducers from "./reducers/index";
// For async
import thunk from "redux-thunk";

// Redux Devtools. Move here from store below because we use middlewares. We are also using compose to pass multiple store enhancers (HOF)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Create the redux store with our combined reducers. Apply the thunk middleware.
const store = legacy_createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
