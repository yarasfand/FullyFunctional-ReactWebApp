import React from "react";
import "./footer.css";
import { FcGoogle } from "react-icons/fc";
import { FaTwitter, FaLocationArrow, FaPhone } from "react-icons/fa";
import { SocialIcon } from "react-social-icons";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="container bottom_border">
        <div className="row">
          <div className="col-sm-4 col-md col-sm-4 col-12 col">
            <h5 className="headin5_amrc col_white_amrc pt2">Find us</h5>
            <p className="mb10">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
            <p>
              <FaLocationArrow /> 9878/25 sec 9 rohini 35
            </p>
            <p>
              <FaPhone /> +91-9999878398
            </p>
            <p>
              <FaPhone /> info@example.com
            </p>
          </div>

          <div className="col-sm-4 col-md col-6 col">
            <h5 className="headin5_amrc col_white_amrc pt2">Quick links</h5>
            <ul className="footer_ul_amrc">
              <li>
                <a href="http://webenlance.com">Image Rectoucing</a>
              </li>
              <li>
                <a href="http://webenlance.com">Clipping Path</a>
              </li>
              <li>
                <a href="http://webenlance.com">Hollow Man Montage</a>
              </li>
              <li>
                <a href="http://webenlance.com">Ebay & Amazon</a>
              </li>
              <li>
                <a href="http://webenlance.com">Hair Masking/Clipping</a>
              </li>
              <li>
                <a href="http://webenlance.com">Image Cropping</a>
              </li>
            </ul>
          </div>

          <div className="col-sm-4 col-md col-6 col">
            <h5 className="headin5_amrc col_white_amrc pt2">Quick links</h5>
            <ul className="footer_ul_amrc">
              <li>
                <a href="http://webenlance.com">Remove Background</a>
              </li>
              <li>
                <a href="http://webenlance.com">Shadows & Mirror Reflection</a>
              </li>
              <li>
                <a href="http://webenlance.com">Logo Design</a>
              </li>
              <li>
                <a href="http://webenlance.com">Vectorization</a>
              </li>
              <li>
                <a href="http://webenlance.com">Hair Masking/Clipping</a>
              </li>
              <li>
                <a href="http://webenlance.com">Image Cropping</a>
              </li>
            </ul>
          </div>

          <div className="col-sm-4 col-md col-12 col">
            <h5 className="headin5_amrc col_white_amrc pt2">Follow us</h5>
            <ul className="footer_ul2_amrc">
              <li>
                <a href="fwlkolw">
                  <FaTwitter className="fab fa-twitter fleft padding-right" />{" "}
                </a>
                <p>
                  Lorem Ipsum is simply dummy text of the printing...{" "}
                  <a href="hello">https://www.lipsum.com/</a>
                </p>
              </li>
              <li>
                <a href="ok">
                  <FaTwitter className="fab fa-twitter fleft padding-right" />{" "}
                </a>
                <p>
                  Lorem Ipsum is simply dummy text of the printing...{" "}
                  <a href="usfhik">https://www.lipsum.com/</a>
                </p>
              </li>
              <li>
                <a href="yes">
                  <FaTwitter className="fab fa-twitter fleft padding-right" />{" "}
                </a>
                <p>
                  Lorem Ipsum is simply dummy text of the printing...{" "}
                  <a href="ik">https://www.lipsum.com/</a>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container">
        <p className="text-center">
          Copyright @2017 | Designed With by{" "}
          <a href="okoadko" className="cmpnyanchor">
            Pioneer
          </a>
        </p>

        <ul className="social_footer_ul">
          <li>
            <a href="http://webenlance.com">
              <SocialIcon
                network="facebook"
                style={{ width: "35px", height: "35px" }}
              />
            </a>
          </li>
          <li>
            <a href="http://google.com" target="_blank" rel="noreferrer">
              <SocialIcon
                network="instagram"
                style={{ width: "35px", height: "35px" }}
              />
            </a>
          </li>
          <li>
            <a href="http://google.com" target="_blank" rel="noreferrer">
              <div className="lift-up">
                <FcGoogle style={{ width: "35px", height: "35px" }} />
              </div>
            </a>
          </li>
          <li>
            <Link href="http://google.com" target="_blank" rel="noreferrer">
              <SocialIcon
                network="linkedin"
                style={{ width: "35px", height: "35px" }}
              />
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
