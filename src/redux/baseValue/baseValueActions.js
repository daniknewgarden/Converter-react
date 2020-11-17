//Base currency value actions types
export const UPDATE_BASE_VALUE = "UPDATE_VALUE";

//Base currency value actions
export const updateBaseValue = (value) => {
  return {
    type: UPDATE_BASE_VALUE,
    payload: value,
  };
};
