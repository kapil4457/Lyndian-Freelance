import React from "react";
import "./WhyChooseUs.css";
import { NavLink } from "react-router-dom";
import img1 from "./Images/img1.jpg";
const WhyChooseUs = () => {
  return (
    <div id="why-choose-us-choose-area">
      <div id="why-choose-us-container">
        <div id="why-choose-us-feature_main_wrap">
          <div id="why-choose-us-row" className="align-items-centre">
            <div id="why-choose-us-column">
              <img id="why-choose-us-about-image" src={img1} alt="" />
            </div>
            <div id="why-choose-us-column">
              <div id="why-choose-us-features_info">
                <h2>Why Choose Us?</h2>
                <p>
                  At Lydian, we bridge the gap between business and technology
                  consultancy, creating pragmatic, cost-efficient solutions in a
                  dynamic enterprise environment. Choose us for:
                </p>
                <ul>
                  <li>Ethical Distinction</li>
                  <li>Streamlined Onboarding</li>
                  <li>Resource Optimization Expertise</li>
                  <li>Objective Business Recommendations</li>
                  <li>Advanced Consultant Proficiency</li>
                  <li>Exhaustive Search for Optimal Solutions</li>
                </ul>
                <div id="why-choose-us-about-btn">
                  <NavLink id="why-choose-us-boxed-btn3-line" to={"/about-us"}>
                    About Us
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
