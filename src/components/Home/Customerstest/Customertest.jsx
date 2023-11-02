import React from "react";
import "./Customertest.css";

const Customertest = () => {
  const elements = [
    {
      image:
        "/brand/SOHILSANGHVI.jpeg",
      title:
        "Dependability is what comes to mind when I think about Lydian. His deep domain knowledge of Demand planning & forecasting which entailed preparing detailed selection criteria (software & hardware) to choose the most suitable forecasting tool for Glenmark’s India Formulation Business. ",
      name: "Sohil Sanghvi",
      position: "Deputy General Manager: Demand Planning & Distribution",
    },
    {
      image:
        "/brand/WillieConradie.jpeg",
      title:
        "I worked with Lydian on the SAP ECC, APO and EWM implementation for Abdul Latif Jameel in Saudi Arabia. Lok was part of our team as the Service Provider responsible for the implementation of the solution, responsible for the implementation of APO.",
      name: "Willie Conradie",
      position: "SAP S/4 Delivery Lead Integration Manager",
    },

    {
      image:
        "/brand/GraemeMclean.jpeg",
      title:
        "During this time Lydian worked on secondment in the role of SAP APO Solution Architect. He was a pleasure to work with and showed a high skill level in implementing SAP APO. He has a cheerful manner and shows a high degree of flexibility often working long hours to ensure complete client satisfaction.",
      name: "Graeme Mclean",
      position: "CEO at Consulting Access Ltd",
    },
    {
      image:
        "/brand/DhrubojyotiPurkayastha.jpeg",
      title:
        "Lydian has managed to apply his understanding of logistics as a quantitative science and transformed this function into a measurable and trackable system to not only understand the despatch role, but to analyse parameters such as depot level order quantities, holding cost, net effective freight cost, etc.",
      name: "Dhrubojyoti Purkayastha",
      position: "Business Transformation Expert | East Africa | India",
    },
    {
      image:
        "/brand/KrishnaTurumella.jpeg",
      title:
        "Lydian is an an excellent SCM consultant I have ever met. Even though, it was a short stint, I enjoyed working with LOK to investigate the possibilities of tools and solutions to recommend the best suited software for Production Planning. ",
      name: "Krishna Turumella",
      position: "Director at Affine Digital Technologies",
    },

    {
      image:
        "/brand/BiplabPakrashi.jpeg",
      title:
        "Lydian joined Adaniwilmar as logistic officer in the year 2000. in fact I still remember him as a person who had a job in a Dairy industry but wanted a job in Logistic. It is passion for this profession that led him into it. During his tenure I have always found him a person who had a holistic approach to supply chain management.",
      name: "Biplab Pakrashi",
      position:
        "Leader • Learner • Strategist • Executioner || S&OP • GTM • SCM ",
    },

    {
      image:
        "/brand/encrypted.jpeg",
      title:
        "Lydian has been very helpful not only in bringing his expertise to our group but in making sure that he transfers that expertise to the team. He is a delight to work with given his positive attitude and professionalism. ",
      name: "Teh Opinion",
      position: "President & CEO at bneXt",
    },
  ];
  return (
    <>
      <div className="main-container">
        <h2 className="headingcoustomer">Customer stories</h2>

        <div className="containercostumer">
          {elements.map((ele, key) => (
            <>
              {/* <img src={ele.image} alt="" />
          <p>{ele.title}</p> */}
              <div className="costumercard">
                <div className="content">
                  <img src={ele.image}></img>
                  <div className="cardContent">
                    <h3>
                      {ele.name}
                      <br></br>
                      <span>{ele.position}</span>
                    </h3>
                  </div>
                </div>
                <p>{ele.title}</p>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Customertest;
