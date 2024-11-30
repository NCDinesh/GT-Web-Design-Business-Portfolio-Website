import React from "react";
import logo from "../../assets/logo.png";

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
          <a href="#" className="active">
            About
          </a>
        </li>

        <li>
          <a href="#"> Our Projects </a>
        </li>

        <li>
          <a href="#"> Testimonials </a>
        </li>

        <li>
          <a href="#"> Contact </a>
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
