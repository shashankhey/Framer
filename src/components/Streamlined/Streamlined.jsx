import React from "react";
import "./Streamlined.css";
import cube from "../../assets/cube.webp";
import helix from "../../assets/helix.webp";

const Streamlined = () => {
  return (
    <div className="box-container">
      <div className="streamlined-container">
        <div className="item-box">
          <div className="imageContainer">
            <img src={helix} />
          </div>
          <div className="text-container">
            <div className="heading">
              <h4>Integration ecosystem</h4>
            </div>
            <div className="description">
              <p>
                Enhance your productivity by connecting with your favorite
                tools, keeping all your essentials in one place.
              </p>
            </div>
          </div>
        </div>
        <div className="item-box">
          <div className="imageContainer">
            <img src={cube} />
          </div>
          <div className="text-container">
            <div className="heading">
              <h4>Goal setting and tracking</h4>
            </div>
            <div className="description">
              <p>
                Define and track your goals, breaking down objectives into
                achievable tasks to keep your targets in sight.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Streamlined;
