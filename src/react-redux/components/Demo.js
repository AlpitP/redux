import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  crudApiCall,
  deleteTaskDataFailure,
  deleteTaskDataRequest,
  deleteTaskDataSuccess,
  deleteTodoDataFailure,
  deleteTodoDataRequest,
  deleteTodoDataSuccess,
  fetchTodoDataFailure,
  fetchTodoDataRequest,
  fetchTodoDataSuccess,
  updateTodoDataFailure,
  updateTodoDataRequest,
  updateTodoDataSuccess,
} from "../actions/fetchActions";

const Demo = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userData);
  const { postData } = useSelector((state) => state.postData);
  const clickHandler = () => {
    dispatch(
      crudApiCall({
        url: "https://jsonplaceholder.typicode.com/users",
        method: "get",
        request: fetchTodoDataRequest,
        success: fetchTodoDataSuccess,
        failure: fetchTodoDataFailure,
      })
    );
  };
  // const clickHandler1 = () => {
  //   dispatch(
  //     getApiCall({
  //       url: "https://jsonplaceholder.typicode.com/posts?id=1",
  //       method: "get",
  //       name: "postData",
  //     })
  //   );
  // };

  return (
    <>
      <h3>Redux Thunk</h3>
      <button onClick={clickHandler}>Get Users</button>
      {/* <button onClick={clickHandler1}>Get Post By Id</button> */}
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div style={{ width: "48%" }}>
          {userData.isLoading ? (
            <h1>Loading..</h1>
          ) : userData.error ? (
            <h1>{userData.error}</h1>
          ) : (
            userData.data &&
            userData.data.map((ele, index) => {
              return (
                <div
                  key={index}
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <li>{ele.name}</li>
                  <button
                    onClick={() =>
                      dispatch(
                        crudApiCall({
                          url: "https://jsonplaceholder.typicode.com/users",
                          method: "post",
                          data: ele,
                          request: updateTodoDataRequest,
                          success: updateTodoDataSuccess,
                          failure: updateTodoDataFailure,
                        })
                      )
                    }
                  >
                    Edit
                  </button>
                  <button
                    onClick={() =>
                      dispatch(
                        crudApiCall({
                          url: "https://jsonplaceholder.typicode.com/users",
                          method: "delete",
                          data: ele,
                          request: deleteTaskDataRequest,
                          success: deleteTaskDataSuccess,
                          failure: deleteTaskDataFailure,
                        })
                      )
                    }
                  >
                    Delete Task
                  </button>
                  <button
                    onClick={() =>
                      dispatch(
                        crudApiCall({
                          url: "https://jsonplaceholder.typicode.com/users",
                          method: "delete",
                          data: ele,
                          request: deleteTodoDataRequest,
                          success: deleteTodoDataSuccess,
                          failure: deleteTodoDataFailure,
                        })
                      )
                    }
                  >
                    Delete Todo
                  </button>
                </div>
              );
            })
          )}
        </div>

        <div style={{ width: "48%" }}>
          {postData.isLoading ? (
            <h1>Loading..</h1>
          ) : (
            postData.data &&
            postData.data.map((ele, index) => {
              return <li key={index}>{ele.body} </li>;
            })
          )}
        </div>
      </div>
    </>
  );
};

export default Demo;
