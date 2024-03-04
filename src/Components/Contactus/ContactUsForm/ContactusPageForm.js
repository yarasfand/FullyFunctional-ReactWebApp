import React from "react";
import "./contactPageForm.css";
//import companyContactImage from "../contactUsAssets/images/cmpny.jpg";
import { SocialIcon } from "react-social-icons";

function ContactUsPageForm() {
  return (
    <div>
      <div className="contactUsFormcontainer">
        <div className="form-container">
          <div className="left-container">
            <div className="left-inner-container">
              <h2>Let's Chat</h2>
              <p>
                Whether you have a question, want to start a project, or simply
                want to connect.
              </p>
              <br />
              <p>Feel free to send me a message in the contact form</p>
              <div className="social contactUsSocial">
                <a
                  href="https://www.facebook.com/pioneertimesystem"
                  target="_blank"
                  rel="noreferrer"
                >
                  <SocialIcon
                    network="facebook"
                    style={{ width: "35px", height: "35px" }}
                  />
                </a>
                <a 
                  href="https://www.instagram.com/pioneertimesystem"
                  target="_blank"
                  rel="noreferrer"
                >
                  <SocialIcon
                    network="instagram"
                    style={{ width: "37px", height: "37px" }}
                  />
                </a>
                <a
                    href="https://www.linkedin.com/company/pioneer-time-system"
                    target="_blank"
                    rel="noreferrer"
                  >
                  <SocialIcon
                    network="linkedin"
                    style={{ width: "35px", height: "35px" }}
                  />
                </a>
                <a
                    href= "https://wa.me/923044976411"
                    target="_blank"
                    rel="noreferrer"
                  >
                  <SocialIcon
                    network="whatsapp"
                    style={{ width: "35px", height: "35px" }}
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="right-container">
            <div className="right-inner-container">
              <form action="#">
                <h2 className="lg-view">Contact</h2>
                <h2 className="sm-view">Let's Chat</h2>
                <p>* Required</p>
                <input
                  type="text"
                  placeholder="Name *"
                  className="contactUsInput"
                />
                <input
                  type="email"
                  placeholder="Email *"
                  className="contactUsInput"
                />
                <input
                  type="phone"
                  placeholder="Phone"
                  className="contactUsInput"
                />
                <textarea
                  rows="4"
                  placeholder="Message"
                  className="contactUsTextArea"
                
                ></textarea>
                <button className="contactUsSubmit"> Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUsPageForm;
