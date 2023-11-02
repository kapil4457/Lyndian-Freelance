import React from "react";
import "./brand.css";
import { Link } from "react-router-dom";
import adidasLogo from "./Images/adidas.png";
import jgSummit from "./Images/jgsummit-logo.png";
import petroRabigh from "./Images/petro-rabigh-logo.png";
import lycraLogo from "./Images/lycra-logo.png";
import uplUnited from "./Images/upl-united-logo.png";
import glenmarkLogo from "./Images/Glenmark_Pharmaceuticals_logo.png";
import sabraLogo from "./Images/sabra_logo.webp";
import AbdulLatifLogo from "./Images/Abdul-Latif-Logo.png";
import Crest from "./Images/Crest.jpg";
import fonterra from "./Images/fonterra.png";
import moglix from "./Images/moglix.png";
import Novartis from "./Images/Novartis.png";
import sabic from "./Images/sabic.png";
import tata from "./Images/tata.jpg";
import yaskawa from "./Images/yaskawa.png";

function Brands() {
  return (
    <>
      <div className="themesInnovativebrands">
        <div className="Theams-Waper">
          <div className="back-div">
            <div className="Innovativebrands">
              <h2 className="theamheading">Our Customers</h2>
              <br />
            </div>
            <div className="tmain">
              <div className="tcontent">
                <img className="brandimage image1" src="/brand/Macin.png" />
              </div>

              <div className="tcontent">
                <img className="brandimage" src={adidasLogo} />
              </div>
              <div className="tcontent">
                <img className="brandimage" src={jgSummit} />
              </div>
              <div className="tcontent">
                <img className="brandimage" src={petroRabigh} />
              </div>
              <div className="tcontent">
                <img className="brandimage" src={lycraLogo} />
              </div>
              <div className="tcontent">
                <img className="brandimage" src={uplUnited} />
              </div>
              <div className="tcontent">
                <img className="brandimage" src={glenmarkLogo} />
              </div>
              <div className="tcontent">
                <img className="brandimage" src={sabraLogo} />
              </div>
              <div className="tcontent">
                <img className="brandimage" src={AbdulLatifLogo} />
              </div>
              <div className="tcontent">
                <img className="brandimage" src={Crest} />
              </div>
              <div className="tcontent">
                <img className="brandimage" src={fonterra} />
              </div>
              <div className="tcontent">
                <img className="brandimage" src={moglix} />
              </div>
              <div className="tcontent">
                <img className="brandimage" src={Novartis} />
              </div>
              <div className="tcontent">
                <img className="brandimage" src={sabic} />
              </div>
              <div className="tcontent">
                <img className="brandimage" src={tata} />
              </div>
              <div className="tcontent">
                <img className="brandimage" src={yaskawa} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Brands;
