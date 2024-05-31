import { addTask, deleteTask, doneTask } from "../actions";

const todoDispatch = (dispatch) => ({
  addTask: (value) => dispatch(addTask(value)),
  deleteTask: (id) => dispatch(deleteTask(id)),
  doneTask: (id) => dispatch(doneTask(id)),
});
export default todoDispatch;
