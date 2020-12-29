import * as Actions from "./columnCountActions";

const initialState = {
  count: 1,
};

const columnCountReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.SET_COLUMN_COUNT:
      return { ...state, count: action.payload };

    default:
      return state;
  }
};

export default columnCountReducer;
