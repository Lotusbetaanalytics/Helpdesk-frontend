import axios from "axios";
import {
  CREATE_TICKET_FAIL,
  CREATE_TICKET_REQUEST,
  CREATE_TICKET_SUCCESS,
  GET_TICKETS_FAIL,
  GET_TICKETS_REQUEST,
  GET_TICKETS_SUCCESS,
  GET_TICKET_FAIL,
  GET_TICKET_REQUEST,
  GET_TICKET_SUCCESS,
  DELETE_TICKET_FAIL,
  DELETE_TICKET_REQUEST,
  DELETE_TICKET_SUCCESS,
  UPDATE_TICKET_FAIL,
  UPDATE_TICKET_REQUEST,
  UPDATE_TICKET_SUCCESS,
} from "../../constants/admin/ticketConstants";
import { BASE_URL } from "../../config";

export const addTicket = (ticketTypeName) => async (dispatch, getState) => {
  try {
    dispatch({ type: CREATE_TICKET_REQUEST });
    const {
      adminLogin: { adminInfo },
    } = getState();
    console.log(adminInfo.jwtToken);
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${adminInfo.jwtToken}`,
      },
    };
    const { data } = await axios.post(
      `${BASE_URL}/api/helpdesk/admin/TicketType/CreateTicketType`,
      { ticketTypeName },
      config
    );

    dispatch({
      type: CREATE_TICKET_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CREATE_TICKET_FAIL,
      payload:
        error.response && error.response.data.responseMessage
          ? error.response.data.responseMessage
          : error.message,
    });
  }
};

export const fetchTicket = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: GET_TICKET_REQUEST });
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
      `${BASE_URL}/api/helpdesk/admin/TicketType/${id}`,
      config
    );

    dispatch({
      type: GET_TICKET_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_TICKET_FAIL,
      payload:
        error.response && error.response.data.responseMessage
          ? error.response.data.responseMessage
          : error.message,
    });
  }
};

export const fetchTickets = () => async (dispatch, getState) => {
  try {
    dispatch({ type: GET_TICKETS_REQUEST });
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
      `${BASE_URL}/api/helpdesk/admin/TicketType/`,
      config
    );

    dispatch({
      type: GET_TICKETS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_TICKETS_FAIL,
      payload:
        error.response && error.response.data.responseMessage
          ? error.response.data.responseMessage
          : error.message,
    });
  }
};

export const removeTicket = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: DELETE_TICKET_REQUEST });
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
      `${BASE_URL}/api/helpdesk/admin/TicketType/${id}`,
      config
    );

    dispatch({
      type: DELETE_TICKET_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DELETE_TICKET_FAIL,
      payload:
        error.response && error.response.data.responseMessage
          ? error.response.data.responseMessage
          : error.message,
    });
  }
};

export const editTicket =
  (comment, ticketTypeId, priorityLevelId, id) =>
  async (dispatch, getState) => {
    try {
      dispatch({ type: UPDATE_TICKET_REQUEST });
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
        `${BASE_URL}/api/helpdesk/admin/TicketType/${id}`,
        { comment, ticketTypeId, priorityLevelId },
        config
      );

      dispatch({
        type: UPDATE_TICKET_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: UPDATE_TICKET_FAIL,
        payload:
          error.response && error.response.data.responseMessage
            ? error.response.data.responseMessage
            : error.message,
      });
    }
  };
