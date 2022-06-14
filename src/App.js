import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import { Home, UserDashboard, UserLogin, UserRegister, AdminDashboard, AdminLogin, AdminRegister, UserCreateTicket, UserIssue, UserMyTickets, AdminConfiguration, AdminTicketType, AdminStages, AdminSlaPolicies, AdminStageType, AdminStageTypeTwo, AdminPendingTickets, Modal } from './screens';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" exact element={ <Home /> }/>
          <Route path="/user/register" exact element={ <UserRegister /> }/>
          <Route path="/user/login" exact element={ <UserLogin /> }/> 
          <Route path="/user/dashboard" exact element={ <UserDashboard /> }/>
          <Route path="/user/create/ticket" exact element={ <UserCreateTicket /> }/>
          <Route path="/user/create/ticket/issue" exact element={ <UserIssue /> } />
          <Route path="/user/mytickets" exact element={ <UserMyTickets /> }></Route>
          <Route path="/admin/register" exact element={ <AdminRegister /> }/>
          <Route path="/admin/login" exact element={ <AdminLogin /> }/>
          <Route path="/admin/dashboard" exact element={ <AdminDashboard /> }/>
          <Route path="/admin/configuration" exact element={ <AdminConfiguration /> } />
          <Route path="/admin/configuration/ticket/type" exact element={ <AdminTicketType /> } />
          <Route path="/admin/configuration/stages" exact element={ <AdminStages /> } />
          <Route path="/admin/configuration/sla/policies" exact element={ <AdminSlaPolicies /> } />
          <Route path="/admin/configuration/stages/type" exact element={ <AdminStageType /> } />
          <Route path="/admin/configuration/stages/type/two" exact element={ <AdminStageTypeTwo /> } />
          <Route path="/admin/configuration/pending/tickets" exact element={ <AdminPendingTickets /> } />
          <Route path="/modal" exact element={ <Modal /> } />
        </Routes>
      </Router>  
    </div>
  );
}

export default App;
