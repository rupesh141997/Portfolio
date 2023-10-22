 import React from 'react';
import './App.css';
import Nav from './components/Nav.jsx';
import Intro from './components/Intro';
import { BrowserRouter } from 'react-router-dom';
import Myskills from './components/Myskills';
import Work from './components/Work';
 import Experiance from './components/Experiance';
 import Contact from './components/Contact';

function App() {
  return (
    
    <BrowserRouter>
    <Nav/> 
    <Intro/>
    <Myskills/>
    <Work/>
     <Experiance/>
     <Contact/>
    
    </BrowserRouter>
    
     
    
  );
}

export default App;
