import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import { Home, UserDashboard, UserLogin, UserRegister, AdminDashboard, AdminLogin, AdminRegister, CreateTicket, Issue } from './screens';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" exact element={ <Home /> }/>
          <Route path="/user/register" exact element={ <UserRegister /> }/>
          <Route path="/user/login" exact element={ <UserLogin /> }/>
          <Route path="/user/dashboard" exact element={ <UserDashboard /> }/>
          <Route path="/user/create/ticket" exact element={ <CreateTicket /> }/>
          <Route path="/user/create/ticket/issue" exact element={ <Issue /> } />
          <Route path="/admin/register" exact element={ <AdminRegister /> }/>
          <Route path="/admin/login" exact element={ <AdminLogin /> }/>
          <Route path="/admin/dashboard" exact element={ <AdminDashboard /> }/>
        </Routes>
      </Router>  
    </div>
  );
}

export default App;
