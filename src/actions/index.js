export const getWidth = width => dispatch => {
  dispatch({ type: "GET_WIDTH", payload: width });
};

export const getHeigth = heigth => dispatch => {
  dispatch({ type: "GET_HEIGTH", payload: heigth });
};

export const isMobile = width => dispatch => {
  let mobile;
  if (width < 500) {
    mobile = true;
  } else {
    mobile = false;
  }
  dispatch({ type: "IS_MOBILE", payload: mobile });
};
