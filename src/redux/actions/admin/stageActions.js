import axios from "axios";
import {
  CREATE_STAGE_FAIL,
  CREATE_STAGE_REQUEST,
  CREATE_STAGE_SUCCESS,
  GET_STAGES_FAIL,
  GET_STAGES_REQUEST,
  GET_STAGES_SUCCESS,
  GET_STAGE_FAIL,
  GET_STAGE_REQUEST,
  GET_STAGE_SUCCESS,
  DELETE_STAGE_FAIL,
  DELETE_STAGE_REQUEST,
  DELETE_STAGE_SUCCESS,
  UPDATE_STAGE_FAIL,
  UPDATE_STAGE_REQUEST,
  UPDATE_STAGE_SUCCESS,
} from "../../constants/admin/stageConstants";
import { BASE_URL } from "../../config";

export const addStage =
  (stageName, teamId, emailTemplate, description) =>
  async (dispatch, getState) => {
    try {
      dispatch({ type: CREATE_STAGE_REQUEST });
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
        `${BASE_URL}/api/helpdesk/admin/Stage/CreateStage`,
        { stageName, teamId, emailTemplate, description },
        config
      );

      dispatch({
        type: CREATE_STAGE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: CREATE_STAGE_FAIL,
        payload:
          error.response && error.response.data.responseMessage
            ? error.response.data.responseMessage
            : error.message,
      });
    }
  };

export const fetchStage = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: GET_STAGE_REQUEST });
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
      `${BASE_URL}/api/helpdesk/admin/Stage/${id}`,
      config
    );

    dispatch({
      type: GET_STAGE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_STAGE_FAIL,
      payload:
        error.response && error.response.data.responseMessage
          ? error.response.data.responseMessage
          : error.message,
    });
  }
};

export const fetchStages = () => async (dispatch, getState) => {
  try {
    dispatch({ type: GET_STAGES_REQUEST });
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
      `${BASE_URL}/api/helpdesk/admin/Stage/`,
      config
    );

    dispatch({
      type: GET_STAGES_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_STAGES_FAIL,
      payload:
        error.response && error.response.data.responseMessage
          ? error.response.data.responseMessage
          : error.message,
    });
  }
};

export const removeStage = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: DELETE_STAGE_REQUEST });
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
      `${BASE_URL}/api/helpdesk/admin/Stage/${id}`,
      config
    );

    dispatch({
      type: DELETE_STAGE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DELETE_STAGE_FAIL,
      payload:
        error.response && error.response.data.responseMessage
          ? error.response.data.responseMessage
          : error.message,
    });
  }
};

export const editStage =
  (stageName, teamId, emailTemplate, description, id) =>
  async (dispatch, getState) => {
    try {
      dispatch({ type: UPDATE_STAGE_REQUEST });
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
        `${BASE_URL}/api/helpdesk/admin/Stage/${id}`,
        { stageName, teamId, emailTemplate, description },
        config
      );

      dispatch({
        type: UPDATE_STAGE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: UPDATE_STAGE_FAIL,
        payload:
          error.response && error.response.data.responseMessage
            ? error.response.data.responseMessage
            : error.message,
      });
    }
  };
