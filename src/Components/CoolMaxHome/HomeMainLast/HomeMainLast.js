import React, { useState, useEffect } from "react";
import "./homeMainLast.css";
import image1 from "./homeMainLastAssets/image1.png";
import image2 from "./homeMainLastAssets/image2.png";
import CountUp from "react-countup";

function HomeMainLast() {

    const [isVisible, setIsVisible] = useState(false);
    

    useEffect(() => {
        const observer = new IntersectionObserver(
          ([entry]) => {
            // Update isVisible state to true when target is in viewport
            setIsVisible(entry.isIntersecting);
          },
          { threshold: 0.5 } // Adjust the threshold value as needed
        );
    
        const target = document.querySelector(".HomeMainLastAchivementsDiv");
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
    <div className="HomeMainLast">
      <h3 className="HomeMainLastHeading">FEATURED PRODUCT</h3>

      <section className="HomeMainLastProducts">
        <div className="HomeMainLastContent">
          <h2 className="HomeMainLastContentHeading">
            Proudly Manufactured in <br />
            Pakistan
          </h2>
          <img
            src={image2}
            alt="featured item"
            className="HomeMainLastContentImage"
          />
          <p className="HomeMainLastContentDecript">
            Customized & Hygienic Modular Air Handling Units
          </p>
        </div>
        <div className="HomeMainLastContent">
          <img src={image1} alt="featured item" className="HomeMainLastImage" />
        </div>
      </section>

      <section>
        <div>
          <h3 className="HomeMainLastHeading">GROUP ACHIEVEMENTS</h3>
        </div>
        <div className="HomeMainLastAchivementsDiv">
          <div className="HomeMainLastAchivements">
            <i className="bi bi-trophy-fill HomeMainLastAchivements-icon"></i>
           {isVisible && (
              <CountUp start={0} end={10} delay={0}>
                {({ countUpRef }) => (
                  <div className="HomeMainLastAchivements-Counter">
                    <span ref={countUpRef} className="HomeMainLastAchivements-Counter" />
                  </div>
                )}
              </CountUp>
            )}

            <p className="HomeMainLastAchivements-description">
              A Decade Of Engineering Excellence
            </p>
          </div>
          
          <div className="HomeMainLastAchivements">
            <i className="bi bi-star-fill HomeMainLastAchivements-icon"></i>

            
            {isVisible && (
              <CountUp start={0} end={270} delay={0}>
                {({ countUpRef }) => (
                  <div className="HomeMainLastAchivements-Counter">
                    <span ref={countUpRef} className="HomeMainLastAchivements-Counter" />
                  </div>
                )}
              </CountUp>
            )}
            <p className="HomeMainLastAchivements-description">
              Over 200+ Satisfied Clients.
            </p>
          

          </div>
          <div className="HomeMainLastAchivements">
            <i className="bi bi-people-fill HomeMainLastAchivements-icon"></i>
            {isVisible && (
              <CountUp start={0} end={370} delay={0}>
                {({ countUpRef }) => (
                  <div className="HomeMainLastAchivements-Counter">
                    <span ref={countUpRef} className="HomeMainLastAchivements-Counter" />
                  </div>
                )}
              </CountUp>
            )}
            <p className="HomeMainLastAchivements-description">
              350 + Full-Time Trained Staff
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomeMainLast;
