import { createAction, createReducer } from "@reduxjs/toolkit";
const initialState = { tasks: [] };
let id = 1;
const addTodo = createAction("addTodo");
const deleteTodo = createAction("deleteTodo");
const doneTask = createAction("doneTask");

const todoReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addTodo, (state, action) => {
      state.tasks.push({ id: id++, value: action.payload });
    })
    .addCase(deleteTodo, (state, action) => {
      const index = state.tasks.findIndex((ele) => ele.id === action.payload);
      state.tasks.splice(index, 1);
    })
    .addCase(doneTask, (state, action) => {
      const index = state.tasks.findIndex((ele) => ele.id === action.payload);
      state.tasks.splice(index, 1, {
        ...state.tasks[index],
        done: !state.tasks[index].done,
      });
    });
});

// const todoSlice = createSlice({
//   initialState,
//   name: "todo",
//   reducers: {
//     addTodo: (state, action) => {
//       state.tasks.push({ id: id++, value: action.payload });
//     }
//     deleteTodo: (state, action) => {
//       const index = state.tasks.findIndex((ele) => ele.id === action.payload);
//       state.tasks.splice(index, 1);
//     },
//   },
// });
// export default todoSlice.reducer;
export { addTodo, deleteTodo, doneTask, todoReducer };
