// src/App.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import FallingSand from './components/FallingSand';
import MainPage from './components/MainPage';

function App() {

  return (
    <div className="App">
        <>
          <MainPage />
        </>
    </div>
  );
}

export default App;

