import React from "react";
import "./heroSlider.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import image1 from "../homePageAssets/images/banner1.png";
import image2 from "../homePageAssets/images/banner2.png";
import image3 from "../homePageAssets/images/banner3.png";
import image4 from "../homePageAssets/images/banner4.png";
import { Carousel } from "react-bootstrap";

function HeroSlider() {
  

  return (
    <div className="FirstHeroSlider">
      <Carousel
        pause="hover"
        interval={6000}
        
        draggable
        touch
        keyboard={true}
        fade = {true}
      >
        <Carousel.Item >
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
        <Carousel.Item>
          <img className="d-block w-100 imageofSlide" src={image4} alt="Fourth slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default HeroSlider;