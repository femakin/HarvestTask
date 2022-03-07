import React from 'react'
import {
    BrowserRouter as Router,

    Route,
    Routes,

  } from "react-router-dom";

import Home from './Pages/Home';
export default function Routing() {
  return (
    <div>
           <Router>
           
           <Routes>
           <Route path='/' element={<Home/>} />
           <Route path='/purse' element ={<Home/>} />
           <Route path='/plans' element ={<Home/>} />
           <Route path='/transactions' element ={<Home/>} />
           <Route path='/banks_cards' element ={<Home/>} />
           <Route path='/girl_code' element ={<Home/>} />
           <Route path='/profile' element ={<Home/>} />
           <Route path='/portfolio' element ={<Home/>} />
           <Route path='/about_harvest' element ={<Home/>} />
           <Route path='/support' element ={<Home/>} />
           <Route path='/logout' element ={<Home/>} />
           </Routes>
           
           
           
           
           </Router>
        
        






    </div>
  )
}
