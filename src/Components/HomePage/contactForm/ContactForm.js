import { React, useRef, useState } from "react";

import "./contactForm.css";
import emailjs from "@emailjs/browser";
import { Container, Row, Col } from "react-bootstrap";

function ContactForm() {
  const form = useRef();
  const [showSuccess, setShowSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_s0q766k", "template_lbmba35", form.current, {
        publicKey: "sDWPwp0e3q0QAXpcp",
      })
      .then(() => {
        // Email sent successfully, show success notification
        setShowSuccess(true);
        // Reset form after successful submission
        e.target.reset();

        // Set a timeout to hide the success notification after 2 seconds
        setTimeout(() => {
          setShowSuccess(false);
        }, 4000);  
      })
      .catch((error) => {
        console.error("Email could not be sent:", error);
      });
  };

  return (
    <div>
      <div className="contactFormDiv">
        <Container className="contactFormDivContainer">
          <Row className="mb-5 mt-3">
            <Col lg="8">
              <h1 className="display-4 mb-2 ">Contact Us</h1>
              <hr className="t_border my-4 ml-0 text-left" />
            </Col>
          </Row>
          <Row className="sec_sp">
            <Col lg="5" className="mb-5">
              <h3 className="color_sec py-4">Get in touch</h3>
              <address>
                <strong>Email:</strong>
                <a
                  href="mailto:asim@pioneertimesystem.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  asim@pioneertimesystem.com
                </a>
                <br />
                <br />
                <p>
                  <strong>Phone:</strong>{" "}
                  <a
                    href="https://wa.me/923044976411"
                    target="_blank"
                    rel="noreferrer"
                  >
                    +(92) 304 4976411
                  </a>
                </p>
              </address>
              <p>
                <strong>Lahore Office: </strong> 1-Harson Street, Ravi Road,
                Lahore – Pakistan
              </p>
            </Col>
            <Col lg="7" className="d-flex align-items-center">
              <form
                ref={form}
                onSubmit={sendEmail}
                className="contact__form w-100"
              >
                <Row>
                  <Col lg="6" className="form-group">
                    <input
                      className="form-control"
                      id="name"
                      name="name"
                      placeholder="Name"
                      type="text"
                      required
                    />
                  </Col>
                  <Col lg="6" className="form-group">
                    <input
                      className="form-control rounded-0"
                      id="email"
                      name="email"
                      placeholder="Email"
                      type="email"
                      required
                    />
                  </Col>
                </Row>
                <textarea
                  className="form-control rounded-0"
                  id="message"
                  name="message"
                  placeholder="Message"
                  rows="5"
                  required
                ></textarea>
                <br />
                <Row>
                  <Col lg="12" className="form-group">
                    <button className="formbtn" type="submit">
                      Send
                    </button>
                  </Col>
                </Row>
              </form>
            </Col>
          </Row>
        </Container>
      </div>


      {showSuccess && (
        <div className="success-notification active">
          <div className="success-notification-div">
            <div className="success-notification-icon">
            <i class="bi bi-check-circle-fill"></i>
            </div>
            <div className="success-notification-text">
              <h4>Email sent successfully!</h4>
              <p>Our support will contact you soon.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ContactForm;
