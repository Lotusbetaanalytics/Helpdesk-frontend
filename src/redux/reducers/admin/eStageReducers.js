import {
  CREATE_ESTAGE_FAIL,
  CREATE_ESTAGE_REQUEST,
  CREATE_ESTAGE_RESET,
  CREATE_ESTAGE_SUCCESS,
  GET_ESTAGES_FAIL,
  GET_ESTAGES_REQUEST,
  GET_ESTAGES_RESET,
  GET_ESTAGES_SUCCESS,
  GET_ESTAGE_FAIL,
  GET_ESTAGE_REQUEST,
  GET_ESTAGE_RESET,
  GET_ESTAGE_SUCCESS,
  DELETE_ESTAGE_FAIL,
  DELETE_ESTAGE_REQUEST,
  DELETE_ESTAGE_RESET,
  DELETE_ESTAGE_SUCCESS,
  UPDATE_ESTAGE_FAIL,
  UPDATE_ESTAGE_REQUEST,
  UPDATE_ESTAGE_RESET,
  UPDATE_ESTAGE_SUCCESS,
} from "../../constants/admin/eStageConstants";

export const createEStageReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_ESTAGE_REQUEST:
      return { loading: true };
    case CREATE_ESTAGE_SUCCESS:
      return { loading: false, success: true };
    case CREATE_ESTAGE_FAIL:
      return { loading: false, error: action.payload };
    case CREATE_ESTAGE_RESET:
      return {};
    default:
      return state;
  }
};

export const getAllEStagesReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_ESTAGES_REQUEST:
      return { loading: true };
    case GET_ESTAGES_SUCCESS:
      return { loading: false, success: true, stages: action.payload.data };
    case GET_ESTAGES_FAIL:
      return { loading: false, error: action.payload };
    case GET_ESTAGES_RESET:
      return {};
    default:
      return state;
  }
};

export const getEStageReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_ESTAGE_REQUEST:
      return { loading: true };
    case GET_ESTAGE_SUCCESS:
      return { loading: false, success: true, stages: action.payload.data };
    case GET_ESTAGE_FAIL:
      return { loading: false, error: action.payload };
    case GET_ESTAGE_RESET:
      return {};
    default:
      return state;
  }
};

export const deleteEStageReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_ESTAGE_REQUEST:
      return { loading: true };
    case DELETE_ESTAGE_SUCCESS:
      return { loading: false, success: true };
    case DELETE_ESTAGE_FAIL:
      return { loading: false, error: action.payload };
    case DELETE_ESTAGE_RESET:
      return {};
    default:
      return state;
  }
};

export const updateEStageReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_ESTAGE_REQUEST:
      return { loading: true };
    case UPDATE_ESTAGE_SUCCESS:
      return { loading: false, success: true };
    case UPDATE_ESTAGE_FAIL:
      return { loading: false, error: action.payload };
    case UPDATE_ESTAGE_RESET:
      return {};
    default:
      return state;
  }
};
