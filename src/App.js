import React, { useState } from "react"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Register } from "./features/register/register.jsx";
import { Login } from "./features/login/Login.jsx";
import { Profile } from "./features/profile/profile.jsx";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="flex flex-row">
          <Routes>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/profile" element={<Profile/>}></Route>
            <Route path="/home" element={<div>home </div>}></Route>
          </Routes>

        </div>
      </Router> 
    </div>
  );
}

export default App;
