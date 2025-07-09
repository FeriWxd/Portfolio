import React from "react";
import '../css/title.css';

const Title = () => {
  return (
    <div className="container" role="main" aria-label="Page Title and Description">
      <h1>Stunning Design & Webflow Development for Startups</h1>
      <h5>
        Expert Web design and Webflow development agency to help you achieve your
        digital goals. We help startups and enterprises to scale and raise more.
        Your success is our code.
      </h5>

      <div className="button-container">
        <button className="button" data-hover-text="Let's Start!">
          <span>Hover Over Me</span>
        </button>
        <button className="button" data-hover-text="Contact Us">
          <span>Hover Over Me</span>
        </button>
      </div>
    </div>
  );
};

export default Title;
