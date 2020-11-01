import * as Actions from "./requestActions";

//Initial state
export const initialState = {
  data: null,
  isFetching: false,
  error: null,
};

//Reducer
const requestReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.START_FETCH_RATES:
      return { ...state, isFetching: true };
    case Actions.FINISH_FETCH_RATES:
      return { ...state, isFetching: false, data: action.payload, error: null };
    case Actions.ERROR_FETCH_RATES:
      return { ...state, isFetching: false, data: null, error: action.payload };
    default:
      return state;
  }
};

export default requestReducer;
