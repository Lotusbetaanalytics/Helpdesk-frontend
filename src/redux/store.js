import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  authReducer,
  forgotReducer,
  meReducer,
  registerReducer,
  resetReducer,
  verifyReducer,
} from "./reducers/user/authReducers";
import {
  adminAuthReducer,
  adminMeReducer,
} from "./reducers/admin/authReducers";
import {
  createTicketReducer,
  deleteTicketReducer,
  getAllTicketsReducer,
  getTicketReducer,
  updateTicketReducer,
} from "./reducers/admin/ticketReducers";
import {
  createTeamReducer,
  deleteTeamReducer,
  getAllTeamsReducer,
  getTeamReducer,
  updateTeamReducer,
} from "./reducers/admin/teamReducers";
import {
  createStageReducer,
  deleteStageReducer,
  getAllStagesReducer,
  getStageReducer,
  updateStageReducer,
} from "./reducers/admin/stageReducers";

const reducer = combineReducers({
  userLogin: authReducer,
  userRegister: registerReducer,
  verifyAccount: verifyReducer,
  forgotPassword: forgotReducer,
  resetPassword: resetReducer,
  userProfile: meReducer,
  adminLogin: adminAuthReducer,
  adminProfile: adminMeReducer,
  createTicket: createTicketReducer,
  getAllTickets: getAllTicketsReducer,
  getTicket: getTicketReducer,
  deleteTicket: deleteTicketReducer,
  updateTicket: updateTicketReducer,
  createTeam: createTeamReducer,
  getAllTeams: getAllTeamsReducer,
  getTeam: getTeamReducer,
  deleteTeam: deleteTeamReducer,
  updateTeam: updateTeamReducer,
  createStage: createStageReducer,
  getAllStages: getAllStagesReducer,
  getStage: getStageReducer,
  deleteStage: deleteStageReducer,
  updateStage: updateStageReducer,
});
const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;
const adminInfoFromStorage = localStorage.getItem("adminInfo")
  ? JSON.parse(localStorage.getItem("adminInfo"))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
  adminLogin: { adminInfo: adminInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
