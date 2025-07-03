import React from "react";
import Navbar from "../Navbar/Navbar";
import heroimage from "../../assets/heroimage.svg";

import bg from "../../assets/bg.svg";
import "./Header.css";

const Header = () => {
  return (
    <div className="wrapper">
      <Navbar></Navbar>
      <div className="hero-container">
        <div className="left">
          <p>Welcome To</p>
          <h1>
            <span className="gt">GT </span> Web Design
          </h1>
          <a href="#" className="btn">
            Get Started
          </a>
          <a href="#" className="btn cyan">
            Learn More
          </a>
        </div>

        <div className="right">
          <img src={heroimage} alt="" />
        </div>

        <img className="hero-bg" src={bg} alt="" />

        <div className="polygon-container">
          <img src="/Polygon1.svg" className="polygon1" alt="" />
          <img src="/Polygon1.svg" className="polygon2" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
