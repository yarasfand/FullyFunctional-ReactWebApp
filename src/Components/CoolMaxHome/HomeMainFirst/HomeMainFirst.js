import React from "react";
import image1 from "./homeMainFirstAssets/firstimage.png";
import "./homeMainFirst.css";

function HomeMainFirst() {
  return (
    <section className = "homeMainFirstSection">
      <div className="homeMainFirstSectionData">
        <div>
        <h2>
          Group of <br /> Companies
        </h2>
        <p>
          Established in 2009 , with a vision to deliver world class <br/> engineering
          services & solutions. Creating smarter  <br/>products by introducing highest
          quality product  <br/> standards in the field of HVACR, Building Technologies
          and Construction.
        </p>
        </div>
      </div>

      <div className="homeMainFirstSectionData homeMainFirstSectionImageDiv">
        <img src={image1} alt="Logo" className = "homeMainFirstSectionImage"/>
      </div>
    </section>
  );
}

export default HomeMainFirst;
