import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';

import './App.css'

function App() {
  return (
    <Router>
      
        <div className="navbar">
          <NavBar />
        </div>
        <div className="">
          <Routes>
            
          </Routes>
        </div>

    </Router>
  );
}

export default App;