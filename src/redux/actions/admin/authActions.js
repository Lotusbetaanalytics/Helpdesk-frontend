import axios from "axios";
import {
  ADMIN_LOGIN_FAIL,
  ADMIN_LOGIN_REQUEST,
  ADMIN_LOGIN_SUCCESS,
  ADMIN_LOGOUT,
  GET_ME_FAIL,
  GET_ME_REQUEST,
  GET_ME_SUCCESS,
  CREATE_ADMIN_FAIL,
  CREATE_ADMIN_REQUEST,
  CREATE_ADMIN_SUCCESS,
  GET_ROLES_FAIL,
  GET_ROLES_REQUEST,
  GET_ROLES_SUCCESS,
  UPDATE_ROLES_FAIL,
  UPDATE_ROLES_REQUEST,
  UPDATE_ROLES_SUCCESS,
} from "../../constants/admin/authConstants";
import { BASE_URL } from "../../config";

export const adminAuth = (accessToken) => async (dispatch) => {
  try {
    dispatch({ type: ADMIN_LOGIN_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post(
      `${BASE_URL}/api/helpdesk/admin/AdminUser/Login`,
      { accessToken },
      config
    );

    dispatch({
      type: ADMIN_LOGIN_SUCCESS,
      payload: data,
    });
    localStorage.setItem("adminInfo", JSON.stringify(data.data));
  } catch (error) {
    dispatch({
      type: ADMIN_LOGIN_FAIL,
      payload:
        error.response && error.response.data.responseMessage
          ? error.response.data.responseMessage
          : error.message,
    });
    // dispatch({ type: ADMIN_LOGOUT });
  }
};

export const adminLogout = () => (dispatch) => {
  localStorage.removeItem("adminInfo");
  dispatch({ type: ADMIN_LOGOUT });
};

export const fetchAdminProfile = () => async (dispatch, getState) => {
  try {
    dispatch({ type: GET_ME_REQUEST });
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
      `${BASE_URL}/api/helpdesk/admin/AdminUser/Profile`,
      config
    );

    dispatch({
      type: GET_ME_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_ME_FAIL,
      payload:
        error.response && error.response.data.responseMessage
          ? error.response.data.responseMessage
          : error.message,
    });
  }
};

export const addNewAdmin = (email, roleId) => async (dispatch, getState) => {
  try {
    dispatch({ type: CREATE_ADMIN_REQUEST });
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
      `${BASE_URL}/api/helpdesk/admin/AdminUser/Register`,
      { email, roleId },
      config
    );

    dispatch({
      type: CREATE_ADMIN_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CREATE_ADMIN_FAIL,
      payload:
        error.response && error.response.data.responseMessage
          ? error.response.data.responseMessage
          : error.message,
    });
  }
};

export const getRoles = () => async (dispatch, getState) => {
  try {
    dispatch({ type: GET_ROLES_REQUEST });
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
      `${BASE_URL}/api/helpdesk/admin/Role`,
      config
    );

    dispatch({
      type: GET_ROLES_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_ROLES_FAIL,
      payload:
        error.response && error.response.data.responseMessage
          ? error.response.data.responseMessage
          : error.message,
    });
  }
};

export const editRoles = (description, id) => async (dispatch, getState) => {
  try {
    dispatch({ type: UPDATE_ROLES_REQUEST });
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
      `${BASE_URL}/api/helpdesk/admin/Role/${id}`,
      { description },
      config
    );

    dispatch({
      type: UPDATE_ROLES_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_ROLES_FAIL,
      payload:
        error.response && error.response.data.responseMessage
          ? error.response.data.responseMessage
          : error.message,
    });
  }
};
