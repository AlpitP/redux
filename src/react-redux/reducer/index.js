import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import createReducer from "./createReducer";
import { todoReducer } from "../actions/fetchActions";

const counterAndFetch = combineReducers({
  todoData: createReducer("todoData"),
  counter: counterReducer,
});

export const rootReducer = combineReducers({
  counter: counterReducer,
  // task: todoReducer,
  todoData: counterAndFetch,
  // userData: createReducer("userData"),
  userData: todoReducer,
  postData: createReducer("postData"),
});
