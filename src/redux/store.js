import { createStore, applyMiddleware } from 'redux';
//Middleware
import thunk from 'redux-thunk';
//Reducer
import combineReducers from './rootReducer';

//Logger only in development
const middlewares = [thunk];

if (process.env.NODE_ENV === `development`) {
  const { logger } = require(`redux-logger`);

  middlewares.push(logger);
}

//FIXME: logger don't work correct (undefined)

//Store
const store = createStore(combineReducers, applyMiddleware(...middlewares));

export default store;