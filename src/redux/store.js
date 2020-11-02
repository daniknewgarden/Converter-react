import { createStore, applyMiddleware } from "redux";
//Middleware
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
//Reducer
import combineReducers from "./rootReducer";

const middlewares = [thunk];

if (process.env.NODE_ENV === `development`) {
  const { logger } = require(`redux-logger`);

  middlewares.push(logger);
}

//Store
const store = createStore(
  combineReducers,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;
