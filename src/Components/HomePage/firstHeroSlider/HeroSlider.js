import {React, useEffect, useCallback} from "react";
import "./heroSlider.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import image1 from "../homePageAssets/images/banner1.png";
import image2 from "../homePageAssets/images/banner2.png";
import image3 from "../homePageAssets/images/banner3.png";
import image4 from "../homePageAssets/images/banner4.png";
import { Carousel } from "react-bootstrap";
  
function HeroSlider() {
  const checkAndSaveImagesToLocalStorage = useCallback(() => {
    try {
      const images = [
        { key: "banner1", value: image1 },
        { key: "banner2", value: image2 },
        { key: "banner3", value: image3 },
        { key: "banner4", value: image4 },
      ];

      // Check if any image is missing in local storage
      const anyImageMissing = images.some(
        ({ key }) => !localStorage.getItem(key)
      );

      if (anyImageMissing) {
        // If any image is missing, save all images to local storage
        saveImagesToLocalStorage(images);
      } else {
        console.log("Images are already present in local storage.");
      }
    } catch (error) {
      console.error(
        "Error checking and saving images to local storage:",
        error
      );
    }
  }, []);

  useEffect(() => {
    checkAndSaveImagesToLocalStorage(); // Call function to check and save images to local storage
  }, [checkAndSaveImagesToLocalStorage]);

  // Function to save images to local storage
  const saveImagesToLocalStorage = (images) => {
    images.forEach(({ key, value }) => {
      localStorage.setItem(key, value);
    });
    console.log("Images saved to local storage.");
  };



  return (
    <div className="FirstHeroSlider">
      <Carousel
        pause="hover"
        interval={6000}
        draggable
        touch
        keyboard={true}
        fade={true}
      >
        <Carousel.Item>
          <img
            className="d-block w-100 imageofSlide"
            src={localStorage.getItem("banner1")}
            alt="First slide"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 imageofSlide"
            src={localStorage.getItem("banner2")}
            alt="Second slide"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 imageofSlide"
            src={localStorage.getItem("banner3")}
            alt="Third slide"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 imageofSlide"
            src={localStorage.getItem("banner4")}
            alt="Fourth slide"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default HeroSlider;
