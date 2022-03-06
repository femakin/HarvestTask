import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Routes,
    Link
  } from "react-router-dom";
import App from './App';
import Home from './Pages/Home';
export default function Routing() {
  return (
    <div>
           <Router>
           
           <Routes>
           <Route path='/' element={<Home/>} />
           
           </Routes>
           
           
           
           
           </Router>
        
        






    </div>
  )
}
