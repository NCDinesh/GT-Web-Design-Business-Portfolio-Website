import React from "react";
import "./Brands.css";
import Google from "../../assets/Google.png";
import Microsoft from "../../assets/Microsoft.png";
import Netflix from "../../assets/Netflix.png";
import Unity from "../../assets/Unity.png";
import Amazon from "../../assets/Amazon.png";

const Brands = () => {
  return (
    <>
      <div className="wrapper">
        <div className="brands-section">
          <h2>Our Clients</h2>
          <div className="brand-container">
            <img src={Microsoft} alt="" />
            <img src={Google} alt="" />
            <img src={Netflix} alt="" />
            <img src={Unity} alt="" />
            <img src={Amazon} alt="" />
          </div>
        </div>
      </div>
      ;
    </>
  );
};

export default Brands;
