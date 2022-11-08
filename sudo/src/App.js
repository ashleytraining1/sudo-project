import './App.css';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import React from 'react';
import {Routes,Route} from 'react-router-dom';


function App() {
  return ( 
    <>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    {/* <Route path="/about"element={<About/>}/>
    <Route exact path="/contact" component={Contact}/> */}
    </Routes>
    </>
  )
}

export default App;
