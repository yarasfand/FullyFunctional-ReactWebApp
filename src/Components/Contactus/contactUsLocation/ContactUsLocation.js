import React from "react";
import "./contactUsMap.css";

function ContactUsLocation() {
  return (
    <div className="map-code flex-column">
      <div>
        <h2 className="ContactUsLocationHeading">Our Location</h2>
      </div>
      <div className = "ContactUsLocationMap">
      <iframe
        title="Location On Map"
        src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Pioneer Times&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        width="100%"
        height="450"
        style={{ border: 0 }}
        aria-hidden="false"
      ></iframe>
      </div>
    </div>
  );
}

export default ContactUsLocation;
