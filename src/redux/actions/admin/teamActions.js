import axios from "axios";
import {
  CREATE_TEAM_FAIL,
  CREATE_TEAM_REQUEST,
  CREATE_TEAM_SUCCESS,
  GET_TEAMS_FAIL,
  GET_TEAMS_REQUEST,
  GET_TEAMS_SUCCESS,
  GET_TEAM_FAIL,
  GET_TEAM_REQUEST,
  GET_TEAM_SUCCESS,
  DELETE_TEAM_FAIL,
  DELETE_TEAM_REQUEST,
  DELETE_TEAM_SUCCESS,
  UPDATE_TEAM_FAIL,
  UPDATE_TEAM_REQUEST,
  UPDATE_TEAM_SUCCESS,
} from "../../constants/admin/teamConstants";
import { BASE_URL } from "../../config";

export const addTeam = (teamName) => async (dispatch, getState) => {
  try {
    dispatch({ type: CREATE_TEAM_REQUEST });
    const {
      adminLogin: { adminInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${adminInfo.jwtToken}`,
      },
    };
    const { data } = await axios.post(
      `${BASE_URL}/api/helpdesk/admin/Team/CreateTeam`,
      { teamName },
      config
    );

    dispatch({
      type: CREATE_TEAM_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CREATE_TEAM_FAIL,
      payload:
        error.response && error.response.data.responseMessage
          ? error.response.data.responseMessage
          : error.message,
    });
  }
};

export const fetchTeam = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: GET_TEAM_REQUEST });
    const {
      adminLogin: { adminInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${adminInfo.jwtToken}`,
      },
    };
    const { data } = await axios.get(
      `${BASE_URL}/api/helpdesk/admin/Team/${id}`,
      config
    );

    dispatch({
      type: GET_TEAM_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_TEAM_FAIL,
      payload:
        error.response && error.response.data.responseMessage
          ? error.response.data.responseMessage
          : error.message,
    });
  }
};

export const fetchTeams = () => async (dispatch, getState) => {
  try {
    dispatch({ type: GET_TEAMS_REQUEST });
    const {
      adminLogin: { adminInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${adminInfo.jwtToken}`,
      },
    };
    const { data } = await axios.get(
      `${BASE_URL}/api/helpdesk/admin/Team/`,
      config
    );

    dispatch({
      type: GET_TEAMS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_TEAMS_FAIL,
      payload:
        error.response && error.response.data.responseMessage
          ? error.response.data.responseMessage
          : error.message,
    });
  }
};

export const removeTeam = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: DELETE_TEAM_REQUEST });
    const {
      adminLogin: { adminInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${adminInfo.jwtToken}`,
      },
    };
    const { data } = await axios.delete(
      `${BASE_URL}/api/helpdesk/admin/Team/${id}`,
      config
    );

    dispatch({
      type: DELETE_TEAM_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DELETE_TEAM_FAIL,
      payload:
        error.response && error.response.data.responseMessage
          ? error.response.data.responseMessage
          : error.message,
    });
  }
};

export const editTeam = (teamName, id) => async (dispatch, getState) => {
  try {
    dispatch({ type: UPDATE_TEAM_REQUEST });
    const {
      adminLogin: { adminInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${adminInfo.jwtToken}`,
      },
    };
    const { data } = await axios.put(
      `${BASE_URL}/api/helpdesk/admin/Team/${id}`,
      { teamName },
      config
    );

    dispatch({
      type: UPDATE_TEAM_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_TEAM_FAIL,
      payload:
        error.response && error.response.data.responseMessage
          ? error.response.data.responseMessage
          : error.message,
    });
  }
};
