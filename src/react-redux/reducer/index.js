import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import todoReducer from "./todoReducer";
import fetchReducer from "./fetchReducer";

export const rootReducer = combineReducers({
  counter: counterReducer,
  task: todoReducer,
  users: fetchReducer,
});
