// src/components/Hero.js
import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container">
        <h1>Welcome to My Landing Page</h1>
        <p>Your solution to everything tech!</p>
        <button className="cta-button">Get Started</button>
      </div>
    </section>
  );
}

export default Hero;
