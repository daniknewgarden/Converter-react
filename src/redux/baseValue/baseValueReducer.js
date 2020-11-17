import * as Actions from "./baseValueActions";

//initial state
const initialState = {
  value: 1,
};

const baseValueReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.UPDATE_BASE_VALUE:
      return { ...state, value: action.payload };

    default:
      return state;
  }
};

export default baseValueReducer;
