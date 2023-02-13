import React from 'react';
import Navbar from './Components/Navbar';
import './App.css';
import Home from './Components/Pages/Home';
import AboutMe from './Components/Pages/Profile';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Chat from './Components/Pages/chat';

function App() {
  return (
    <>
      <Router>
      <Navbar />
        <Routes>
          <Route path="/Feed" element={<Home/>} />
          <Route path="/Profile" element={<AboutMe/>} />
          <Route path="/Messages" element={<Chat/>} />
        </Routes>
      </Router> 
    </>
  );
}

export default App;