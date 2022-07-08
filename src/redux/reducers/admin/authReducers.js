import {
  ADMIN_LOGIN_FAIL,
  ADMIN_LOGIN_REQUEST,
  ADMIN_LOGIN_SUCCESS,
  ADMIN_LOGOUT,
  GET_ME_FAIL,
  GET_ME_REQUEST,
  GET_ME_RESET,
  GET_ME_SUCCESS,
  CREATE_ADMIN_FAIL,
  CREATE_ADMIN_REQUEST,
  CREATE_ADMIN_RESET,
  CREATE_ADMIN_SUCCESS,
  GET_ROLES_FAIL,
  GET_ROLES_REQUEST,
  GET_ROLES_RESET,
  GET_ROLES_SUCCESS,
  UPDATE_ROLES_FAIL,
  UPDATE_ROLES_REQUEST,
  UPDATE_ROLES_RESET,
  UPDATE_ROLES_SUCCESS,
} from "../../constants/admin/authConstants";

export const adminAuthReducer = (state = {}, action) => {
  switch (action.type) {
    case ADMIN_LOGIN_REQUEST:
      return { loading: true };
    case ADMIN_LOGIN_SUCCESS:
      return { loading: false, success: true, adminInfo: action.payload.data };
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

export const createAdminReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_ADMIN_REQUEST:
      return { loading: true };
    case CREATE_ADMIN_SUCCESS:
      return { loading: false, success: true };
    case CREATE_ADMIN_FAIL:
      return { loading: false, error: action.payload };
    case CREATE_ADMIN_RESET:
      return {};
    default:
      return state;
  }
};

export const getRolesReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_ROLES_REQUEST:
      return { loading: true };
    case GET_ROLES_SUCCESS:
      return { loading: false, success: true, roles: action.payload.data };
    case GET_ROLES_FAIL:
      return { loading: false, error: action.payload };
    case GET_ROLES_RESET:
      return {};
    default:
      return state;
  }
};

export const updateRolesReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_ROLES_REQUEST:
      return { loading: true };
    case UPDATE_ROLES_SUCCESS:
      return { loading: false, success: true };
    case UPDATE_ROLES_FAIL:
      return { loading: false, error: action.payload };
    case UPDATE_ROLES_RESET:
      return {};
    default:
      return state;
  }
};
