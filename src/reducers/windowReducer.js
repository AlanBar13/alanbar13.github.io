const initialState = { width: 0, heigth: 0 };
export default (state = initialState, action) => {
  switch (action.type) {
    case "GET_WIDTH":
      return { ...state, width: action.payload };
    case "GET_HEIGTH":
      return { ...state, heigth: action.payload };
    default:
      return state;
  }
};
