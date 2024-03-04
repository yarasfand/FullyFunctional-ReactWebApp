import React from "react";
import "./contactUsMap.css";

function ContactUsLocation() {
  return (
    <div className="map-code flex-column">
      <div>
        <h2 className="ContactUsLocationHeading">Our Location</h2>
      </div>
      <div className="ContactUsLocationMap">
        <iframe
          title="Location On Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.597696237149!2d74.31414719999999!3d31.567025199999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39191b8994aae565%3A0xcaf43ada0de2e78a!2sPioneer%20Time%20System!5e0!3m2!1sen!2sus!4v1646502786679!5m2!1sen!2sus"
          width="100%"
          height="450"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}

export default ContactUsLocation;
