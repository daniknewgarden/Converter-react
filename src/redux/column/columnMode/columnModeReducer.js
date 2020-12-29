import * as Actions from "./columnModeActions";

//Initial state
const initialState = {
  twoColumn: true,
};

//Reducer
const columnModeReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.APPLY_TWO_COLUMN:
      return { ...state, twoColumn: action.payload };
    default:
      return state;
  }
};

export default columnModeReducer;
