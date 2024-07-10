import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import Footer from './components/Footer';
import './App.css'

function App() {
  return (
    <Router>
      <div className='d-flex'>
      
        <div className="navbar">
          <NavBar />
        </div>
        <div className="content flex-grow-1">
          <Routes>

            <Route path='/' element={<HomePage/>}/>       
          </Routes>
        </div>
       
        </div>
        <Footer/>
    </Router>
  );
}

export default App;
