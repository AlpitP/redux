export const increment = () => {
  return {
    type: "INCREMENT",
  };
};
export const decrement = () => {
  return {
    type: "DECREMENT",
  };
};
export const addTask = (task) => ({
  type: "ADD_TASK",
  payload: task,
});
export const deleteTask = (id) => ({
  type: "DELETE_TASK",
  payload: id,
});
export const editTask = (id, task) => ({
  type: "EDIT_TASK",
  payload: { id: id, task: task },
});
export const doneTask = (id) => ({
  type: "DONE_TASK",
  payload: id,
});

export const fetchDataRequest = () => ({
  type: "FETCH_DATA_REQUEST",
});

export const fetchDataSuccess = (data) => ({
  type: "FETCH_DATA_SUCCESS",
  payload: data,
});

export const fetchDataFailure = (error) => ({
  type: "FETCH_DATA_FAILURE",
  payload: error,
});
