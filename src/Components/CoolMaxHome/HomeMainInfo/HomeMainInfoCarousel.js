import React from "react";
import "./homeMainInfoCarousel.css";
import Slider from "react-slick";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

function HomeMainInfoCarousel({ images }) {
  // Custom previous arrow component
  const CustomPrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="slick-arrow slick-prev" onClick={onClick}>
        <BsChevronLeft size={22} color="gray" />
      </div>
    );
  };

  // Custom next arrow component
  const CustomNextArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="slick-arrow slick-next" onClick={onClick}>
        <BsChevronRight size={22} color="gray" />
      </div>
    );
  };

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <div>
      <Slider {...settings} className="HomeMainInfoCarouselDiv">
        {images.map((image, index) => (
          <img
            className="HomeMainInfoCarouselImage"
            src={image}
            alt={`Slide ${index + 1}`}
          />
        ))}
      </Slider>
    </div>
  );
}

export default HomeMainInfoCarousel;
