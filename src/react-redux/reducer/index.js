import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import createReducer from "./createReducer";
import todoReducer from "./todoReducer";

export const rootReducer = combineReducers({
  counter: counterReducer,
  task: todoReducer,
  todoData: createReducer("todoData"),
  userData: createReducer("userData"),

  // users: fetchReducer,
});
