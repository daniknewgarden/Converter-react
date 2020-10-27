import * as Actions from './fullscreenActions'

//Initial state
const initialState = {
    fullscreen: false
}

const fullscreenReducer = (state = initialState, action) => {
    switch (action.type) {
        case Actions.APPLY_FULLSCREEN:
            return Object.assign({}, { fullscreen: action.payload } );
        default:
            return initialState;
    }
}

export default fullscreenReducer;
