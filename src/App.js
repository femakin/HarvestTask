import React, {useState, useEffect} from 'react';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import './App.css';

import Routing from './Routing';


function App() {

const [loading, setloading]  = useState(true)

useEffect(() => {

  setTimeout(() => { setloading(false)}, 1000);
 
}, []);

  return (
    <div className="App-">
   {
loading ? <Skeleton count={50}   /> : <Routing/>
   }
    </div>
  );
}

export default App;
