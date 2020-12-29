//Column mode actions types
export const APPLY_TWO_COLUMN = "APPLY_TWO_COLUMN";

//Column mode actions
export const applyTwoColumn = (bool) => {
  return {
    type: APPLY_TWO_COLUMN,
    payload: bool,
  };
};
