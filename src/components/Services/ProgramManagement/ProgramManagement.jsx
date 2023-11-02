import React from "react";
import "./ProgramManagement.css";
import { NavLink } from "react-router-dom";
import pm_1 from "../Images/PM_1.jpg";
import pm_2 from "../Images/PM_2.jpg";
const ProgramManagement = () => {
  return (
    <div id="program-management-container">
      <div id="program-management-image-container">
        <img id="program-management-image" src={pm_1} alt="" />
        <h2 id="program-management-heading">Program Management</h2>

        <div id="program-management-crumbs">
          <NavLink to={"/"}>Home</NavLink>
          <span className="program-management-gap">
            <i className="fa-solid fa-chevron-right"></i>
          </span>
          <span className="program-management-current">Program Management</span>
        </div>
      </div>

      <div id="program-management-content">
        <img src={pm_2} alt="" />
        <div className="program-management-data">
          <h1>Program Management</h1>
          <span>
            <p>
              Having doubts about your products? Want to make sure its
              accessible? Or if its UI is fine? Or if the message you’re sending
              is consistent and on point? Thinking of seeking professional
              guidance?
            </p>
            <p>
              The Management Technician is here for you. Our highly qualified
              and trustworthy experts will do an audit of your design and will
              let you know if its “Just-so” or “Amazing.”
            </p>
            <p>Just drop a text/call to us. We’re always here for you.</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProgramManagement;
