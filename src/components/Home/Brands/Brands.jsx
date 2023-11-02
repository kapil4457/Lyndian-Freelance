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
                <img
                  className="brandimage image1"
                  src="data:image/png;base64,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"
                />
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
