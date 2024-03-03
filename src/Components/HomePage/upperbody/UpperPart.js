import React from "react";
import sideImage from "../homePageAssets/images/banner1.png";
import "./upperPart.css";

function UpperPart() {
  return (
    <div className="upperPartContainer">
      <div className="upperPartContent">
        <p className="upperPartTitle">Welcome to Pioneer</p>
        <p className="upperPartDescription">
          We have over 15 years of experience Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Aenean Lorem ipsm dolor sit the power of
          consectetur adi pisi cing elit, sed do eiusmod tempor exercitationemut
          labore.
        </p>
        <br />
        <p className="upperPartDescription">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          bibendum nec risus et suscipit Curabitur metus ipsum.
        </p>
        <button className="upperPartbtn">
          <span className="upperPartbtn-label-down">READ MORE</span>
          <span className="upperPartbtn-label-down">READ MORE</span>
        </button>
      </div>
      <div className="upperPartImageContainer">
        <img className="upperPartImage" src={sideImage} alt="This is pic" />
      </div>
    </div>
  );
}

export default UpperPart;
