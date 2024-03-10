import React from "react";
import logo from "./footerAssets/logo.png";
import "./footer.css";
import { FcGoogle } from "react-icons/fc";
import { FaLocationArrow, FaPhone, FaMailBulk } from "react-icons/fa";
import { SocialIcon } from "react-social-icons";

function Footer() {
  return (
    <footer className="footer ">
      <div className="container bottom_border">
        <div className="row">
          <div className="col-sm-4 col-md col-sm-4 col-12 col d-flex justify-content-center align-items-center">
            <img src={logo} alt="Logo" style={{ margin: "auto" }} />
          </div>

          <div className="col-sm-4 col-md col-sm-4 col-12 col text-center">
            <h5 className="headin5_amrc col_white_amrc pt2">Find us</h5>
            <p className="mb10">
              Pioneer Time System distributes a range of time recording products
              across Pakistan, serving over 2,000 customers with offices in
              Lahore and Karachi.
            </p>
            <p>
              <FaLocationArrow style={{ marginRight: "5px" }} />
              1-Harson Street, Ravi Road, Lahore
            </p>
            <p>
              <FaPhone style={{ marginRight: "5px" }} />
              +(92) 304 4976411
            </p>
            <p>
              <FaMailBulk style={{ marginRight: "5px" }} />{" "}
              asim@pioneertimesystem.com
            </p>
          </div>

          <div className="col-sm-4 col-md-4 col-6 mx-auto text-center">
            <h5 className="headin5_amrc col_white_amrc pt2">Quick Links</h5>
            <ul className="footer_ul_amrc no-bullets">
            <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#products">Products</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#about-us">About us</a>
              </li>
              <li>
                <a href="#contact-us">Contact us</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container">
        {/* <p className="text-center">
          Copyright @2017 | Designed With by{" "}
          <a href="okoadko" className="cmpnyanchor">
            Pioneer
          </a>
        </p> */}

        <ul className="social_footer_ul">
          <li>
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
          </li>
          <li>
            <a
              href="https://www.instagram.com/pioneertimesystem"
              target="_blank"
              rel="noreferrer"
            >
              <SocialIcon
                network="instagram"
                style={{ width: "35px", height: "35px" }}
              />
            </a>
          </li>
          <li>
            <a
              href="http://google.com/search?q=pioneer+clocks"
              target="_blank"
              rel="noreferrer"
            >
              <div className="lift-up">
                <FcGoogle style={{ width: "35px", height: "35px" }} />
              </div>
            </a>
          </li>
          <li>
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
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
