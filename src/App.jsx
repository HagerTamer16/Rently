import React from 'react';
import Navbar from './components/hager/Navbar'; 
import Hero from './components/hager/Hero';
import HowItWork from './components/hager/HowItWork';
import HowToRent from './components/hager/HowToRent';
import './index.css';



function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <HowItWork />
      <HowToRent />
      
  
    </div>
  );
}

export default App;