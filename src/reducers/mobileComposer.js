const initialState = false;

export default (state = initialState, action) => {
  switch (action.type) {
    case "IS_MOBILE":
      return action.payload;
    default:
      return state;
  }
};
