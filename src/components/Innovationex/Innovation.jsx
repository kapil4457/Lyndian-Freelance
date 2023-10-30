import React from "react";
import "./Innovation.css";

const iconMapping = {
  "Agri Business": { fontSize: "100px", iconClass: "fa-solid fa-wheat-awn", color: "#b5b7ba" },
  "Dairy": {fontSize: "100px", iconClass: "fa-solid fa-cow", color: "#b5b7ba" },
  "FMCG & CPG": {fontSize: "100px", iconClass: "fa-solid fa-truck-fast", color: "#b5b7ba" },
  "MRO & Spares": {fontSize: "100px", iconClass: "fa-solid fa-screwdriver-wrench", color: "#b5b7ba" },
  "FMCG & CPG": {fontSize: "100px", iconClass: "fa-solid fa-truck-fast", color: "#b5b7ba" },
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
              <i className={iconInfo.iconClass} style={{ color: iconInfo.color, fontSize: iconInfo.fontSize }} />
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
      image:
        "https://www.kinaxis.com/sites/default/files/styles/max_650x650_webp/public/paragraphs/block-list/plane-icon-white.png.webp?itok=qZ7ObwqD",
      title: "Dairy",
      backgroundImage:
        "/dairy.avif",
    },
    {
      image:
        "https://www.kinaxis.com/sites/default/files/styles/max_650x650_webp/public/paragraphs/block-list/car-icon-white.png.webp?itok=_zaf1OV7",
      title: "Agri Business",
      backgroundImage:
        "/agriBUS.webp",
    },
    {
      image:
        "https://www.kinaxis.com/sites/default/files/styles/max_650x650_webp/public/paragraphs/block-list/products-icon-white.png.webp?itok=fDXvul_B",
      title: "Retail",
      backgroundImage:
        "https://img.freepik.com/free-photo/female-warehouse-workers-checking-cardboard-box-before-final-packing-while-working-distribution-warehouse_637285-3972.jpg",
    },
    {
      image:
        "https://www.kinaxis.com/sites/default/files/styles/max_650x650_webp/public/paragraphs/block-list/computer-chip-icon-white.png.webp?itok=tTpabA3o",
      title: "FMCG & CPG",
      backgroundImage:
        "/fmcg.jpg",
    },
    {
      image:
        "https://www.kinaxis.com/sites/default/files/styles/max_650x650_webp/public/paragraphs/block-list/factory-icon-white.png.webp?itok=69nm556P",
      title: "MRO & Spares",
      backgroundImage:
        "/MROO.jpeg",
    },
    {
      image:
        "https://www.kinaxis.com/sites/default/files/styles/max_650x650_webp/public/paragraphs/block-list/test-tube-icon-white.png.webp?itok=CA9uOqHT",
      title: "Pharmaceuticals",
      backgroundImage:
        "https://media.istockphoto.com/id/1309776503/photo/female-medical-research-scientist-looks-at-biological-samples-before-analysing-it-under.jpg?s=612x612&w=0&k=20&c=U2weZr2beZqnJIf5DBgoQZG-e8gCEk--OcVDdmF3T7I=",
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
