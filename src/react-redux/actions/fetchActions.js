import axios from "axios";

export const FETCH_DATA_REQUEST = "FETCH_DATA_REQUEST";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";
export const DELETE_DATA = "DELETE_DATA";

export const fetchDataRequest = (name) => ({
  type: FETCH_DATA_REQUEST,
  name: name,
});

export const fetchDataSuccess = (data, name) => ({
  type: FETCH_DATA_SUCCESS,
  payload: data,
  name: name,
});

export const fetchDataFailure = (error, name) => ({
  type: FETCH_DATA_FAILURE,
  payload: error,
  name: name,
});

export const deleteData = (id, name) => ({
  type: DELETE_DATA,
  payload: id,
  name: name,
});

// common function to call different api methods.('GET','POST','DELETE','PUT','PATCH')
export const apiCall = ({ name, url, method, data }) => {
  return async (dispatch) => {
    dispatch(fetchDataRequest(name));
    try {
      const response = await axios({
        url: url,
        method: method,
        data: data,
      });
      dispatch(fetchDataSuccess(response.data, name));
    } catch (error) {
      dispatch(fetchDataFailure(error.message, name));
    }
  };
};

export const fetchData = ({ name, url }) => {
  return async (dispatch) => {
    dispatch(fetchDataRequest(name));
    try {
      const response = await axios.get(url);
      dispatch(fetchDataSuccess(response.data, name));
    } catch (error) {
      dispatch(fetchDataFailure(error.message, name));
    }
  };
};

export const sendTaskData = ({ name, url, config }) => {
  return async (dispatch) => {
    dispatch(fetchDataRequest(name));
    try {
      const data = await axios.post(url, config);
      dispatch(fetchDataSuccess(data.data, name));
    } catch (error) {
      dispatch(fetchDataFailure(error.message, name));
    }
  };
};

export const updateTaskData = ({ name, url, config }) => {
  return async (dispatch) => {
    dispatch(fetchDataRequest(name));
    dispatch(fetchDataSuccess(config, name));
    try {
      const data = await axios.put(url, config);
      console.log(data);
    } catch (error) {
      console.log(error);
      dispatch(fetchDataFailure(error.message, name));
    }
  };
};

export const deleteTaskData = ({ name, url, config }) => {
  return async (dispatch) => {
    dispatch(fetchDataRequest(name));
    dispatch(deleteData(config, name));
    try {
      const data = await axios.delete(url, config);
      console.log(data);
    } catch (error) {
      dispatch(fetchDataFailure(error.message, name));
    }
  };
};
