import React, { useState, useEffect } from "react";
import "./homeMainInfo.css";
import HomeMainInfoCarousel from "./HomeMainInfoCarousel";
import image1 from "./HomeMainInfoAssets/image1.png";
import image2 from "./HomeMainInfoAssets/image2.png";
import image3 from "./HomeMainInfoAssets/image3.png";

function HomeMainInfo() {
  const images = [image1, image2, image3];

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update isVisible state to true when target is in viewport
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 } // Adjust the threshold value as needed
    );

    const target = document.querySelector(".HomeMainInfoWholePart");
    if (target) {
      observer.observe(target);
    }

    // Cleanup observer when component unmounts
    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, []);

  return (
    <div>

        <div className="HomeMainInfoWholePart">
      <div>
        <div>
          <h2 className="HomeMainInfoHeading">PRODUCTS & SOLUTIONS</h2>
        </div>

        <section className="HomeMainInfoSection">
          <div className="HomeMainInfoData">
            <div className="HomeMainInfo">
              <h5 className="HomeMainInfoHeading">COOLMAX International</h5>
              <p className="HomeMainInfoDescription">
                COOLMAX International provides services for Central
                Air-Conditioning, Industrial and Commercial Refrigeration,
                Commercial equipment, Professional Electronics and Industrial
                Products. Our products maintain the highest Indoor Air Quality
                standards (IAQ) via American Air Filters along with reliable and
                highly efficient ABB Motors. Alongside our comprehensive
                solutions, we provide installation, operation and maintenance of
                HVAC systems.
              </p>
              <div className="homeMainInfoButtonDiv">
                <a
                  href="#HomeMain"
                  className={isVisible ? "homeMainInfoButton" : "homeMainInfoButtonNoAnimate"}
                >
                  Read More
                </a>
              </div>
            </div>

            <div className="HomeMainInfo">
              <HomeMainInfoCarousel images={images} />
            </div>
          </div>
        </section>
      </div>

      <div>
        <section className="HomeMainInfoSection">
          <div className="HomeMainInfoData HomeMainInfoData2">
            <div className="HomeMainInfo">
              <HomeMainInfoCarousel images={images} />
            </div>
            <div className="HomeMainInfo">
              <h5 className="HomeMainInfoHeading">COOLMAX International</h5>
              <p className="HomeMainInfoDescription">
                COOLMAX International provides services for Central
                Air-Conditioning, Industrial and Commercial Refrigeration,
                Commercial equipment, Professional Electronics and Industrial
                Products. Our products maintain the highest Indoor Air Quality
                standards (IAQ) via American Air Filters along with reliable and
                highly efficient ABB Motors. Alongside our comprehensive
                solutions, we provide installation, operation and maintenance of
                HVAC systems.
              </p>
              <div className="homeMainInfoButtonDiv">
                <a
                  href="#HomeMain"
                  className={isVisible ? "homeMainInfoButton" : "homeMainInfoButtonNoAnimate"}
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
      </div>
      
    </div>
  );
}

export default HomeMainInfo;
