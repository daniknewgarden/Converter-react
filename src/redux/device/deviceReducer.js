import * as Actions from './deviceActions';

//Initial state
const defaultString = 'default'
const initialState = {
    mode: defaultString
}

const deviceReducer = (state = initialState, action) => {
    switch (action.type) {
        case Actions.APPLY_MOBILE:
            return Object.assign({}, { mode: 'mobile' } );
        case Actions.APPLY_TABLET:
            return Object.assign({}, { mode: 'tablet' } );
        case Actions.APPLY_DESKTOP:
            return Object.assign({}, { mode: 'default' } );
        default:
            return state
    }
}

export default deviceReducer;