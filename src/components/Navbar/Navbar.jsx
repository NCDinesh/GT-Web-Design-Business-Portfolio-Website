import React from "react";
import logo from "../../assets/logo.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="desktop-nav">
      <div className="logo">
        <a href="#">
          <img src={logo} alt="" />
        </a>
      </div>

      <ul className="menu-items">
        <li>
          <a href="#about">About</a>
        </li>

        <li>
          <a href="#projects"> Our Projects </a>
        </li>

        <li>
          <a href="#testimonials"> Testimonials </a>
        </li>

        <li>
          <a href="#contact"> Contact </a>
        </li>

        <li>
          <a href="#" className="btn">
            Get Started
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
