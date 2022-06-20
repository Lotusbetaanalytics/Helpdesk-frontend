import {
  CREATE_TICKET_FAIL,
  CREATE_TICKET_REQUEST,
  CREATE_TICKET_RESET,
  CREATE_TICKET_SUCCESS,
  GET_TICKETS_FAIL,
  GET_TICKETS_REQUEST,
  GET_TICKETS_RESET,
  GET_TICKETS_SUCCESS,
  GET_TICKET_FAIL,
  GET_TICKET_REQUEST,
  GET_TICKET_RESET,
  GET_TICKET_SUCCESS,
  DELETE_TICKET_FAIL,
  DELETE_TICKET_REQUEST,
  DELETE_TICKET_RESET,
  DELETE_TICKET_SUCCESS,
  UPDATE_TICKET_FAIL,
  UPDATE_TICKET_REQUEST,
  UPDATE_TICKET_RESET,
  UPDATE_TICKET_SUCCESS,
} from "../../constants/admin/ticketConstants";

export const createTicketReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_TICKET_REQUEST:
      return { loading: true };
    case CREATE_TICKET_SUCCESS:
      return { loading: false, success: true };
    case CREATE_TICKET_FAIL:
      return { loading: false, error: action.payload };
    case CREATE_TICKET_RESET:
      return {};
    default:
      return state;
  }
};

export const getAllTicketsReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_TICKETS_REQUEST:
      return { loading: true };
    case GET_TICKETS_SUCCESS:
      return { loading: false, success: true, tickets: action.payload.data };
    case GET_TICKETS_FAIL:
      return { loading: false, error: action.payload };
    case GET_TICKETS_RESET:
      return {};
    default:
      return state;
  }
};

export const getTicketReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_TICKET_REQUEST:
      return { loading: true };
    case GET_TICKET_SUCCESS:
      return { loading: false, success: true, ticket: action.payload.data };
    case GET_TICKET_FAIL:
      return { loading: false, error: action.payload };
    case GET_TICKET_RESET:
      return {};
    default:
      return state;
  }
};

export const deleteTicketReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_TICKET_REQUEST:
      return { loading: true };
    case DELETE_TICKET_SUCCESS:
      return { loading: false, success: true };
    case DELETE_TICKET_FAIL:
      return { loading: false, error: action.payload };
    case DELETE_TICKET_RESET:
      return {};
    default:
      return state;
  }
};

export const updateTicketReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_TICKET_REQUEST:
      return { loading: true };
    case UPDATE_TICKET_SUCCESS:
      return { loading: false, success: true };
    case UPDATE_TICKET_FAIL:
      return { loading: false, error: action.payload };
    case UPDATE_TICKET_RESET:
      return {};
    default:
      return state;
  }
};
