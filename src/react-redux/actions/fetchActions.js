import axios from "axios";

export const FETCH_DATA_REQUEST = "FETCH_DATA_REQUEST";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";

export const fetchDataRequest = () => ({
  type: FETCH_DATA_REQUEST,
});

export const fetchDataSuccess = (data) => ({
  type: FETCH_DATA_SUCCESS,
  payload: data,
});

export const fetchDataFailure = (error) => ({
  type: FETCH_DATA_FAILURE,
  payload: error,
});

export const fetchData = (url) => {
  return (dispatch) => {
    dispatch(fetchDataRequest());
    setTimeout(async () => {
      try {
        const response = await axios.get(url);
        dispatch(fetchDataSuccess(response.data));
      } catch (error) {
        dispatch(fetchDataFailure(error.message));
      }
    }, 2000);
  };
};

export const sendFromData = (obj) => {
  return (dispatch) => {
    dispatch(fetchDataRequest());
    setTimeout(async () => {
      const data = await axios.post(
        "https://jsonplaceholder.typicode.com/users",
        obj
      );
      dispatch(fetchDataSuccess(data.data));
      dispatch(fetchDataFailure(data.error));
    }, 2000);
  };
};
