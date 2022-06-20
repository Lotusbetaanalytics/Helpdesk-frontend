import {
  CREATE_TEAM_FAIL,
  CREATE_TEAM_REQUEST,
  CREATE_TEAM_RESET,
  CREATE_TEAM_SUCCESS,
  GET_TEAMS_FAIL,
  GET_TEAMS_REQUEST,
  GET_TEAMS_RESET,
  GET_TEAMS_SUCCESS,
  GET_TEAM_FAIL,
  GET_TEAM_REQUEST,
  GET_TEAM_RESET,
  GET_TEAM_SUCCESS,
  DELETE_TEAM_FAIL,
  DELETE_TEAM_REQUEST,
  DELETE_TEAM_RESET,
  DELETE_TEAM_SUCCESS,
  UPDATE_TEAM_FAIL,
  UPDATE_TEAM_REQUEST,
  UPDATE_TEAM_RESET,
  UPDATE_TEAM_SUCCESS,
} from "../../constants/admin/teamConstants";

export const createTeamReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_TEAM_REQUEST:
      return { loading: true };
    case CREATE_TEAM_SUCCESS:
      return { loading: false, success: true };
    case CREATE_TEAM_FAIL:
      return { loading: false, error: action.payload };
    case CREATE_TEAM_RESET:
      return {};
    default:
      return state;
  }
};

export const getAllTeamsReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_TEAMS_REQUEST:
      return { loading: true };
    case GET_TEAMS_SUCCESS:
      return { loading: false, success: true, teams: action.payload.data };
    case GET_TEAMS_FAIL:
      return { loading: false, error: action.payload };
    case GET_TEAMS_RESET:
      return {};
    default:
      return state;
  }
};

export const getTeamReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_TEAM_REQUEST:
      return { loading: true };
    case GET_TEAM_SUCCESS:
      return { loading: false, success: true, team: action.payload.data };
    case GET_TEAM_FAIL:
      return { loading: false, error: action.payload };
    case GET_TEAM_RESET:
      return {};
    default:
      return state;
  }
};

export const deleteTeamReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_TEAM_REQUEST:
      return { loading: true };
    case DELETE_TEAM_SUCCESS:
      return { loading: false, success: true };
    case DELETE_TEAM_FAIL:
      return { loading: false, error: action.payload };
    case DELETE_TEAM_RESET:
      return {};
    default:
      return state;
  }
};

export const updateTeamReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_TEAM_REQUEST:
      return { loading: true };
    case UPDATE_TEAM_SUCCESS:
      return { loading: false, success: true };
    case UPDATE_TEAM_FAIL:
      return { loading: false, error: action.payload };
    case UPDATE_TEAM_RESET:
      return {};
    default:
      return state;
  }
};
