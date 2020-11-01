import * as Actions from "./themeActions";

//Initial state
const initialState = {
  darkTheme: true,
};

//Reducer
const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.APPLY_THEME:
      return { ...state, darkTheme: action.payload };
    default:
      return state;
  }
};

export default themeReducer;
