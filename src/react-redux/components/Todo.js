import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTask,
  deleteTask,
  doneTask,
  editTask,
} from "../actions/todoActions";

const Todo = () => {
  const [newTask, setNewTask] = useState("");
  const [editTaskValue, setEditTaskValue] = useState("");
  const [edit, setEdit] = useState(false);
  const [editIndex, setEditIndex] = useState();

  const tasks = useSelector((state) => state.task);
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    if (newTask === "") {
      alert("Please Enter Task");
    } else {
      setNewTask("");
      setEdit(false);
      dispatch(addTask(newTask));
    }
  };

  const editClick = (e, a) => {
    setEdit(true);
    const editTaskValue = tasks.find((ele) => ele.id === a);
    setEditTaskValue(editTaskValue.task);
    setEditIndex(editTaskValue.id);
  };

  const updateClick = (e, a) => {
    if (editTaskValue === "") {
      alert("Please Enter Task.");
    } else {
      setEdit(false);
      dispatch(editTask(editIndex, editTaskValue));
    }
  };

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
        <button>Click</button>
      </form>
      {tasks?.map((ele, index) => {
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
      })}
    </>
  );
};

export default Todo;
