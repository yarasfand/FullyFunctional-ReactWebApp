import React from "react";
import emp1 from "../aboutUsAssets/images/reviewer.png";
import "./aboutusTeam.css";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

function AboutUsTeam() {
  return (
    <div>
      <section id="team" className="team section-bg aboutUsTeamSect">
        <div className="container" data-aos="fade-up">
          <div className="section-title ">
            <h2>Our Team</h2>
            <p>
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur
              ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
              quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
              Quia fugiat sit in iste officiis commodi quidem hic quas.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-6" data-aos="zoom-in" data-aos-delay="100">
              <div className="member d-flex align-items-start">
                <div className="pic">
                  <img src={emp1} className="img-fluid" alt="" />
                </div>
                <div className="member-info">
                  <h4>Ali</h4>
                  <span>Chief Executive Officer</span>
                  <p>
                    Explicabo voluptatem mollitia et repellat qui dolorum quasi
                  </p>
                  <div className="social">
                    <a
                      href="https://google.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaTwitter />
                    </a>
                    <a
                      href="https://google.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a
                      href="https://google.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaInstagram />
                    </a>
                    <a
                      href="https://google.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                     <FaLinkedin />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-lg-6 mt-4 mt-lg-0"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <div className="member d-flex align-items-start">
                <div className="pic">
                  <img src={emp1} className="img-fluid" alt="" />
                </div>
                <div className="member-info">
                  <h4>Sarah</h4>
                  <span>Product Manager</span>
                  <p>
                    Aut maiores voluptates amet et quis praesentium qui senda
                    para
                  </p>
                  <div className="social">
                    <a
                      href="https://google.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaTwitter />
                    </a>
                    <a
                      href="https://google.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaFacebook />
                    </a>
                    <a
                      href="https://google.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaInstagram />
                    </a>
                    <a
                      href="https://google.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                     <FaLinkedin />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 mt-4" data-aos="zoom-in" data-aos-delay="300">
              <div className="member d-flex align-items-start">
                <div className="pic">
                  <img src={emp1} className="img-fluid" alt="" />
                </div>
                <div className="member-info">
                  <h4>William</h4>
                  <span>CTO</span>
                  <p>
                    Quisquam facilis cum velit laborum corrupti fuga rerum quia
                  </p>
                  <div className="social">
                    <a
                      href="https://google.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                     <FaTwitter />
                    </a>
                    <a
                      href="https://google.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaFacebook />
                    </a>
                    <a
                      href="https://google.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaInstagram />
                    </a>
                    <a
                      href="https://google.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                     <FaLinkedin />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 mt-4" data-aos="zoom-in" data-aos-delay="400">
              <div className="member d-flex align-items-start">
                <div className="pic">
                  <img src={emp1} className="img-fluid" alt="" />
                </div>
                <div className="member-info">
                  <h4>Affan</h4>
                  <span>Accountant</span>
                  <p>
                    Dolorum tempora officiis odit laborum officiis et et
                    accusamus
                  </p>
                  <div className="social">
                    <a
                      href="https://google.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                     <FaTwitter />
                    </a>
                    <a
                      href="https://google.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                     <FaFacebook />
                    </a>
                    <a
                      href="https://google.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaInstagram />
                    </a>
                    <a
                      href="https://google.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaLinkedin />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUsTeam;
