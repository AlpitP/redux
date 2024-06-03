import {
  DELETE_DATA,
  FETCH_DATA_FAILURE,
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
} from "../actions/fetchActions";

const fetchReducer = (state = {}, action) => {
  const { name, payload, type } = action;

  switch (type) {
    case FETCH_DATA_REQUEST:
      return { ...state, [name]: { ...state[name], isLoading: true } };

    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        [name]: {
          ...state[name],
          isLoading: false,
          data: payload,
        },
      };

    case FETCH_DATA_FAILURE:
      return {
        ...state,
        [name]: {
          ...state[name],
          isLoading: false,
          error: payload,
        },
      };

    case DELETE_DATA:
      if (state[name].data?.id === payload) {
        return { ...state, [name]: {} };
      } else {
        return {
          ...state,
          [name]: {
            ...state[name],
            isLoading: false,
            data: payload,
          },
        };
      }
    default:
      return state;
  }
};

export default fetchReducer;
