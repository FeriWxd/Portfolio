import React from "react";
import '../css/title.css';

const Title = () => {
  return (
    <div className="container" role="main" aria-label="Page Title and Description">
      <h1>Frontend Developer Specialized in React & Tailwind</h1>
      <h5>
        Passionate about building responsive, accessible, and scalable web applications.
        Focused on delivering clean UI, seamless UX, and high-performance solutions through modern JavaScript frameworks.
      </h5>

      <div className="button-container">
        <button className="button" data-hover-text="View My Work">
          <span>Portfolio</span>
        </button>
        <button className="button" data-hover-text="Let's Connect">
          <span>Contact</span>
        </button>
      </div>
    </div>
  );
};

export default Title;
