import React from "react";
import "./Hero.css";
import visual from "../../assets/Visual.webp";
import halfTorus from "../../assets/half-torus.webp";
import cylinder from "../../assets/cylinder.webp";
import rightArrowDark from "../../assets/rightArrowDark.webp";
const Hero = () => {
  return (
    <div className="hero container" name="hero">
      <div className="hero-text">
        <div className="hero-left-text">
          <p className="version-text">Version 2.0 here!</p>
          <h1>Pathway to productivity</h1>
          <p className="description">
            Celebrate the joy of accomplishment with an app designed to track
            your progress, motivate your efforts, and celebrate your successes.
          </p>
          <div className="herobtnContainer">
            <button className="btn">Get Started </button>
            <div className="learnContainer">
              <p>Learn more</p>
              <img src={rightArrowDark} />
            </div>
          </div>
        </div>
        <div className="hero-img">
          <img src={visual} alt="hero" />
        </div>
      </div>
      <img className="torus" src={halfTorus} alt="" />
      <img className="cylinder" src={cylinder} alt="" />
    </div>
  );
};

export default Hero;
