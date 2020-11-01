import { createStore, applyMiddleware } from "redux";
//Middleware
import thunk from "redux-thunk";
//Reducer
import combineReducers from "./rootReducer";

//Store
const store = createStore(combineReducers, applyMiddleware(thunk));

export default store;
