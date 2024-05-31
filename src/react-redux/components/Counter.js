import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../actions/counterAction";

const thunkFunction = () => {
  return (dispatch) => {
    dispatch(increment());
  };
};

const Counter = () => {
  const { counter } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <p className="counter_title">Counter: {counter}</p>
      <button className="button" onClick={() => dispatch(thunkFunction())}>
        Increment
      </button>
      <button className="button" onClick={() => dispatch(decrement())}>
        Decrement
      </button>
    </div>
  );
};

// export default connect(
//   (state) => {
//     return {
//       task: state.task,
//       count: state.counter.counter,
//     };
//   },
//   (dispatch) => ({
//     count: () => dispatch(increment),
//   })
// )(Counter);
export default Counter;
