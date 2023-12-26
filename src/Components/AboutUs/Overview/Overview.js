import React from "react";
import './overView.css';
import sideImageAboutUs from "../aboutUsAssets/images/cmpny.jpg";

function Overview() {
  return (
    <div>
      <div className="aboutUsOverviewContainer">
        <div className="aboutUsOverviewContent">
          <p className="aboutUsOverviewTitle">Company overview</p>
          <p className="aboutUsOverviewDescription">
            We have over 15 years of experience Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Aenean Lorem ipsm dolor sit the power
            of consectetur adi pisi cing elit, sed do eiusmod tempor
            xercitationemut labore. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Aenean bibendum nec risus et suscipit Curabitur
            metus ipsum. But I must explain to you how all this mistaken idea of
            denouncing pleasure and praising pain was born and I will give you a
            complete account of the system.
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
