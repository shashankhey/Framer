import React, { useState, useEffect } from "react";
import "./Header.css";
import logo from "../../assets/Logo.webp";
import rightArrow from '../../assets/right-arrow.webp'
const Header = () => {
  return (
    <div className="header-main">
      <div className="header-line">
        <p>
          This page is included in a free SaaS Website Kit.{" "}
          <span>View the complete kit <img src={rightArrow} /></span>
        </p>
      </div>
      <nav className="container">
        <img className="logo" src={logo} alt="" />
        <ul className="">
          <li>About</li>
          <li>Features</li>
          <li>Customers</li>
          <li>Updates</li>
          <li>Help</li>
          <li>
            <button className="btn">Get for free</button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
