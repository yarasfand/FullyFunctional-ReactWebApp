import React from "react";
import "./Services.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import image1 from "../ServicesMid/ServicesMidAssets/s1.jpg";
import image2 from "../ServicesMid/ServicesMidAssets/s2.jpg";
import image3 from "../ServicesMid/ServicesMidAssets/s3.jpg";

const servicesData = [
  {
    title: "Service 1",
    description:
      "We have over 15 years of experience Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean Lorem ipsm dolor sit the power of consectetur adi pisi cing elit, sed do eiusmod tempor xercitationemut labore. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean bibendum nec risus et suscipit Curabitur metus ipsum. But I must explain to you how all this mistaken idea of denouncing.expound the actual teachings. of the great explorer of the truth, the master-builder of No one rejects, dislikes, or human happiness.",
    images: [image1, image2, image3],
  },
  {
    title: "Service 2",
    description:
      "Enhance your security with our cutting-edge surveillance solutions. Our cameras and monitoring systems provide high-resolution footage and real-time alerts, ensuring the safety of your premises.",
    images: [image2, image3, image1],
  },
  {
    title: "Service 3",
    description:
      "Upgrade your network infrastructure with our advanced networking solutions. We offer reliable and high-performance networking equipment to keep your business connected and running smoothly.",
    images: [image3, image1, image2],
  },
];

function Services() {
  return (
    <div className="ServicesContainer m-0">
      <div className="row m-0 ServicesContainerRow">
        <div className="col-md-3 additional-content">
          <div className="seviceContBox">
            <div className="seviceContBoxDiv">
              <p>
                how can we help you?
                <br /> Lorem ipsum dolor sit amet, consectetur adi pisi cing
                elit, sed do eiusmod tempor.
              </p>
              <button className="servicesContactbtn">
                <span className="servicesContactbtn-label-down">
                  <i className="bi bi-telephone-forward-fill serviceContTeleIconDown">
                    {" "}
                  </i>{" "}
                  CONTACT US
                </span>
                <span className="servicesContactbtn-label-down">
                  <i className="bi bi-telephone serviceContTeleIcon"></i> CONTACT US
                </span>
              </button>
            </div>
          </div>
        </div>
        <div
          className="col-md-8 services-carousel"
          style={{ overflowY: "hidden" }}
        >
          {servicesData.map((service, index) => (
            <div key={index}>
              <Carousel>
                {service.images.map((image, imageIndex) => (
                  <Carousel.Item key={imageIndex} className="w-60">
                    <img
                      className="d-block w-100"
                      src={image}
                      alt={`ServiceImage ${index + 1} ${imageIndex + 1}`}
                      style={{ height: "65vh", margin: "auto" }}
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
              <div className="service-description">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
