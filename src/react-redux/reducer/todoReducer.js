import {
  ADD_TASK,
  DELETE_TASK,
  DONE_TASK,
  EDIT_TASK,
} from "../actions/todoActions";

export const initialStateTodo = [];
let id = 1;

const todoReducer = (state = initialStateTodo, action) => {
  switch (action.type) {
    case ADD_TASK:
      return [...state, { id: id++, task: action.payload, done: false }];

    case DELETE_TASK:
      const index = state.findIndex((ele) => ele.id === action.payload);
      state.splice(index, 1);
      return [...state];

    case DONE_TASK:
      const taskIndex = state.findIndex((ele) => ele.id === action.payload);
      state.splice(taskIndex, 1, {
        ...state[taskIndex],
        done: !state[taskIndex].done,
      });
      return [...state];

    case EDIT_TASK:
      const Index = state.findIndex((ele) => ele.id === action.payload.id);
      state.splice(Index, 1, {
        ...state[Index],
        id: action.payload.id,
        task: action.payload.task,
      });
      return [...state];

    default:
      return state;
  }
};

export default todoReducer;
