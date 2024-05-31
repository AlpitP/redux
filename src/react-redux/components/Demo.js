import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../actions/fetchActions";

const Demo = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const clickHandler = () => {
    dispatch(fetchData("https://jsonplaceholder.typicode.com/users"));
  };
  const { data, isLoading, error } = users;
  return (
    <>
      <h3>Redux Thunk</h3>
      <button onClick={clickHandler}>Get Users</button>
      {/* <button onClick={() => dispatch(sendFromData({ name: "alpit" }))}>
        sendUser
      </button> */}
      {isLoading ? (
        <h1>Loading..</h1>
      ) : error ? (
        <h1>{error}</h1>
      ) : (
        data?.map((ele, index) => {
          return <li key={index}>{ele.name}</li>;
        })
      )}
    </>
  );
};

export default Demo;
