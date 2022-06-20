import {
  CREATE_STAGE_FAIL,
  CREATE_STAGE_REQUEST,
  CREATE_STAGE_RESET,
  CREATE_STAGE_SUCCESS,
  GET_STAGES_FAIL,
  GET_STAGES_REQUEST,
  GET_STAGES_RESET,
  GET_STAGES_SUCCESS,
  GET_STAGE_FAIL,
  GET_STAGE_REQUEST,
  GET_STAGE_RESET,
  GET_STAGE_SUCCESS,
  DELETE_STAGE_FAIL,
  DELETE_STAGE_REQUEST,
  DELETE_STAGE_RESET,
  DELETE_STAGE_SUCCESS,
  UPDATE_STAGE_FAIL,
  UPDATE_STAGE_REQUEST,
  UPDATE_STAGE_RESET,
  UPDATE_STAGE_SUCCESS,
} from "../../constants/admin/stageConstants";

export const createStageReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_STAGE_REQUEST:
      return { loading: true };
    case CREATE_STAGE_SUCCESS:
      return { loading: false, success: true };
    case CREATE_STAGE_FAIL:
      return { loading: false, error: action.payload };
    case CREATE_STAGE_RESET:
      return {};
    default:
      return state;
  }
};

export const getAllStagesReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_STAGES_REQUEST:
      return { loading: true };
    case GET_STAGES_SUCCESS:
      return { loading: false, success: true, stages: action.payload.data };
    case GET_STAGES_FAIL:
      return { loading: false, error: action.payload };
    case GET_STAGES_RESET:
      return {};
    default:
      return state;
  }
};

export const getStageReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_STAGE_REQUEST:
      return { loading: true };
    case GET_STAGE_SUCCESS:
      return { loading: false, success: true, stages: action.payload.data };
    case GET_STAGE_FAIL:
      return { loading: false, error: action.payload };
    case GET_STAGE_RESET:
      return {};
    default:
      return state;
  }
};

export const deleteStageReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_STAGE_REQUEST:
      return { loading: true };
    case DELETE_STAGE_SUCCESS:
      return { loading: false, success: true };
    case DELETE_STAGE_FAIL:
      return { loading: false, error: action.payload };
    case DELETE_STAGE_RESET:
      return {};
    default:
      return state;
  }
};

export const updateStageReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_STAGE_REQUEST:
      return { loading: true };
    case UPDATE_STAGE_SUCCESS:
      return { loading: false, success: true };
    case UPDATE_STAGE_FAIL:
      return { loading: false, error: action.payload };
    case UPDATE_STAGE_RESET:
      return {};
    default:
      return state;
  }
};
