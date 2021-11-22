import React, {useState} from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './home/home.js'
import Login from './login/login.js'
import Signup from './signup/signup.js'
import ForgotPassword from './forgotpassword/forgotpassword.js'


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='login' element={<Login/>}></Route>
        <Route path='signup' element={<Signup/>}></Route>
        <Route path='forgotpassword' element={<ForgotPassword/>}></Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
