import React from "react";
import "./App.css";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import { Routes, Route, Navigate, Router, useLocation } from "react-router-dom";
import Home from "./Pages/Home";

function App() {
  const location = useLocation();

  return (
    <div className="App">

      <Routes location={location} key={location.pathname}>
        <Route path="/" exact element={ <Home />} />
        <Route path="/signIn" element={ <SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
      </Routes>
     
     
      
    </div>
  );
}

export default App;
