//Request actions types
export const START_FETCH_RATES = 'START_FETCH_RATES';
export const FINISH_FETCH_RATES = 'FINISH_FETCH_RATES';
export const ERROR_FETCH_RATES = 'ERROR_FETCH_RATES';

//Request actions
export const startFetchRates = () => {
    return {
        type: START_FETCH_RATES
    }
}

export const finishFetchRates = (data) => {
    return {
        type: FINISH_FETCH_RATES,
        payload: data
    }
}

export const errorFetchRates = (error) => {
    return {
        type: ERROR_FETCH_RATES,
        payload: error
    }
}

//Async API request
//TODO: add base currency argument to link
export const fetchRates = () => async (dispatch) => {
  dispatch(startFetchRates());

  try {
    const data = await fetch(
      "https://api.exchangeratesapi.io/latest?base=USD"
    ).then((res) => res.json());
    dispatch(finishFetchRates(data));
  } catch (error) {
    dispatch(errorFetchRates(error));
  }
};
