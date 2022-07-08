import {
  CREATE_PRIORITY_FAIL,
  CREATE_PRIORITY_REQUEST,
  CREATE_PRIORITY_RESET,
  CREATE_PRIORITY_SUCCESS,
  GET_PRIORITYS_FAIL,
  GET_PRIORITYS_REQUEST,
  GET_PRIORITYS_RESET,
  GET_PRIORITYS_SUCCESS,
  GET_PRIORITY_FAIL,
  GET_PRIORITY_REQUEST,
  GET_PRIORITY_RESET,
  GET_PRIORITY_SUCCESS,
  DELETE_PRIORITY_FAIL,
  DELETE_PRIORITY_REQUEST,
  DELETE_PRIORITY_RESET,
  DELETE_PRIORITY_SUCCESS,
  UPDATE_PRIORITY_FAIL,
  UPDATE_PRIORITY_REQUEST,
  UPDATE_PRIORITY_RESET,
  UPDATE_PRIORITY_SUCCESS,
} from "../../constants/admin/priorityConstants";

export const createPriorityReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_PRIORITY_REQUEST:
      return { loading: true };
    case CREATE_PRIORITY_SUCCESS:
      return { loading: false, success: true };
    case CREATE_PRIORITY_FAIL:
      return { loading: false, error: action.payload };
    case CREATE_PRIORITY_RESET:
      return {};
    default:
      return state;
  }
};

export const getAllPrioritysReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_PRIORITYS_REQUEST:
      return { loading: true };
    case GET_PRIORITYS_SUCCESS:
      return { loading: false, success: true, prioritys: action.payload.data };
    case GET_PRIORITYS_FAIL:
      return { loading: false, error: action.payload };
    case GET_PRIORITYS_RESET:
      return {};
    default:
      return state;
  }
};

export const getPriorityReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_PRIORITY_REQUEST:
      return { loading: true };
    case GET_PRIORITY_SUCCESS:
      return { loading: false, success: true, prioritys: action.payload.data };
    case GET_PRIORITY_FAIL:
      return { loading: false, error: action.payload };
    case GET_PRIORITY_RESET:
      return {};
    default:
      return state;
  }
};

export const deletePriorityReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_PRIORITY_REQUEST:
      return { loading: true };
    case DELETE_PRIORITY_SUCCESS:
      return { loading: false, success: true };
    case DELETE_PRIORITY_FAIL:
      return { loading: false, error: action.payload };
    case DELETE_PRIORITY_RESET:
      return {};
    default:
      return state;
  }
};

export const updatePriorityReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_PRIORITY_REQUEST:
      return { loading: true };
    case UPDATE_PRIORITY_SUCCESS:
      return { loading: false, success: true };
    case UPDATE_PRIORITY_FAIL:
      return { loading: false, error: action.payload };
    case UPDATE_PRIORITY_RESET:
      return {};
    default:
      return state;
  }
};
