
import './App.css';
import Nav from './components/Nav.jsx';
import Intro from './components/Intro';
import { BrowserRouter } from 'react-router-dom';
import Myskills from './components/Myskills';
import Work from './components/Work';
 import Experiance from './components/Experiance';
 import Contact from './components/Contact';


 import React, { useEffect, useState } from 'react';
import Preloadingani from './components/Preloadingani.jsx';
 
function App() {
  const [isloading,setisLoading]=useState(true);
  useEffect(() => {
        setTimeout(()=>{
            setisLoading(false);
        },3500)
  },[])

  return (
    <div> 
    {isloading ? (<Preloadingani/>) :( 
    <BrowserRouter>
    <Nav/> 
    <Intro/>
    <Myskills/>
    <Work/>
     <Experiance/>
     <Contact/>
    
    </BrowserRouter>
    )
  }
  </div>
    
     
    
  );
}

export default App;
