import { combineReducers } from "redux";
//Reducers
import themeReducer from "./theme/themeReducer";
import fullscreenReducer from "./fullscreen/fullscreenReducer";
import deviceReducer from "./device/deviceReducer";
import requestReducer from "./API/requestReducer";
import baseValueReducer from "./baseValue/baseValueReducer";

export default combineReducers({
  theme: themeReducer,
  fullscreen: fullscreenReducer,
  mode: deviceReducer,
  ratesData: requestReducer,
  baseValue: baseValueReducer,
});
