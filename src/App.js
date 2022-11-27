
import './App.css';
import About from './components/About'
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';
import Alerts from './components/Alerts';
import {BrowserRouter,Routes,Route} from "react-router-dom";



function App() {
  
  const [currMode, setcurrMode] = useState('light');


  const [Alert, setAlert] = useState(null);

  const FuncAlert = (whatToShow,type) =>
  {
      setAlert ({
        msg : whatToShow,
        tp : type
      })

      setTimeout(() => {
        setAlert(null);
      }, 1500);
  }

  const funcToggleMode = () => 
  {
      if(currMode === 'light')
      {
        //Conditions of Dark Mode
        setcurrMode('dark');
        document.body.style.backgroundColor = '#01011c';
        FuncAlert ("Mode Set To Dark" , "Dark");
      }
      else
      {
        //Conditions of Light Mode
        setcurrMode('light');
        document.body.style.backgroundColor = 'white';
        FuncAlert ("Mode Set to Light", "Light"); 

      }
  }

  return (
   <>
    
    <Navbar Title = "Text-Converter" mode = {currMode} toggleMode={funcToggleMode} />
    
    <Alerts message = {Alert}/>

    
    <BrowserRouter>
    
      <Routes>

       <Route path = "/" element = {<div className="container my-3">
          <TextForm heading = "Enter the text" mode={currMode}  alert = {FuncAlert}  />
          </div>}/>

        <Route path ="home" element = {
          <div className="container my-3">
          <TextForm heading = "Enter the text" mode={currMode}  alert = {FuncAlert}  />
          </div>
        }
        />

        {/* <Route  path='/about' element = {<About/>}/> */}
      

      </Routes>
    </BrowserRouter>
  </>

  );
}

export default App;



  
    
   