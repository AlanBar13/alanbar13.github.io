import { combineReducers } from "redux";
import window from "./windowReducer";
import mobile from "./mobileReducer";
import language from "./langReducer";

export default combineReducers({
  window,
  mobile,
  language
});
