import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { thunk } from "redux-thunk";
import { rootReducer } from "../reducer";

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = (store) => {
  return (next) => {
    return (action) => {
      console.log({ Before: store.getState() });
      next(action);
      console.log({ After: store.getState() });
    };
  };
};

let store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk, middleware))
);
export default store;
