import axios from "axios";
import {
  CREATE_ESTAGE_FAIL,
  CREATE_ESTAGE_REQUEST,
  CREATE_ESTAGE_SUCCESS,
  GET_ESTAGES_FAIL,
  GET_ESTAGES_REQUEST,
  GET_ESTAGES_SUCCESS,
  GET_ESTAGE_FAIL,
  GET_ESTAGE_REQUEST,
  GET_ESTAGE_SUCCESS,
  DELETE_ESTAGE_FAIL,
  DELETE_ESTAGE_REQUEST,
  DELETE_ESTAGE_SUCCESS,
  UPDATE_ESTAGE_FAIL,
  UPDATE_ESTAGE_REQUEST,
  UPDATE_ESTAGE_SUCCESS,
} from "../../constants/admin/eStageConstants";
import { BASE_URL } from "../../config";

export const addEStage = (excludeStageLevel) => async (dispatch, getState) => {
  try {
    dispatch({ type: CREATE_ESTAGE_REQUEST });
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
      `${BASE_URL}/api/helpdesk/admin/ExcludeStage`,
      { excludeStageLevel },
      config
    );

    dispatch({
      type: CREATE_ESTAGE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CREATE_ESTAGE_FAIL,
      payload:
        error.response && error.response.data.responseMessage
          ? error.response.data.responseMessage
          : error.message,
    });
  }
};

export const fetchEStage = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: GET_ESTAGE_REQUEST });
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
      `${BASE_URL}/api/helpdesk/admin/ExcludeStage/${id}`,
      config
    );

    dispatch({
      type: GET_ESTAGE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_ESTAGE_FAIL,
      payload:
        error.response && error.response.data.responseMessage
          ? error.response.data.responseMessage
          : error.message,
    });
  }
};

export const fetchEStages = () => async (dispatch, getState) => {
  try {
    dispatch({ type: GET_ESTAGES_REQUEST });
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
      `${BASE_URL}/api/helpdesk/admin/ExcludeStage/`,
      config
    );

    dispatch({
      type: GET_ESTAGES_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_ESTAGES_FAIL,
      payload:
        error.response && error.response.data.responseMessage
          ? error.response.data.responseMessage
          : error.message,
    });
  }
};

export const removeEStage = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: DELETE_ESTAGE_REQUEST });
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
      `${BASE_URL}/api/helpdesk/admin/ExcludeStage/${id}`,
      config
    );

    dispatch({
      type: DELETE_ESTAGE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DELETE_ESTAGE_FAIL,
      payload:
        error.response && error.response.data.responseMessage
          ? error.response.data.responseMessage
          : error.message,
    });
  }
};

export const editEStage =
  (excludeStageLevel, id) => async (dispatch, getState) => {
    try {
      dispatch({ type: UPDATE_ESTAGE_REQUEST });
      const {
        adminLogin: { adminInfo },
      } = getState();

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${adminInfo.jwtToken}`,
        },
      };
      const { data } = await axios.patch(
        `${BASE_URL}/api/helpdesk/admin/ExcludeStage/${id}`,
        { excludeStageLevel },
        config
      );

      dispatch({
        type: UPDATE_ESTAGE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: UPDATE_ESTAGE_FAIL,
        payload:
          error.response && error.response.data.responseMessage
            ? error.response.data.responseMessage
            : error.message,
      });
    }
  };
