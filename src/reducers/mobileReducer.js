const initialState = { m: false, hidden: "" };

export default (state = initialState, action) => {
  switch (action.type) {
    case "IS_MOBILE":
      return { ...state, m: action.payload };
    case "IS_HIDDEN":
      return { ...state, hidden: action.payload };
    default:
      return state;
  }
};
