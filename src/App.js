// import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Home from './pages/Home';
import Signin from './pages/Signin';
import { Route, Routes } from "react-router-dom"
import Learning from './pages/Learning';
import Ongoing from './pages/Ongoing';
import Footer from './Footer';
import ScrollButton from './components/ScrollButton';
import React, { useState } from 'react';



function App() {
  return ( 
    <div className='container1'>
      <Navbar />
      
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/Learning" element={<Learning />} />
          <Route path="/Ongoing" element={<Ongoing />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
      </div>

      <div style={{ height: '100vh', overflowY: 'auto', position: 'relative' }}>
      <div>
        {/* {messages.map((message, index) => (
          <div key={index}>{message}</div>
        ))} */}
        {/* <button onClick={addMessage}>Add Message</button> */}
      </div>
      
    </div>
      <Footer/>
      <ScrollButton />
    </div>
  )
}

export default App;
