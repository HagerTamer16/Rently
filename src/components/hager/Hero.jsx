import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="bg-patterns"></div>
      <div className="hero-container">
        <div className="hero-content">
          <h1>
            Drive when you want <br />
            <span className="share-wrapper">
              Share
              <img src="src/assets/images/Vector 1.svg" alt="underline" className="underline-img" />
            </span> 
            {" "}when you don't
          </h1>
          
          <p>
            Discover your next adventure with Rently. we're here to <br />
            provide you with a seamless car rental experience.
          </p>
          <p className="cta-text">Let's get started on your journey.</p>

          <div className="app-buttons">
            <img src="src/assets/images/image 2.png" alt="Google Play" />
            <img src="src/assets/images/image 3.png" alt="App Store" />
          </div>
        </div>
        <div className="hero-image">
          <img src="src/assets/images/car 2 1.png" alt="Blue Porsche" />
        </div>
      </div>
    </section>
  );
};

export default Hero;