import React from "react";
import "./Innovation.css";
import img1_1 from "./Images/img1_1.jpg";
import img1_2 from "./Images/img1_2.jpg";
import img2_1 from "./Images/img2_1.jpg";
import img2_2 from "./Images/img2_2.jpg";
import img3_1 from "./Images/img3_1.jpg";
import img3_2 from "./Images/img3_2.jpg";
import img4_1 from "./Images/img4_1.jpg";
import img4_2 from "./Images/img4_2.jpg";
import img5_1 from "./Images/img5_1.jpg";
import img5_2 from "./Images/img5_2.jpeg";
import img6_1 from "./Images/img6_1.jpg";
import img6_2 from "./Images/img6_2.jpg";
const iconMapping = {
  "Agri Business": {
    fontSize: "100px",
    iconClass: "fa-solid fa-wheat-awn",
    color: "#b5b7ba",
  },
  Dairy: { fontSize: "100px", iconClass: "fa-solid fa-cow", color: "#b5b7ba" },
  "FMCG & CPG": {
    fontSize: "100px",
    iconClass: "fa-solid fa-truck-fast",
    color: "#b5b7ba",
  },
  "MRO & Spares": {
    fontSize: "100px",
    iconClass: "fa-solid fa-screwdriver-wrench",
    color: "#b5b7ba",
  },
  "FMCG & CPG": {
    fontSize: "100px",
    iconClass: "fa-solid fa-truck-fast",
    color: "#b5b7ba",
  },
  // Add mappings for other titles here
};

const InnovationContainer = ({ title, image, backgroundImage }) => {
  const iconInfo = iconMapping[title];

  return (
    <>
      <a style={{ textDecoration: "none" }} href="">
        <div className="hover-container">
          <div className="InnovationBackImage">
            <img
              className="InnovationBackImg"
              src={`${backgroundImage}`}
              alt=""
            />
          </div>
          <div className="hover-content">
            {iconInfo ? ( // Check if there is an icon mapping for the title
              <i
                className={iconInfo.iconClass}
                style={{ color: iconInfo.color, fontSize: iconInfo.fontSize }}
              />
            ) : (
              <img className="Innovationimage" src={`${image}`} alt="" />
            )}
            <span className="InnovationP">{title}</span>
          </div>
        </div>
      </a>
    </>
  );
};

const Innovation = () => {
  const Innovationarr = [
    {
      image: `${img1_1}`,
      title: "Dairy",
      backgroundImage: `${img1_2}`,
    },
    {
      image: `${img2_1}`,
      title: "Agri Business",
      backgroundImage: `${img2_2}`,
    },
    {
      image: `${img3_1}`,
      title: "Retail",
      backgroundImage: `${img3_2}`,
    },
    {
      image: `${img4_1}`,
      title: "FMCG & CPG",
      backgroundImage: `${img4_2}`,
    },
    {
      image: `${img5_1}`,
      title: "MRO & Spares",
      backgroundImage: `${img5_2}`,
    },
    {
      image: `${img6_1}`,
      title: "Pharmaceuticals",
      backgroundImage: `${img6_2}`,
    },

    // Add more items as needed
  ];

  return (
    <>
      <div className="main-container-innovation">
        <h2 className="heading-innovation">
          Innovation and expertise in your industry
        </h2>
        <div className="InnovationContainerDIv">
          {Innovationarr.map((ele, key) => (
            <InnovationContainer
              title={ele.title}
              image={ele.image}
              backgroundImage={ele.backgroundImage}
              key={key}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Innovation;
