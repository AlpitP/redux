import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { apiCall, fetchData } from "../actions/fetchActions";

const Demo = () => {
  const dispatch = useDispatch();
  const { userData } = useSelector((state) => state.userData);
  const clickHandler = () => {
    dispatch(
      apiCall({
        name: "userData",
        url: "https://jsonplaceholder.typicode.com/users",
        method: "get",
      })
    );
  };

  return (
    <>
      <h3>Redux Thunk</h3>
      <button onClick={clickHandler}>Get Users</button>
      {/* <button onClick={() => dispatch(sendTaskData({ name: "alpit" }))}>
        sendUser
      </button> */}
      {userData?.isLoading ? (
        <h1>Loading..</h1>
      ) : userData?.error ? (
        <h1>{userData.error}</h1>
      ) : (
        userData?.data?.map((ele, index) => {
          return (
            <div
              key={index}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <li>{ele.name}</li>
            </div>
          );
        })
      )}
    </>
  );
};

export default Demo;
