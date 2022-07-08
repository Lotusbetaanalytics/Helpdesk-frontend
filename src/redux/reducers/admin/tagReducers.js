import {
  CREATE_TAG_FAIL,
  CREATE_TAG_REQUEST,
  CREATE_TAG_RESET,
  CREATE_TAG_SUCCESS,
  GET_TAG_FAIL,
  GET_TAG_REQUEST,
  GET_TAG_RESET,
  GET_TAG_SUCCESS,
  DELETE_TAG_FAIL,
  DELETE_TAG_REQUEST,
  DELETE_TAG_RESET,
  DELETE_TAG_SUCCESS,
  UPDATE_TAG_FAIL,
  UPDATE_TAG_REQUEST,
  UPDATE_TAG_RESET,
  UPDATE_TAG_SUCCESS,
} from "../../constants/admin/tagConstants";

export const createTagReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_TAG_REQUEST:
      return { loading: true };
    case CREATE_TAG_SUCCESS:
      return { loading: false, success: true };
    case CREATE_TAG_FAIL:
      return { loading: false, error: action.payload };
    case CREATE_TAG_RESET:
      return {};
    default:
      return state;
  }
};

export const getTagReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_TAG_REQUEST:
      return { loading: true };
    case GET_TAG_SUCCESS:
      return { loading: false, success: true, tags: action.payload.data };
    case GET_TAG_FAIL:
      return { loading: false, error: action.payload };
    case GET_TAG_RESET:
      return {};
    default:
      return state;
  }
};

export const deleteTagReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_TAG_REQUEST:
      return { loading: true };
    case DELETE_TAG_SUCCESS:
      return { loading: false, success: true };
    case DELETE_TAG_FAIL:
      return { loading: false, error: action.payload };
    case DELETE_TAG_RESET:
      return {};
    default:
      return state;
  }
};

export const updateTagReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_TAG_REQUEST:
      return { loading: true };
    case UPDATE_TAG_SUCCESS:
      return { loading: false, success: true };
    case UPDATE_TAG_FAIL:
      return { loading: false, error: action.payload };
    case UPDATE_TAG_RESET:
      return {};
    default:
      return state;
  }
};
