import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Register from './pages/Register';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Users from './pages/Users/Users';
import UsersCreate from './pages/Users/UsersCreate';
import UsersEdit from './pages/Users/UsersEdit';
import Roles from './pages/Roles/Roles';
import RolesCreate from './pages/Roles/RolesCreate';
import RolesEdit from './pages/Roles/RolesEdit';

function App() {
  return (
      <BrowserRouter>
        <Route path={'/'} exact component={Dashboard} />
        <Route path={'/register'} component={Register} />
        <Route path={'/login'} component={Login} />
        <Route path={'/profile'} component={Profile} />
        <Route path={'/users'} exact component={Users} />
        <Route path={'/users/create'} component={UsersCreate} />
        <Route path={'/users/:id/edit'} component={UsersEdit} />
        <Route path={'/roles'} exact component={Roles} />
        <Route path={'/roles/create'} component={RolesCreate} />
        <Route path={'/roles/:id/edit'} component={RolesEdit} />
      </BrowserRouter>
  );
}

export default App;
