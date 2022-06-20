import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_RESET,
  USER_REGISTER_SUCCESS,
  VERIFY_ACCOUNT_FAIL,
  VERIFY_ACCOUNT_REQUEST,
  VERIFY_ACCOUNT_RESET,
  VERIFY_ACCOUNT_SUCCESS,
  FORGOT_PASSWORD_FAIL,
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_RESET,
  FORGOT_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAIL,
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_RESET,
  RESET_PASSWORD_SUCCESS,
  GET_ME_FAIL,
  GET_ME_REQUEST,
  GET_ME_RESET,
  GET_ME_SUCCESS,
} from "../../constants/user/authConstants";

export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { loading: true };
    case USER_LOGIN_SUCCESS:
      return { loading: false, success: true, userInfo: action.payload };
    case USER_LOGIN_FAIL:
      return { loading: false, error: action.payload };
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};

export const registerReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return { loading: true };
    case USER_REGISTER_SUCCESS:
      return { loading: false, success: true };
    case USER_REGISTER_FAIL:
      return { loading: false, error: action.payload };
    case USER_REGISTER_RESET:
      return {};
    default:
      return state;
  }
};

export const verifyReducer = (state = {}, action) => {
  switch (action.type) {
    case VERIFY_ACCOUNT_REQUEST:
      return { loading: true };
    case VERIFY_ACCOUNT_SUCCESS:
      return { loading: false, success: true };
    case VERIFY_ACCOUNT_FAIL:
      return { loading: false, error: action.payload };
    case VERIFY_ACCOUNT_RESET:
      return {};
    default:
      return state;
  }
};

export const resetReducer = (state = {}, action) => {
  switch (action.type) {
    case RESET_PASSWORD_REQUEST:
      return { loading: true };
    case RESET_PASSWORD_SUCCESS:
      return { loading: false, success: true };
    case RESET_PASSWORD_FAIL:
      return { loading: false, error: action.payload };
    case RESET_PASSWORD_RESET:
      return {};
    default:
      return state;
  }
};

export const forgotReducer = (state = {}, action) => {
  switch (action.type) {
    case FORGOT_PASSWORD_REQUEST:
      return { loading: true };
    case FORGOT_PASSWORD_SUCCESS:
      return { loading: false, success: true };
    case FORGOT_PASSWORD_FAIL:
      return { loading: false, error: action.payload };
    case FORGOT_PASSWORD_RESET:
      return {};
    default:
      return state;
  }
};

export const meReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_ME_REQUEST:
      return { loading: true };
    case GET_ME_SUCCESS:
      return { loading: false, success: true, user: action.payload.data };
    case GET_ME_FAIL:
      return { loading: false, error: action.payload };
    case GET_ME_RESET:
      return {};
    default:
      return state;
  }
};
