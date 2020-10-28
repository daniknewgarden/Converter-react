//Request actions types
export const REQUEST_RATES = 'REQUEST_RATES';
export const RECEIVE_RATES = 'RECEIVE_RATES';

//Request actions
export const requestRates = () => {
    return {
        type: REQUEST_RATES
    }
}

export const receivedRates = (json) => {
    return {
        type: RECEIVE_RATES
    }
}

//TODO: add base currency argument to link
export const fetchRates = (params) => {
    return function (dispatch) {
        dispatch(requestRates());
        return fetch(`https://api.exchangeratesapi.io/latest?base=USD`)
        .then(
            (response) => response.json(),
            (error) => console.error('Problem with request :( :', error)
        )
        .then((json) => {
            dispatch(receivedRates(json));
        })
    }
}



