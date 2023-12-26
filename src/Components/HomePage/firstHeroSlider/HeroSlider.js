import React from "react";
import "./heroSlider.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import image1 from "../homePageAssets/images/cmpny.jpg";
import image2 from "../homePageAssets/images/pxfuel.jpg";
import image3 from "../homePageAssets/images/firstback.jpg";
import { Carousel } from "react-bootstrap";

function HeroSlider() {
  

  return (
    <div className="FirstHeroSlider">
      <Carousel
        fade
        pause="hover"
        interval={3000}
        draggable
        touch
        keyboard={false}
        slide
      >
        <Carousel.Item>
          <img className="d-block w-100 imageofSlide" src={image1} alt="First slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 imageofSlide" src={image2} alt="Second slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 imageofSlide" src={image3} alt="Third slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default HeroSlider;