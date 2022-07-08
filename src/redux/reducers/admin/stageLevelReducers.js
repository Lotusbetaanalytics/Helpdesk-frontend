import {
  CREATE_STAGE_LEVEL_FAIL,
  CREATE_STAGE_LEVEL_REQUEST,
  CREATE_STAGE_LEVEL_RESET,
  CREATE_STAGE_LEVEL_SUCCESS,
  GET_STAGES_LEVEL_FAIL,
  GET_STAGES_LEVEL_REQUEST,
  GET_STAGES_LEVEL_RESET,
  GET_STAGES_LEVEL_SUCCESS,
  GET_STAGE_LEVEL_FAIL,
  GET_STAGE_LEVEL_REQUEST,
  GET_STAGE_LEVEL_RESET,
  GET_STAGE_LEVEL_SUCCESS,
  DELETE_STAGE_LEVEL_FAIL,
  DELETE_STAGE_LEVEL_REQUEST,
  DELETE_STAGE_LEVEL_RESET,
  DELETE_STAGE_LEVEL_SUCCESS,
  UPDATE_STAGE_LEVEL_FAIL,
  UPDATE_STAGE_LEVEL_REQUEST,
  UPDATE_STAGE_LEVEL_RESET,
  UPDATE_STAGE_LEVEL_SUCCESS,
} from "../../constants/admin/stageLevelConstants";

export const createStageLevelReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_STAGE_LEVEL_REQUEST:
      return { loading: true };
    case CREATE_STAGE_LEVEL_SUCCESS:
      return { loading: false, success: true };
    case CREATE_STAGE_LEVEL_FAIL:
      return { loading: false, error: action.payload };
    case CREATE_STAGE_LEVEL_RESET:
      return {};
    default:
      return state;
  }
};

export const getAllStagesLevelReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_STAGES_LEVEL_REQUEST:
      return { loading: true };
    case GET_STAGES_LEVEL_SUCCESS:
      return { loading: false, success: true, stages: action.payload.data };
    case GET_STAGES_LEVEL_FAIL:
      return { loading: false, error: action.payload };
    case GET_STAGES_LEVEL_RESET:
      return {};
    default:
      return state;
  }
};

export const getStageLevelReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_STAGE_LEVEL_REQUEST:
      return { loading: true };
    case GET_STAGE_LEVEL_SUCCESS:
      return { loading: false, success: true, stages: action.payload.data };
    case GET_STAGE_LEVEL_FAIL:
      return { loading: false, error: action.payload };
    case GET_STAGE_LEVEL_RESET:
      return {};
    default:
      return state;
  }
};

export const deleteStageLevelReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_STAGE_LEVEL_REQUEST:
      return { loading: true };
    case DELETE_STAGE_LEVEL_SUCCESS:
      return { loading: false, success: true };
    case DELETE_STAGE_LEVEL_FAIL:
      return { loading: false, error: action.payload };
    case DELETE_STAGE_LEVEL_RESET:
      return {};
    default:
      return state;
  }
};

export const updateStageLevelReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_STAGE_LEVEL_REQUEST:
      return { loading: true };
    case UPDATE_STAGE_LEVEL_SUCCESS:
      return { loading: false, success: true };
    case UPDATE_STAGE_LEVEL_FAIL:
      return { loading: false, error: action.payload };
    case UPDATE_STAGE_LEVEL_RESET:
      return {};
    default:
      return state;
  }
};
