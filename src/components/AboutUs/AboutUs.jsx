import React from "react";
import "./AboutUs.css";
import { NavLink } from "react-router-dom";
import backgroundImage from "./Images/background.jpg";
import img1 from "./Images/img1.jpg";
import img2 from "./Images/img2.jpg";
const AboutUs = () => {
  return (
    <div id="about-us-container">
      <div id="about-us-image-container">
        <img id="about-us-image" src={backgroundImage} alt="" />
        <h2 id="about-us-heading">About Us</h2>

        <div id="about-us-crumbs">
          <NavLink to={"/"}>Home</NavLink>
          <span className="about-us-gap">
            <i className="fa-solid fa-chevron-right"></i>
          </span>
          <span className="about-us-current">About Us</span>
        </div>
      </div>

      <div id="about-us-content">
        <img src={img1} alt="" />
        <div className="about-us-data">
          <h1>About Us</h1>
          <span>
            <p>
              Lydian's core mission centers around the convergence of business
              and technology consultancy, obliterating any artificial schism. In
              the pursuit of intelligent enterprise transformation, it's
              imperative to engage professionals endowed with a profound
              comprehension of both business acumen and technological potential.
              This symbiosis is indispensable for the development of pragmatic,
              purpose-driven, and cost-efficient solutions.
            </p>
            <p>
              Enterprises exhibit considerable structural heterogeneity, even
              within identical industries, characterized by disparate
              geographical operations, distinctive cost structures, and
              divergent negotiation modalities stemming from legal variances.
              The embrace of design thinking methodologies is crucial to adapt
              to the dynamic and multifaceted enterprise environment.
            </p>
            <p>
              At Lydian, our extensive knowledge and seasoned expertise
              harmoniously amalgamate these factors, facilitating the delivery
              of highly efficacious and technologically sophisticated business
              solutions.
            </p>
          </span>
        </div>
      </div>

      <div id="about-us-content">
        <div className="about-us-data">
          <h1>Why Choose Us?</h1>
          <span>
            <ol>
              <li>
                <b>Ethical Distinction:</b> We diverge from the typical gas
                lighter professionals, emphasizing a commitment to ethical,
                transparent service delivery.
              </li>
              <li>
                <b>Streamlined Onboarding:</b> Forego the need for expensive
                discovery workshops. A concise statement of purpose suffices for
                our streamlined onboarding process.
              </li>
              <li>
                <b>Resource Optimization Expertise:</b> Our forte lies in the
                efficient and productive utilization of your existing resources,
                leveraging the cutting-edge features and functionalities
                inherent in modern solutions.
              </li>
              <li>
                <b>Objective Business Recommendations:</b> Our commitment to
                objective advice means we'll propose the most suitable solutions
                for your business, regardless of any potential economic
                conflicts of interest.
              </li>
              <li>
                <b>Advanced Consultant Proficiency:</b> Our consultants possess
                an exceptional level of expertise, often pre-empting your
                requirements through advanced knowledge and data analysis.
              </li>
              <li>
                <b>Exhaustive Search for Optimal Solutions:</b> While we may not
                possess all-encompassing knowledge, we conduct comprehensive
                scans across the vast expanse of possibilities to present you
                with the most advantageous alternatives.
              </li>
            </ol>
          </span>
        </div>
        <img src={img2} alt="" />
      </div>
    </div>
  );
};

export default AboutUs;
