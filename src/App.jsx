import React from 'react';
import Navbar from './components/hager/Navbar'; 
import Hero from './components/hager/Hero';
import './index.css';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      
      {/* السكشن ده بس عشان يظهر لك السكرول وتتطمني إن الموقع شغال */}
  <div style={{ height: '100vh', background: '#f9f9f9' }}>
    <h2 style={{ textAlign: 'center', paddingTop: '50px' }}>باقي محتوى الموقع هنا</h2>
  </div>
    </div>
  );
}

export default App;