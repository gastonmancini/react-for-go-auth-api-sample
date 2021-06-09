import React from 'react';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';

function App() {
  return (
    <>
      <Header />
      <div className="container-fluid">
        <div className="row">
          <Nav />
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h1 className="h2">Dashboard</h1>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
