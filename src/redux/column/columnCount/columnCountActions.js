//Columns count actions types
export const SET_COLUMN_COUNT = "SET_COLUMN_COUNT";

//Columns count actions
export const setColumnCount = (count) => {
  return {
    type: SET_COLUMN_COUNT,
    payload: count,
  };
};
