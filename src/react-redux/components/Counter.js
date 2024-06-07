import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../actions/counterAction";
import { Helmet } from "react-helmet";
import Button from "../Button";
import Model from "../Model";

const thunkFunction = () => {
  return (dispatch) => {
    dispatch(increment());
  };
};

const Counter = () => {
  const [showModel, setShowModel] = useState(false);
  const { counter } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <Helmet>
        <title>Core Redux</title>
      </Helmet>
      <Button onClick={() => console.log("Button Clicked.")}>Click</Button>
      <button onClick={() => setShowModel(true)}>Show model</button>
      {showModel ? (
        <Model
          setShowModel={setShowModel}
          showModel={showModel}
          handleClose={() => setShowModel(false)}
        >
          <p>Counter Model</p>
        </Model>
      ) : null}
      <Button>Hello World</Button>
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
