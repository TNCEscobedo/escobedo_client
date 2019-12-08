export const selectTab = name => dispatch => {
  dispatch({ type: "SELECT_TAB", payload: name });
};
