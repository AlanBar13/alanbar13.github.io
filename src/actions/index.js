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

export const isHidden = param => dispatch => {
  dispatch({ type: "IS_HIDDEN", payload: param });
};

export const lanSelect = lan => dispatch => {
  dispatch({ type: "LAN_SELECT", payload: lan });
};
