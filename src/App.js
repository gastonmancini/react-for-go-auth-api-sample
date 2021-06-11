import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Users from './pages/Users/Users';
import UsersCreate from './pages/Users/UsersCreate';
import Register from './pages/Register';
import Login from './pages/Login';

function App() {
  return (
      <BrowserRouter>
        <Route path={'/'} exact component={Dashboard} />
        <Route path={'/register'} component={Register} />
        <Route path={'/login'} component={Login} />
        <Route path={'/users'} exact component={Users} />
        <Route path={'/users/create'} component={UsersCreate} />
      </BrowserRouter>
  );
}

export default App;
