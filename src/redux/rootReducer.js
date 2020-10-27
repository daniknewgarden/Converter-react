import { combineReducers } from 'redux';
//Reducers
import themeReducer from './theme/themeReducer';
import fullscreenReducer from './fullscreen/fullscreenReducer';
import deviceReducer from './device/deviceReducer'

export default combineReducers({
  theme: themeReducer,
  fullscreen: fullscreenReducer,
  mode: deviceReducer
});