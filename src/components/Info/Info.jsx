import React from "react";
import "./Info.css";
import imageP from "../../assets/ProductImage.webp";
import pyramidImage from "../../assets/pyramidInfo.webp";
import torusImage from "../../assets/torusInfo.webp";
import leaf from "../../assets/Leaf.webp";
import Bell from "../../assets/Bell.webp";
import Goal from "../../assets/Goal.webp";
import Lock from "../../assets/Lock.webp";
import rightArrow from "../../assets/rightArrowDark.webp";
const Info = () => {
  return (
    <div className="infoContainer">
      <div className="infoImageContainer">
        <div className="info">
          <img src={imageP} />
        </div>
      </div>
      <div className="itemContainer"></div>
      <div className="pyramidContainer">
        <img src={pyramidImage} />
      </div>
      <div className="torusContainer">
        <img src={torusImage} />
      </div>
      <div className="textContainer">
        <div className="frame1">
          <div className="frame1-img">
            <img src={leaf} alt="" />
          </div>
          <div className="frame1-text">
            <div className="frame1-heading">
              <h2>Integration Ecosystem</h2>
            </div>
            <div className="frame1-para">
              <p>Track your progress and motivate your efforts everyday.</p>
            </div>
          </div>
          <div className="frame1-learn">
            <p>Learn </p>
            <img src={rightArrow}/>
          </div>
        </div>
        <div className="frame1">
          <div className="frame1-img">
            <img src={Goal} alt="" />
          </div>
          <div className="frame1-text">
            <div className="frame1-heading">
              <h2>Goal setting and tracking</h2>
            </div>
            <div className="frame1-para">
              <p>Set and track goals with manageable task breakdowns.</p>
            </div>
          </div>
          <div className="frame1-learn">
            <p>Learn </p>
            <img src={rightArrow}/>
          </div>
        </div>
        <div className="frame1">
          <div className="frame1-img">
            <img src={Lock} alt="" />
          </div>
          <div className="frame1-text">
            <div className="frame1-heading">
              <h2>Secure data encryption</h2>
            </div>
            <div className="frame1-para">
              <p>Ensure your data’s safety with top-tier encryption.</p>
            </div>
          </div>
          <div className="frame1-learn">
            <p>Learn </p>
            <img src={rightArrow}/>
          </div>
        </div>
        <div className="frame1">
          <div className="frame1-img">
            <img src={Bell} alt="" />
          </div>
          <div className="frame1-text">
            <div className="frame1-heading">
              <h2>Customizable notifications</h2>
            </div>
            <div className="frame1-para">
              <p>Get alerts on tasks and deadlines that matter most.</p>
            </div>
          </div>
          <div className="frame1-learn">
            <p>Learn </p>
            <img src={rightArrow}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
