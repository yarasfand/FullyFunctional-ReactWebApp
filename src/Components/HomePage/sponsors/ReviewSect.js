import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "./reviewSect.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sp1 from "./sponsorAssets/sp1.png";
import sp2 from "./sponsorAssets/sp2.png";
import sp3 from "./sponsorAssets/sp3.png";
import sp4 from "./sponsorAssets/sp4.png";
import sp5 from "./sponsorAssets/sp5.png";
import sp6 from "./sponsorAssets/sp3.png";
import sp7 from "./sponsorAssets/sp1.png";
import sp8 from "./sponsorAssets/sp2.png";

function ReviewSect() {

  const [slidesToShow, setSlidesToShow] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 700) {
        setSlidesToShow(3);
      }
      else if (window.innerWidth < 400) {
        setSlidesToShow(1);
      }
       else {
        setSlidesToShow(4);
      }
    };
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [])


  const settings = {
    draggable:true,
    arrows: false,
    dots: false,
    infinite: true,
    slidesToShow: slidesToShow,
    
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  const sponsorImages = [sp1, sp2, sp3, sp4, sp5, sp6, sp7, sp8];

  return (
    <div>
      <section className="sponsorsSect">
        <h1 className="sponsors-heading">Our Esteemed Clients</h1>

        <Slider 
        {...settings} className="clients-slider">
          {sponsorImages.map((image, index) => (
            <div key={index} className="clients-imageDiv">
              <img
                className="sponsor-image"
                src={image}
                alt={`Sponsor ${index + 1}`}
              />
            </div>
          ))}
        </Slider>
      </section>
    </div>
  );
}

export default ReviewSect;
