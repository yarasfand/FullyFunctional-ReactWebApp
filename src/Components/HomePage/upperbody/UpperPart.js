import React from "react";
import sideImage from "../homePageAssets/images/banner1.png";
import "./upperPart.css";

function UpperPart() {
  return (
    <div className="upperPartContainer">
      <div className="upperPartContent">
        <p className="upperPartTitle">Welcome to Pioneer</p>
        <p className="upperPartDescription">
        Pioneer Time System is Time Recorder Company Sales distributes All Over Pakistan a complete line of Wall Clock, Tower Clock, Employee Time Clocks, document stamps, and software-based time and attendance systems. We have a network of over 2,000 Customers and two office supply outlets in the Lahore and Karachi.
        </p>
        <br />
        <p className="upperPartDescription">
        The company’s iconic Nippo punch clocks are widely recognized throughout the Pakistan. Our Model NTR-2600 and Model TimeBoy7, and biometric Facial Recognition Model PT-1000
        </p>
        <br/>
        <p>
        Pioneer Time System helps Hundreds of businesses around the country save time and money every day through more accurate time and attendance tracking and more efficient payroll processing. If you have any questions about our products, or comments about how we can help your business become more profitable, we would love to hear from you!
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
