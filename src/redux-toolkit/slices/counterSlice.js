import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  count: 0,
  data: [],
};
const counterSlice = createSlice({
  name: "counter",
  initialState,
  // reducers: (create) => ({
  //   increment: create.reducer((state) => {
  //     state.count += 1;
  //   }),
  //   decrement: create.reducer((state) => {
  //     state.count -= 1;
  //   }),
  //   incrementByAmount: create.preparedReducer(
  //     (amount) => {
  //       return { payload: { id: id++, amount: amount } };
  //     },
  //     (state, action) => {
  //       console.log(action);
  //       state.count += action.payload.amount;
  //     }
  //   ),
  //   decrementByAmount: create.preparedReducer(
  //     (amount) => {
  //       return { payload: { id: id++, amount: amount } };
  //     },
  //     (state, action) => {
  //       state.count -= action.payload.amount;
  //     }
  //   ),
  // }),
  reducers: {
    increment: (state, action) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload;
    },
    decrementByAmount: (state, action) => {
      state.count -= action.payload;
    },
    fetchData: (state, action) => {
      state.data.push(action.payload.data);
    },
  },
});

export const {
  increment,
  decrement,
  incrementByAmount,
  decrementByAmount,
  fetchData,
} = counterSlice.actions;

export const incrementAsync = (amount) => {
  return (dispatch, getState) => {
    const { counter, tasks } = getState();
    console.log(counter.count);
    console.log(tasks.tasks);
    setTimeout(() => {
      dispatch(incrementByAmount(amount));
    }, 1000);
  };
};

export const fetch = () => {
  return async (dispatch) => {
    const data = await axios.get("https://jsonplaceholder.typicode.com/users");
    dispatch(fetchData(data));
  };
};
export const decrementAsync = (amount) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(decrementByAmount(amount));
    }, 1000);
  };
};

export default counterSlice.reducer;
