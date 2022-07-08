import axios from "axios";
import {
  CREATE_PRIORITY_FAIL,
  CREATE_PRIORITY_REQUEST,
  CREATE_PRIORITY_SUCCESS,
  GET_PRIORITYS_FAIL,
  GET_PRIORITYS_REQUEST,
  GET_PRIORITYS_SUCCESS,
  GET_PRIORITY_FAIL,
  GET_PRIORITY_REQUEST,
  GET_PRIORITY_SUCCESS,
  DELETE_PRIORITY_FAIL,
  DELETE_PRIORITY_REQUEST,
  DELETE_PRIORITY_SUCCESS,
  UPDATE_PRIORITY_FAIL,
  UPDATE_PRIORITY_REQUEST,
  UPDATE_PRIORITY_SUCCESS,
} from "../../constants/admin/priorityConstants";
import { BASE_URL } from "../../config";

export const addPriority = (level) => async (dispatch, getState) => {
  try {
    dispatch({ type: CREATE_PRIORITY_REQUEST });
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
      `${BASE_URL}/api/helpdesk/admin/Priority`,
      { level },
      config
    );

    dispatch({
      type: CREATE_PRIORITY_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CREATE_PRIORITY_FAIL,
      payload:
        error.response && error.response.data.responseMessage
          ? error.response.data.responseMessage
          : error.message,
    });
  }
};

export const fetchPriority = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: GET_PRIORITY_REQUEST });
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
      `${BASE_URL}/api/helpdesk/admin/Priority/${id}`,
      config
    );

    dispatch({
      type: GET_PRIORITY_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_PRIORITY_FAIL,
      payload:
        error.response && error.response.data.responseMessage
          ? error.response.data.responseMessage
          : error.message,
    });
  }
};

export const fetchPrioritys = () => async (dispatch, getState) => {
  try {
    dispatch({ type: GET_PRIORITYS_REQUEST });
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
      `${BASE_URL}/api/helpdesk/admin/Priority/`,
      config
    );

    dispatch({
      type: GET_PRIORITYS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_PRIORITYS_FAIL,
      payload:
        error.response && error.response.data.responseMessage
          ? error.response.data.responseMessage
          : error.message,
    });
  }
};

export const removePriority = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: DELETE_PRIORITY_REQUEST });
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
      `${BASE_URL}/api/helpdesk/admin/Priority/${id}`,
      config
    );

    dispatch({
      type: DELETE_PRIORITY_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DELETE_PRIORITY_FAIL,
      payload:
        error.response && error.response.data.responseMessage
          ? error.response.data.responseMessage
          : error.message,
    });
  }
};

export const editPriority = (level, id) => async (dispatch, getState) => {
  try {
    dispatch({ type: UPDATE_PRIORITY_REQUEST });
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
      `${BASE_URL}/api/helpdesk/admin/Priority/${id}`,
      { level },
      config
    );

    dispatch({
      type: UPDATE_PRIORITY_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_PRIORITY_FAIL,
      payload:
        error.response && error.response.data.responseMessage
          ? error.response.data.responseMessage
          : error.message,
    });
  }
};
