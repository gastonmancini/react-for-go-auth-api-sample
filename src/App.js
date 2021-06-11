import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Register from './pages/Register';
import Login from './pages/Login';
import Users from './pages/Users/Users';
import UsersCreate from './pages/Users/UsersCreate';
import UsersEdit from './pages/Users/UsersEdit';

function App() {
  return (
      <BrowserRouter>
        <Route path={'/'} exact component={Dashboard} />
        <Route path={'/register'} component={Register} />
        <Route path={'/login'} component={Login} />
        <Route path={'/users'} exact component={Users} />
        <Route path={'/users/create'} component={UsersCreate} />
        <Route path={'/users/:id/edit'} component={UsersEdit} />
      </BrowserRouter>
  );
}

export default App;
