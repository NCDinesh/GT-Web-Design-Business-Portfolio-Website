import React from "react";
import "./AboutUs.css";
import About from "../../assets/About.png";

const AboutUs = () => {
  return (
    <>
      <div className="wrapper">
        <div className="section about">
          <h2>About Us</h2>
          <div className="about-container">
            <div className="left">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                malesuada pharetra ut feugiat quisque odio nulla leo. Facilisis
                rhoncus gravida integer risus, ac vulputate a. Elementum
                fermentum feugiat nunc cras ac orci, amet sapien. Ut quis est,
                pellentesque in et ipsum. Enim eget faucibus eget enim leo nisl
                lorem feugiat feugiat. Pellentesque duis id vel tellus in nisi,
              </p>
              <br />
              <p>
                enim tellus id. Sit dignissim dictum sit integer tortor
                porttitor erat risus libero. Netus pulvinar vivamus nec, nec
                morbi.
              </p>
            </div>

            <div className="right">
              <img src={About} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
