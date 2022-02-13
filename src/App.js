import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import Home from './react-menu/Home'
import About from './react-menu/About'
import Projects from './react-menu/Projects'
import Contact from './react-menu/Contact'
import Navbar from './react-menu/Navbar';
import Footer from './react-menu/Footer'
import {router , Routes , Route , Redirect} from 'react-router-dom'
import { useState} from 'react';

function App() {
  
   
  return (
    <>
      

        <Navbar/>
       
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          {/* <Route path="/About" element={<About/>}></Route> */}
          <Route exact path="/About" element={<About/>}> </Route>
          
          <Route exact path="/Projects" element={<Projects/>}> </Route>
          <Route exact path="/Contact" element={<Contact/>}> </Route>
          

        </Routes>
        {/* <Footer/> */}
      
        
    </>
  );
}

export default App;

