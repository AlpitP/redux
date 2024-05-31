import { combineSlices, configureStore } from "@reduxjs/toolkit";
import counterReducer from "../slices/counterSlice";
import { fetchApi } from "../slices/fetchDataSlice";
import { todoReducer } from "../slices/todoSlice";

const newMiddleware = (store) => (next) => (action) => {
  console.log({ "Before:": store.getState() });
  next(action);
  console.log({ "After:": store.getState() });
};

const rootReducer = combineSlices({
  counter: counterReducer,
  tasks: todoReducer,
  [fetchApi.reducerPath]: fetchApi.reducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(fetchApi.middleware, newMiddleware),
});

export default store;
