import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, doneTask } from "../slices/todoSlice";

const DemoTodo = () => {
  const [task, setTask] = React.useState("");
  const changeHandler = (e) => {
    setTask(e.target.value);
  };

  const { tasks } = useSelector((state) => state.tasks);

  const dispatch = useDispatch();
  return (
    <>
      <br />
      <br />
      <h3>To Do List</h3>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setTask("");
        }}
      >
        <input
          type="text"
          name="task"
          onChange={(e) => changeHandler(e)}
          value={task}
        />
        <button onClick={() => dispatch(addTodo(task))}>Add</button>
      </form>
      {tasks?.map((ele) => {
        return (
          <div
            key={ele.id}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <li
              onClick={() => dispatch(doneTask(ele.id))}
              style={ele.done ? { textDecoration: "line-through" } : null}
            >
              {ele.value}
            </li>
            <button onClick={() => dispatch(deleteTodo(ele.id))}>Delete</button>
          </div>
        );
      })}
    </>
  );
};

export default DemoTodo;
