import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  crudApiCall,
  deleteTaskData,
  sendTaskData,
  updateTaskData,
} from "../actions/fetchActions";
import { decrement, increment } from "../actions/counterAction";
import Model from "../Model";

let id = 201;
const Todo = () => {
  const [showModel, setShowModel] = useState(false);
  const [newTask, setNewTask] = useState("");
  // const [editTaskValue, setEditTaskValue] = useState("");
  const [edit, setEdit] = useState(false);
  const [editIndex, setEditIndex] = useState();

  const { todoData } = useSelector((state) => state.todoData.todoData);
  console.log(todoData);
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    if (newTask === "") {
      alert("Please Enter Task");
    } else {
      !edit
        ? dispatch(
            crudApiCall({
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
            crudApiCall({
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
      <button onClick={() => setShowModel(true)}>Show model</button>
      {showModel ? (
        <Model
          setShowModel={setShowModel}
          showModel={showModel}
          handleClose={() => setShowModel(false)}
        >
          <p>To-Do Model</p>
        </Model>
      ) : null}
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
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>

      {todoData.isLoading ? (
        <h3>Loading..</h3>
      ) : (
        todoData.data && (
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
                    crudApiCall({
                      name: "todoData",
                      url: "https://jsonplaceholder.typicode.com/todos",
                      method: "delete",
                      config: null,
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
