import * as Actions from './deviceActions';

//Initial state
const defaultString = 'default'
const initialState = {
    mode: defaultString
}

const deviceReducer = (state = initialState, action) => {
    switch (action.type) {
        case Actions.APPLY_MOBILE:
            return {...state, mode: 'mobile'};
        case Actions.APPLY_TABLET:
            return {...state, mode: 'tablet'};
        case Actions.APPLY_DESKTOP:
            return {...state, mode: 'default'};
        default:
            return state
    }
}

export default deviceReducer;