import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  apiCall,
  deleteTaskData,
  sendTaskData,
  updateTaskData,
} from "../actions/fetchActions";

let id = 201;
const Todo = () => {
  const [newTask, setNewTask] = useState("");
  // const [editTaskValue, setEditTaskValue] = useState("");
  const [edit, setEdit] = useState(false);
  const [editIndex, setEditIndex] = useState();

  const { todoData } = useSelector((state) => state.todoData);
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    if (newTask === "") {
      alert("Please Enter Task");
    } else {
      !edit
        ? dispatch(
            sendTaskData({
              name: "todoData",
              url: "https://jsonplaceholder.typicode.com/todos",
              method: "post",
              config: {
                id: id,
                task: newTask,
              },
            })
          )
        : dispatch(
            updateTaskData({
              name: "todoData",
              url: "https://jsonplaceholder.typicode.com/todos",
              method: "put",
              config: {
                id: id,
                task: newTask,
              },
            })
          );
      setNewTask("");
      setEdit(false);
    }
  };

  const editClick = (e, id) => {
    setEdit(true);
    setEditIndex(id);
    setNewTask(todoData.data.task);
  };

  // const updateClick = (e, a) => {
  //   if (newTask === "") {
  //     alert("Please Enter Task.");
  //   } else {
  //     dispatch(updateTaskData({ id: 201, task: newTask }));
  //     setEdit(false);
  //     // dispatch(editTask(editIndex, editTaskValue));
  //   }
  // };

  return (
    <>
      <h3>To Do List</h3>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          name="task"
          id="task"
          placeholder="Enter Task"
          onChange={(e) => setNewTask(e.target.value)}
          value={newTask}
        />
        <button>{!edit ? "Click" : "Update"}</button>
      </form>
      {todoData?.isLoading ? (
        <h3>Loading..</h3>
      ) : (
        todoData?.data && (
          <>
            <li>
              {todoData.data.task}

              {!edit ? (
                <button onClick={(e) => editClick(e, todoData?.data?.id)}>
                  Edit
                </button>
              ) : null}
              <button
                onClick={() => {
                  dispatch(
                    deleteTaskData({
                      name: "todoData",
                      url: "https://jsonplaceholder.typicode.com/todos",
                      method: "delete",
                      config: 201,
                    })
                  );
                  if (todoData.data.id === editIndex) {
                    setEdit(false);
                    setNewTask("");
                  }
                }}
              >
                Delete
              </button>
            </li>
          </>
        )
      )}
      {/* {tasks?.map((ele, index) => {
        const { task, id } = ele;
        return (
          <div
            key={index}
            style={{ display: "flex", justifyContent: "center" }}
          >
            {edit && ele.id === editIndex ? (
              <input
                type="text"
                value={editTaskValue}
                onChange={(e) => setEditTaskValue(e.target.value)}
              />
            ) : (
              <li
                onClick={() => dispatch(doneTask(id))}
                style={{ textDecoration: ele.done ? "line-through" : null }}
              >
                {task}
              </li>
            )}

            <button
              onClick={(e) => {
                !edit || ele.id !== editIndex
                  ? editClick(e, id)
                  : updateClick(e, id);
              }}
            >
              {!edit || ele.id !== editIndex ? "Edit" : "Update"}
            </button>
            <button onClick={() => dispatch(deleteTask(id))}>Delete</button>
          </div>
        );
      })} */}
    </>
  );
};

export default Todo;
