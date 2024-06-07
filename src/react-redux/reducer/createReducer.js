import {
  DELETE_TODO_DATA_SUCCESS,
  FETCH_TODO_DATA_FAILURE,
  FETCH_TODO_DATA_REQUEST,
  FETCH_TODO_DATA_SUCCESS,
} from "../actions/fetchActions";

const createReducer = (reducerName) => {
  const initialState = {
    [reducerName]: {
      data: null,
      isLoading: false,
      error: null,
    },
  };

  return (state = initialState, action) => {
    if (
      action.type === FETCH_TODO_DATA_REQUEST &&
      action.name === reducerName
    ) {
      return {
        ...state,
        [action.name]: { ...state[action.name], isLoading: true },
      };
    } else if (
      action.type === FETCH_TODO_DATA_SUCCESS &&
      action.name === reducerName
    ) {
      return {
        ...state,
        [action.name]: {
          ...state[action.name],
          data: action.payload,
          isLoading: false,
        },
      };
    } else if (
      action.type === FETCH_TODO_DATA_FAILURE &&
      action.name === reducerName
    ) {
      return {
        ...state,
        [action.name]: {
          ...state[action.name],
          error: action.payload,
          isLoading: false,
        },
      };
    } else if (
      action.type === DELETE_TODO_DATA_SUCCESS &&
      action.name === reducerName
    ) {
      return {
        ...state,
        [action.name]: {},
      };
    } else {
      return state;
    }

    // switch (action.type,action.name) {
    //   case FETCH_DATA_REQUEST&&name:
    //     return {
    //       ...state,
    //       [action.name]: { ...state[action.name], loading: true },
    //     };
    //   case FETCH_DATA_SUCCESS&&entity:
    //     return {
    //       ...state,
    //       [action.name]: {
    //         ...state[action.name],
    //         data: action.payload,
    //         loading: false,
    //       },
    //     };
    //   case FETCH_DATA_FAILURE&&entity:
    //     return {
    //       ...state,
    //       [action.name]: {
    //         ...state[action.name],
    //         error: action.payload,
    //         loading: false,
    //       },
    //     };
    //   default:
    //     return state;
    // }
  };
};

export default createReducer;
