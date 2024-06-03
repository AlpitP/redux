import React from "react";
import { Provider } from "react-redux";
import DemoCounter from "./components/DemoCounter";
import DemoTodo from "./components/DemoTodo";
import DemoFetchData from "./components/DemoFetchData";
import store from "./store/store";

const CounterProvider = () => {
  return (
    <Provider store={store}>
      <DemoCounter />
      <DemoTodo />
      <DemoFetchData name={"React"} />
    </Provider>
  );
};

export default CounterProvider;
