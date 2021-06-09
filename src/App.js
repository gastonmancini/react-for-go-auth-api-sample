import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header';
import Nav from './components/Nav';
import Dashboard from './pages/Dashboard';
import Users from './pages/Users'


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="container-fluid">
          <div className="row">
            <Nav />
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
              <Route path={'/'} exact component={Dashboard} />
              <Route path={'/users'} component={Users} />
            </main>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
