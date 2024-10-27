import React, { useState } from "react"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Register } from "./features/register/register.js";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="flex flex-row">
          <Routes>
            <Route path="/" element={<Register />}></Route>
            <Route path="/home" element={<div>hihih</div>}></Route>
            <Route path="/home" element={<div>hihih</div>}></Route>
          </Routes>

        </div>
      </Router>
    </div>
  );
}

export default App;
