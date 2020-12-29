import { combineReducers } from "redux";
//Reducers
import themeReducer from "./theme/themeReducer";
import fullscreenReducer from "./fullscreen/fullscreenReducer";
import requestReducer from "./API/requestReducer";
import baseValueReducer from "./baseValue/baseValueReducer";
import columnModeReducer from "./column/columnMode/columnModeReducer";
import columnCountReducer from "./column/columnCount/columnCountReducer";

export default combineReducers({
  theme: themeReducer,
  fullscreen: fullscreenReducer,
  ratesData: requestReducer,
  baseValue: baseValueReducer,
  twoColumn: columnModeReducer,
  columnsCount: columnCountReducer,
});
