import { combineReducers } from "redux";
import window from "./windowComposer";
import mobile from "./mobileComposer";

export default combineReducers({
  window,
  mobile
});
