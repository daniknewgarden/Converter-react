//Request actions types
export const START_FETCH_RATES = "START_FETCH_RATES";
export const FINISH_FETCH_RATES = "FINISH_FETCH_RATES";
export const PUSH_RATES_ARRAY = "PUSH_ARRAY";
export const ERROR_FETCH_RATES = "ERROR_FETCH_RATES";

//Request actions
export const startFetchRates = () => {
  return {
    type: START_FETCH_RATES,
  };
};

export const finishFetchRates = (data) => {
  return {
    type: FINISH_FETCH_RATES,
    payload: data,
  };
};

export const errorFetchRates = (error) => {
  return {
    type: ERROR_FETCH_RATES,
    payload: error,
  };
};

export const pushRatesArray = (arr) => {
  return {
    type: PUSH_RATES_ARRAY,
    payload: arr,
  };
};

//Async API request

//Convert obj to array
const convertObj = (obj) => {
  const arr = [];
  for (const key in obj) {
    arr.push({ [key]: obj[key] });
  }
  return arr;
};

export const fetchRates = (base = "USD") => async (dispatch) => {
  dispatch(startFetchRates());

  try {
    const data = await fetch(
      `https://api.exchangeratesapi.io/latest?base=${base}`
    ).then((res) => res.json());
    dispatch(finishFetchRates(data));

    const arr = convertObj(data.rates);
    dispatch(pushRatesArray(arr));
  } catch (error) {
    dispatch(errorFetchRates(error));
  }
};
