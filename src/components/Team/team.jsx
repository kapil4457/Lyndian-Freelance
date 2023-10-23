import React from "react";
import "./team.css";
import { Link } from "react-router-dom";
 
const Team = () => {
  return (
    <div className="team-container">
      <h2 className="team-heading">Our Team</h2>
      <div className="team-members">
        {teamMembers.map((member, index) => (
          <div className="team-member" key={index}>
            <Link to={member.linkedin} className="team-link">
              <img
                src={member.image}
                alt={member.name}
                className="team-image"
              />
              <h3 className="team-member-name">{member.name}</h3>
              <p className="team-member-description">{member.description}</p>
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="linkedin-icon"
              >
                <span className="know-more">Know More</span> <i className="fab fa-linkedin"></i> 
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

const teamMembers = [
  {
    name: "Loknath Rao",
    image: "Picture1.jpg",
    description:
      "Philippines, India Supply Chain Planning, Scheduling, and Analytics = SAP SCM, IBP, BW, S4 ERP",
    linkedin: "/people/people1",
  },
  {
    name: "Nitin Thatte",
    image: "Picture2.jpg",
    description:
      "India Supply Network Optimizer – Logistics Specialist, Modeler, Supply Chain Engineer",
    linkedin: "https://www.linkedin.com/in/nitin-thatte-a616888/",
  },
  {
    name: "Denis Myagkov",
    image: "Picture3.jpg",
    description:
      "Germany Software Architect, Model Builder, Data Engineer - Supply Chain, Finance",
    linkedin: "https://www.linkedin.com/in/denismyagkov/",
  },
  {
    name: "R P Gupta",
    image: "Picture4.jpg",
    description: "Australia SAP Logistics, SAP IBP, Subject Matter Expert",
    linkedin: "https://www.linkedin.com/in/rpgupta/",
  },
  {
    name: "Abhishek Harshvardhan",
    image: "Picture5.jpg",
    description: "India SAP Technology Architect BW, HANA, BODS, ODATA, BTP",
    linkedin: "https://www.linkedin.com/in/abhishekharshvardhan/",
  },
  {
    name: "Vivek Viswanathan",
    image: "Picture6.png",
    description: "India Analytics, SAP SAC, SAP BW, BPC, DWC",
    linkedin: "https://www.linkedin.com/in/vivek-viswanathan-18ab1821/",
  },
];

export default Team;
