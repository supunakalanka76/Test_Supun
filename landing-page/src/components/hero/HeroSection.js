import React from "react";
import './HeroSection.css'; // Import the CSS file

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="background-shapes">
        <div className="circle left-top"></div>
        <div className="circle right-bottom"></div>
      </div>
      <div className="content-container">
        <div className="text-container">
          <h1>
            Welcome to
            <br />
            our company...
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat,
          </p>
        </div>
        <div>
          <img
            src="https://cdn.pixabay.com/photo/2020/05/18/16/17/social-media-5187243_960_720.png"
            alt="Data visualization illustration"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
