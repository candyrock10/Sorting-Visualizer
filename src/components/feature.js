// src/components/Features.js
import React from 'react';
import './Features.css';

function Features() {
  return (
    <section className="features" id="features">
      <div className="container">
        <h2>Amazing Features</h2>
        <div className="features-grid">
          <div className="feature">
            <h3>Feature 1</h3>
            <p>Description of feature 1.</p>
          </div>
          <div className="feature">
            <h3>Feature 2</h3>
            <p>Description of feature 2.</p>
          </div>
          <div className="feature">
            <h3>Feature 3</h3>
            <p>Description of feature 3.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
