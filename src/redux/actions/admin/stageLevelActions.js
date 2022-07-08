import axios from "axios";
import {
  CREATE_STAGE_LEVEL_FAIL,
  CREATE_STAGE_LEVEL_REQUEST,
  CREATE_STAGE_LEVEL_SUCCESS,
  GET_STAGES_LEVEL_FAIL,
  GET_STAGES_LEVEL_REQUEST,
  GET_STAGES_LEVEL_SUCCESS,
  GET_STAGE_LEVEL_FAIL,
  GET_STAGE_LEVEL_REQUEST,
  GET_STAGE_LEVEL_SUCCESS,
  DELETE_STAGE_LEVEL_FAIL,
  DELETE_STAGE_LEVEL_REQUEST,
  DELETE_STAGE_LEVEL_SUCCESS,
  UPDATE_STAGE_LEVEL_FAIL,
  UPDATE_STAGE_LEVEL_REQUEST,
  UPDATE_STAGE_LEVEL_SUCCESS,
} from "../../constants/admin/stageLevelConstants";

import { BASE_URL } from "../../config";

export const addStageLevel = (stageLevelName) => async (dispatch, getState) => {
  try {
    dispatch({ type: CREATE_STAGE_LEVEL_REQUEST });
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
      `${BASE_URL}/api/helpdesk/admin/StageLevel/CreateStageLevel`,
      { stageLevelName },
      config
    );

    dispatch({
      type: CREATE_STAGE_LEVEL_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CREATE_STAGE_LEVEL_FAIL,
      payload:
        error.response && error.response.data.responseMessage
          ? error.response.data.responseMessage
          : error.message,
    });
  }
};

export const fetchStageLevel = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: GET_STAGE_LEVEL_REQUEST });
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
      `${BASE_URL}/api/helpdesk/admin/StageLevel/${id}`,
      config
    );

    dispatch({
      type: GET_STAGE_LEVEL_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_STAGE_LEVEL_FAIL,
      payload:
        error.response && error.response.data.responseMessage
          ? error.response.data.responseMessage
          : error.message,
    });
  }
};

export const fetchStagesLevel = () => async (dispatch, getState) => {
  try {
    dispatch({ type: GET_STAGES_LEVEL_REQUEST });
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
      `${BASE_URL}/api/helpdesk/admin/StageLevel/`,
      config
    );

    dispatch({
      type: GET_STAGES_LEVEL_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_STAGES_LEVEL_FAIL,
      payload:
        error.response && error.response.data.responseMessage
          ? error.response.data.responseMessage
          : error.message,
    });
  }
};

export const removeStageLevel = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: DELETE_STAGE_LEVEL_REQUEST });
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
      `${BASE_URL}/api/helpdesk/admin/StageLevel/${id}`,
      config
    );

    dispatch({
      type: DELETE_STAGE_LEVEL_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DELETE_STAGE_LEVEL_FAIL,
      payload:
        error.response && error.response.data.responseMessage
          ? error.response.data.responseMessage
          : error.message,
    });
  }
};

export const editStageLevel =
  (stageLevelName, id) => async (dispatch, getState) => {
    try {
      dispatch({ type: UPDATE_STAGE_LEVEL_REQUEST });
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
        `${BASE_URL}/api/helpdesk/admin/StageLevel/${id}`,
        { stageLevelName },
        config
      );

      dispatch({
        type: UPDATE_STAGE_LEVEL_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: UPDATE_STAGE_LEVEL_FAIL,
        payload:
          error.response && error.response.data.responseMessage
            ? error.response.data.responseMessage
            : error.message,
      });
    }
  };
