import React from "react";
import "./overView.css";
import sideImageAboutUs from "../aboutUsAssets/images/cmpny.jpg";

function Overview() {
  return (
    <div>
      <div className="aboutUsOverviewContainer">
        <div className="aboutUsOverviewContent">
          <p className="aboutUsOverviewTitle">
            <strong>Welcome To Pioneer Time System</strong>
          </p>
          <p className="aboutUsOverviewDescription">
            Pioneer Time System is Time Recorder Company Sales distributes All
            Over Pakistan a complete line of Wall Clock , Tower Clock , Employee
            Time Clocks, document stamps, and software-based time and attendance
            systems. We have a network of over 2,000 Customers and two office
            supply outlets in the Lahore and Karachi.
          </p>

          <br />

          <p>
            The company’s iconic Nippo punch clocks are widely recognized
            throughout the Pakistan. Our Model NTR-2600 and Model TimeBoy7, and
            biometric Facial Recognition Model PT-1000
          </p>

          <br />

          <p>
            Pioneer Time System helps Hundreds of businesses around the country
            save time and money every day through more accurate time and
            attendance tracking and more efficient payroll processing. If you
            have any questions about our products, or comments about how we can
            help your business become more profitable, we would love to hear
            from you!
          </p>
        </div>
        <div className="aboutUsOverviewImageContainer">
          <img
            className="aboutUsOverviewImage"
            src={sideImageAboutUs}
            alt="This is pic"
          />
        </div>
      </div>
    </div>
  );
}

export default Overview;
