import { combineReducers } from 'redux';
//Reducers
import themeReducer from './theme/themeReducer';
import fullscreenReducer from './fullscreen/fullscreenReducer'

export default combineReducers({
  theme: themeReducer,
  fullscreen: fullscreenReducer
});