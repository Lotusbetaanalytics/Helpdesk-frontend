import {
  ADMIN_LOGIN_FAIL,
  ADMIN_LOGIN_REQUEST,
  ADMIN_LOGIN_SUCCESS,
  ADMIN_LOGOUT,
  GET_ME_FAIL,
  GET_ME_REQUEST,
  GET_ME_RESET,
  GET_ME_SUCCESS,
} from "../../constants/admin/authConstants";

export const adminAuthReducer = (state = {}, action) => {
  switch (action.type) {
    case ADMIN_LOGIN_REQUEST:
      return { loading: true };
    case ADMIN_LOGIN_SUCCESS:
      return { loading: false, success: true, adminInfo: action.payload };
    case ADMIN_LOGIN_FAIL:
      return { loading: false, error: action.payload };
    case ADMIN_LOGOUT:
      return {};
    default:
      return state;
  }
};

export const adminMeReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_ME_REQUEST:
      return { loading: true };
    case GET_ME_SUCCESS:
      return { loading: false, success: true, admin: action.payload.data };
    case GET_ME_FAIL:
      return { loading: false, error: action.payload };
    case GET_ME_RESET:
      return {};
    default:
      return state;
  }
};
