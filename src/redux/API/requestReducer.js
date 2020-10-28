import * as Actions from "./requestActions";

const requestReducer = (state = {}, action) => {
    switch (action.type) {
        case Actions.REQUEST_RATES:
            return {...state, loading: true}
        case Actions.RECEIVE_RATES:
            return {...state, json: action.json, loading: false}
        default:
            return state;
    }
}

export default requestReducer;