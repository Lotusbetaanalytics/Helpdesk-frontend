import axios from "axios";
import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  VERIFY_ACCOUNT_FAIL,
  VERIFY_ACCOUNT_REQUEST,
  VERIFY_ACCOUNT_SUCCESS,
  RESET_PASSWORD_FAIL,
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_FAIL,
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  GET_ME_FAIL,
  GET_ME_REQUEST,
  GET_ME_SUCCESS,
} from "../../constants/user/authConstants";
import { BASE_URL } from "../../config";

export const userAuth = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOGIN_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post(
      `${BASE_URL}/api/Authentication/Login`,
      { email, password },
      config
    );

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });
    localStorage.setItem("userInfo", JSON.stringify(data.data));
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.responseMessage
          ? error.response.data.responseMessage
          : error.message,
    });
    // dispatch({ type: USER_LOGOUT });
  }
};

export const userLogout = () => (dispatch) => {
  localStorage.removeItem("userInfo");
  dispatch({ type: USER_LOGOUT });
};

export const registration =
  (fullName, email, password, confirmPassword) => async (dispatch) => {
    try {
      dispatch({ type: USER_REGISTER_REQUEST });

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        `${BASE_URL}/api/Authentication/Register`,
        { fullName, email, password, confirmPassword },
        config
      );

      dispatch({
        type: USER_REGISTER_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: USER_REGISTER_FAIL,
        payload:
          error.response && error.response.data.responseMessage
            ? error.response.data.responseMessage
            : error.message,
      });
    }
  };

export const verification = (email, token) => async (dispatch) => {
  try {
    dispatch({ type: VERIFY_ACCOUNT_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.get(
      `${BASE_URL}/api/Authentication/VerifyAccount?token=${token}&email=${email}`,
      config
    );

    dispatch({
      type: VERIFY_ACCOUNT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: VERIFY_ACCOUNT_FAIL,
      payload:
        error.response && error.response.data.responseMessage
          ? error.response.data.responseMessage
          : error.message,
    });
  }
};

export const forgotMyPassword = (email) => async (dispatch) => {
  try {
    dispatch({ type: FORGOT_PASSWORD_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post(
      `${BASE_URL}/api/Authentication/ForgetPassword`,
      { email },
      config
    );

    dispatch({
      type: FORGOT_PASSWORD_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: FORGOT_PASSWORD_FAIL,
      payload:
        error.response && error.response.data.responseMessage
          ? error.response.data.responseMessage
          : error.message,
    });
  }
};

export const resetMyPassword =
  (token, email, password, confirmPassword) => async (dispatch) => {
    try {
      dispatch({ type: RESET_PASSWORD_REQUEST });

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        `${BASE_URL}/api/Authentication/ResetPassword`,
        { token, email, password, confirmPassword },
        config
      );

      dispatch({
        type: RESET_PASSWORD_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: RESET_PASSWORD_FAIL,
        payload:
          error.response && error.response.data.responseMessage
            ? error.response.data.responseMessage
            : error.message,
      });
    }
  };

export const getMe = () => async (dispatch, getState) => {
  try {
    dispatch({ type: GET_ME_REQUEST });
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.jwtToken}`,
      },
    };
    const { data } = await axios.gett(
      `${BASE_URL}/api/Authentication/ResetPassword`,
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
