import axios from "axios";
import {
  CREATE_TAG_FAIL,
  CREATE_TAG_REQUEST,
  CREATE_TAG_SUCCESS,
  GET_TAG_FAIL,
  GET_TAG_REQUEST,
  GET_TAG_SUCCESS,
  DELETE_TAG_FAIL,
  DELETE_TAG_REQUEST,
  DELETE_TAG_SUCCESS,
  UPDATE_TAG_FAIL,
  UPDATE_TAG_REQUEST,
  UPDATE_TAG_SUCCESS,
} from "../../constants/admin/tagConstants";
import { BASE_URL } from "../../config";

export const addTag = (tagName) => async (dispatch, getState) => {
  try {
    dispatch({ type: CREATE_TAG_REQUEST });
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
      `${BASE_URL}/api/helpdesk/admin/Tag/CreateTag`,
      { tagName },
      config
    );

    dispatch({
      type: CREATE_TAG_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CREATE_TAG_FAIL,
      payload:
        error.response && error.response.data.responseMessage
          ? error.response.data.responseMessage
          : error.message,
    });
  }
};

export const fetchTag = () => async (dispatch, getState) => {
  try {
    dispatch({ type: GET_TAG_REQUEST });
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
      `${BASE_URL}/api/helpdesk/admin/Tag/`,
      config
    );

    dispatch({
      type: GET_TAG_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_TAG_FAIL,
      payload:
        error.response && error.response.data.responseMessage
          ? error.response.data.responseMessage
          : error.message,
    });
  }
};

export const removeTag = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: DELETE_TAG_REQUEST });
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
      `${BASE_URL}/api/helpdesk/admin/Tag/${id}`,
      config
    );

    dispatch({
      type: DELETE_TAG_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DELETE_TAG_FAIL,
      payload:
        error.response && error.response.data.responseMessage
          ? error.response.data.responseMessage
          : error.message,
    });
  }
};

export const editTag = (tagName, id) => async (dispatch, getState) => {
  try {
    dispatch({ type: UPDATE_TAG_REQUEST });
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
      `${BASE_URL}/api/helpdesk/admin/Tag/${id}`,
      { tagName },
      config
    );

    dispatch({
      type: UPDATE_TAG_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_TAG_FAIL,
      payload:
        error.response && error.response.data.responseMessage
          ? error.response.data.responseMessage
          : error.message,
    });
  }
};
