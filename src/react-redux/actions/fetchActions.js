import axios from "axios";

export const FETCH_TODO_DATA_REQUEST = "FETCH_TODO_DATA_REQUEST";
export const FETCH_TODO_DATA_SUCCESS = "FETCH_TODO_DATA_SUCCESS";
export const FETCH_TODO_DATA_FAILURE = "FETCH_TODO_DATA_FAILURE";

export const DELETE_TODO_DATA_REQUEST = "DELETE_TODO_DATA_REQUEST";
export const DELETE_TODO_DATA_SUCCESS = "DELETE_TODO_DATA_SUCCESS";
export const DELETE_TODO_DATA_FAILURE = "DELETE_TODO_DATA_FAILURE";

export const DELETE_TASK_DATA_REQUEST = "DELETE_TASK_DATA_REQUEST";
export const DELETE_TASK_DATA_SUCCESS = "DELETE_TASK_DATA_SUCCESS";
export const DELETE_TASK_DATA_FAILURE = "DELETE_TASK_DATA_FAILURE";

export const CREATE_TODO_DATA_REQUEST = "CREATE_DATA_REQUEST";
export const CREATE_TODO_DATA_SUCCESS = "CREATE_TODO_DATA_SUCCESS";
export const CREATE_TODO_DATA_FAILURE = "CREATE_TODO_DATA_FAILURE";

export const UPDATE_TODO_DATA_REQUEST = "UPDATE_TODO_DATA_REQUEST";
export const UPDATE_TODO_DATA_SUCCESS = "UPDATE_TODO_DATA_SUCCESS";
export const UPDATE_TODO_DATA_FAILURE = "UPDATE_TODO_DATA_FAILURE";

export const fetchTodoDataRequest = () => ({
  type: FETCH_TODO_DATA_REQUEST,
});
export const updateTodoDataRequest = () => ({
  type: UPDATE_TODO_DATA_REQUEST,
});
export const deleteTodoDataRequest = () => ({
  type: DELETE_TODO_DATA_REQUEST,
});

export const deleteTaskDataRequest = () => ({
  type: DELETE_TASK_DATA_REQUEST,
});

export const createTodoDataRequest = () => ({
  type: CREATE_TODO_DATA_REQUEST,
});

export const fetchTodoDataSuccess = (data) => ({
  type: FETCH_TODO_DATA_SUCCESS,
  payload: data,
});
export const deleteTodoDataSuccess = (data) => ({
  type: DELETE_TODO_DATA_SUCCESS,
  payload: data,
});
export const deleteTaskDataSuccess = (data) => ({
  type: DELETE_TASK_DATA_SUCCESS,
  payload: data,
});
export const createTodoDataSuccess = (data) => ({
  type: CREATE_TODO_DATA_SUCCESS,
  payload: data,
});
export const updateTodoDataSuccess = (data) => ({
  type: UPDATE_TODO_DATA_SUCCESS,
  payload: data,
});

export const fetchTodoDataFailure = (error) => ({
  type: FETCH_TODO_DATA_FAILURE,
  payload: error,
});
export const deleteTodoDataFailure = (error) => ({
  type: DELETE_TODO_DATA_FAILURE,
  payload: error,
});
export const deleteTaskDataFailure = (error) => ({
  type: DELETE_TASK_DATA_FAILURE,
  payload: error,
});
export const createTodoDataFailure = (error) => ({
  type: CREATE_TODO_DATA_FAILURE,
  payload: error,
});
export const updateTodoDataFailure = (error) => ({
  type: UPDATE_TODO_DATA_FAILURE,
  payload: error,
});

export const getApiCall = (url) => {
  return async (dispatch) => {
    dispatch(fetchTodoDataRequest());
    try {
      const response = await axios.get(url);
      dispatch(fetchTodoDataSuccess(response.data));
    } catch (error) {
      dispatch(fetchTodoDataFailure(error.message));
    }
  };
};

export const crudApiCall = ({
  url,
  method,
  data,
  request,
  success,
  failure,
}) => {
  return async (dispatch) => {
    dispatch(request());
    try {
      const response = await axios({
        url: url,
        method: method,
        data: data,
      });
      dispatch(success(response.data));
    } catch (error) {
      dispatch(failure(error.message));
    }
  };
};
// export const crudApiCall = ({ url, method, data }) => {
//   return async (dispatch) => {
//     dispatch(
//       method === "post"
//         ? createTodoDataRequest()
//         : method === "delete"
//         ? deleteTodoDataRequest()
//         : method === "put" || method === "patch"
//         ? updateTodoDataRequest()
//         : fetchTodoDataRequest()
//     );
//     try {
//       const response = await axios({
//         url: url,
//         method: method,
//         data: data,
//       });
//       dispatch(
//         method === "post"
//           ? createTodoDataSuccess(response.data)
//           : method === "delete"
//           ? deleteTodoDataSuccess(response.data)
//           : method === "put" || method === "patch"
//           ? updateTodoDataSuccess(response.data)
//           : fetchTodoDataSuccess(response.data)
//       );
//       // dispatch(getApiCall(url));
//     } catch (error) {
//       dispatch(
//         method === "post"
//           ? createTodoDataFailure(error.message)
//           : method === "delete"
//           ? deleteTodoDataFailure(error.message)
//           : method === "put" || method === "patch"
//           ? updateTodoDataFailure(error.message)
//           : fetchTodoDataFailure(error.message)
//       );
//     }
//   };
// };

// export const updateApiCall = ({ url, method, data, name }) => {
//   return async (dispatch) => {
//     dispatch(updateDataRequest(name));
//     try {
//       await axios({
//         url: url,
//         method: method,
//         data: data,
//       });
//       dispatch(getApiCall({ name, url }));
//     } catch (error) {
//       dispatch(apiFailure(error.message, name));
//     }
//   };
// };

// export const createApiCall = ({ url, method, data, name }) => {
//   return async (dispatch) => {
//     dispatch(createDataRequest(name));
//     try {
//       await axios({
//         url: url,
//         method: method,
//         data: data,
//       });
//       dispatch(getApiCall({ name, url }));
//     } catch (error) {
//       dispatch(apiFailure(error.message, name));
//     }
//   };
// };

// export const deleteApiCall = ({ url, method, data, name }) => {
//   return async (dispatch) => {
//     dispatch(deleteDataRequest(name));
//     try {
//       await axios({
//         url: url,
//         method: method,
//         data: data,
//       });
//       dispatch(getApiCall({ name, url }));
//     } catch (error) {
//       dispatch(apiFailure(error.message, name));
//     }
//   };
// };

const initialState = {
  data: null,
  error: null,
  isLoading: false,
  isDeleting: false,
  isDeletingTask: false,
  isUpdating: false,
  isCreating: false,
};

export const todoReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case FETCH_TODO_DATA_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_TODO_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
      };
    case FETCH_TODO_DATA_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };

    case UPDATE_TODO_DATA_REQUEST:
      return {
        ...state,
        isUpdating: true,
      };
    case UPDATE_TODO_DATA_SUCCESS:
      return {
        ...state,
        isUpdating: false,
        data: action.payload,
      };
    case UPDATE_TODO_DATA_FAILURE:
      return {
        ...state,
        isUpdating: false,
        error: action.payload,
      };

    case DELETE_TODO_DATA_REQUEST:
      return {
        ...state,
        isDeleting: true,
      };
    case DELETE_TODO_DATA_SUCCESS:
      return {
        ...state,
        isDeleting: false,
        data: action.payload,
      };
    case DELETE_TODO_DATA_FAILURE:
      return {
        ...state,
        error: action.payload,
        isDeleting: false,
      };

    case DELETE_TASK_DATA_REQUEST:
      return {
        ...state,
        isDeletingTask: true,
      };
    case DELETE_TASK_DATA_SUCCESS:
      return {
        ...state,
        isDeletingTask: false,
        data: action.payload,
      };
    case DELETE_TASK_DATA_FAILURE:
      return {
        ...state,
        error: action.payload,
        isDeletingTask: false,
      };

    case CREATE_TODO_DATA_REQUEST:
      return {
        ...state,
        isCreating: true,
      };
    case CREATE_TODO_DATA_SUCCESS:
      return {
        ...state,
        isCreating: false,
        data: action.payload,
      };
    case CREATE_TODO_DATA_FAILURE:
      return {
        ...state,
        error: action.payload,
        isCreating: false,
      };

    default:
      return state;
  }
};

// export const fetchData = ({ name, url }) => {
//   return async (dispatch) => {
//     dispatch(fetchDataRequest(name));
//     try {
//       const response = await axios.get(url);
//       dispatch(fetchDataSuccess(response.data, name));
//     } catch (error) {
//       dispatch(apiFailure(error.message, name));
//     }
//   };
// };

// export const sendTaskData = ({ name, url, config }) => {
//   return async (dispatch) => {
//     dispatch(fetchDataRequest(name));
//     try {
//       const data = await axios.post(url, config);
//       dispatch(fetchDataSuccess(data.data, name));
//     } catch (error) {
//       dispatch(apiFailure(error.message, name));
//     }
//   };
// };

// export const updateTaskData = ({ name, url, config }) => {
//   return async (dispatch) => {
//     dispatch(fetchDataRequest(name));
//     dispatch(fetchDataSuccess(config, name));
//     try {
//       const data = await axios.put(url, config);
//       console.log(data);
//     } catch (error) {
//       console.log(error);
//       dispatch(apiFailure(error.message, name));
//     }
//   };
// };
// export const deleteDataSuccess = (data, name) => ({
//   type: FETCH_TODO_DATA_SUCCESS,
//   payload: data,
//   name: name,
// });
// export const DELETE_DATA_SUCCESS = "DELETE_DATA_SUCCESS";
// export const deleteTaskData = ({ name, url, config }) => {
//   return async (dispatch) => {
//     dispatch(fetchDataRequest(name));
//     dispatch(deleteDataSuccess(config, name));
//     try {
//       const data = await axios.delete(url, config);
//       console.log(data);
//     } catch (error) {
//       dispatch(apiFailure(error.message, name));
//     }
//   };
// };
