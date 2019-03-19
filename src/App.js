import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Personas from './Components/persona';
import Menuside from './Components/Navbar';
import Menutop from './Components/Menu'
import './dashboard.css'
class App extends Component 
{
  render() 
  {
  return (
  <div>
    
   <Menuside /> 
   
  <Menutop />
  
  </div>
      
  )  
  }
}export default App;
