import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  decrementAsync,
  decrementByAmount,
  fetch,
  increment,
  incrementAsync,
  incrementByAmount,
} from "../slices/counterSlice";
import { Helmet } from "react-helmet";

const DemoCounter = () => {
  const [amount, setAmount] = React.useState(2);
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <>
      <Helmet>
        <title>Counter</title>
      </Helmet>
      <h2>Redux Toolkit</h2>
      <div>{count}</div>
      <input
        type="number"
        name="amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        style={{ width: 50 }}
      />
      <br />
      <br />
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <br />
      <br />
      <button onClick={() => dispatch(incrementByAmount(Number(amount)))}>
        Increment By Amount
      </button>
      <button onClick={() => dispatch(decrementByAmount(Number(amount)))}>
        Decrement By Amount
      </button>
      <br />
      <br />
      <button onClick={() => dispatch(incrementAsync(Number(amount)))}>
        Increment Async
      </button>
      <button onClick={() => dispatch(decrementAsync(Number(amount)))}>
        Decrement Async
      </button>
      <button onClick={() => dispatch(fetch())}>fetch</button>
    </>
  );
};

export default DemoCounter;
