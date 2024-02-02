import { combineReducers } from "@reduxjs/toolkit";
import listReducer from "./Food";

export default combineReducers({
  lists: listReducer,
});
