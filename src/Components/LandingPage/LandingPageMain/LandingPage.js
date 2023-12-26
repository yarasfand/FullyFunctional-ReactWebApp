import React, { useState, useEffect, useCallback } from "react";
import { Link, Element, scroller } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import { useSwipeable } from "react-swipeable";
import cmpny1 from "../LandingPageAssets/cmpny1.jpg";
import cmpny2 from "../LandingPageAssets/cmpny2.jpg";
import cmpny3 from "../LandingPageAssets/cmpny3.jpg";
import cmpny4 from "../LandingPageAssets/cmpny4.jpg";
import cmpny5 from "../LandingPageAssets/cmpny5.jpg";
import "./LandingPage.css";

function LandingPage() {
  const initialSlideNo = parseInt(localStorage.getItem("slideNo")) || 0;
  const [slideNo, setSlideNo] = useState(initialSlideNo);
  const [isActive, setIsActive] = useState(true);

  function defSlideNo(noFromPoint) {
    setSlideNo(noFromPoint);
  }

  useEffect(() => {
    // Store the current slideNo in localStorage
    localStorage.setItem("slideNo", slideNo.toString());
    console.log(slideNo);
  }, [slideNo]);

  useEffect(() => {
    console.log(slideNo);
  }, [slideNo]);

  const handleSwipe = (direction) => {


    if (direction === "Up" && slideNo < 4) {
      // Swipe up
      setSlideNo((prevSlide) => {
        const newSlide = prevSlide + 1;
        if (newSlide <= 4) {
          scroller.scrollTo(`section${newSlide + 1}`, {
            smooth: true,
            duration: 300,
          });
          return newSlide;
        }
        return prevSlide;
      });
    } else if (direction === "Down" && slideNo > 0) {
      // Swipe down
      setSlideNo((prevSlide) => {
        const newSlide = prevSlide - 1;
        if (newSlide >= 0) {
          scroller.scrollTo(`section${newSlide + 1}`, {
            smooth: true,
            duration: 300,
          });
          return newSlide;
        }
        return prevSlide;
      });
    }

  };

  const handleWheel = (event) => {
    if (isActive) {
      setIsActive(false);

      if (event.deltaY > 0 && slideNo < 4) {
        // Mouse wheel down
        setSlideNo((prevSlide) => {
          const newSlide = prevSlide + 1;
          if (newSlide <= 4) {
            scroller.scrollTo(`section${newSlide + 1}`, {
              smooth: true,
              duration: 300,
            });
            return newSlide;
          }
          return prevSlide;
        });
      } else if (event.deltaY < 0 && slideNo > 0) {
        // Mouse wheel up
        setSlideNo((prevSlide) => {
          const newSlide = prevSlide - 1;
          if (newSlide >= 0) {
            scroller.scrollTo(`section${newSlide + 1}`, {
              smooth: true,
              duration: 300,
            });
            return newSlide;
          }
          return prevSlide;
        });
      }

      // Reset isActive after 2 seconds
      const sleepTimeout = setTimeout(() => {
        setIsActive(true);
      }, 2000);

      return () => clearTimeout(sleepTimeout); // Cleanup the timeout on component unmount
    }
  };

  const handleArrowKey = useCallback(
    (event) => {
      if (event.key === "ArrowUp" && slideNo > 0) {
        // Arrow key up
        setSlideNo((prevSlide) => {
          const newSlide = prevSlide - 1;
          if (newSlide >= 0) {
            scroller.scrollTo(`section${newSlide + 1}`, {
              smooth: true,
              duration: 200,
            });
            return newSlide;
          }
          return prevSlide;
        });
      } else if (event.key === "ArrowDown" && slideNo < 4) {
        // Arrow key down
        setSlideNo((prevSlide) => {
          const newSlide = prevSlide + 1;
          if (newSlide <= 4) {
            scroller.scrollTo(`section${newSlide + 1}`, {
              smooth: true,
              duration: 300,
            });
            return newSlide;
          }
          return prevSlide;
        });
      }
    },
    [slideNo]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleArrowKey);

    return () => {
      document.removeEventListener("keydown", handleArrowKey);
    };
  }, [handleArrowKey]);

  const handlers = useSwipeable({
    onSwipedUp: () => handleSwipe("Up"),
    onSwipedDown: () => handleSwipe("Down"),
  });

  const renderDots = () => {
    const dots = [];
    for (let i = 0; i < 5; i++) {
      dots.push(
        <span
          key={i}
          className={`dot ${i === slideNo ? "active" : ""}`}
          onClick={() => {
            setSlideNo(i);
            scroller.scrollTo(`section${i + 1}`, {
              smooth: true,
              duration: 300,
            });
          }}
        ></span>
      );
    }
    return dots;
  };

  useEffect(() => {
    document.body.style.height = "100vh";
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.height = ""; // Reset to the default value
      document.body.style.overflow = ""; // Reset to the default value
    };
  }, []);

  return (
    <div {...handlers} onWheel={handleWheel}>
      <div>
        <h2 className="landingPageHeading">Pioneer Time Systems</h2>
        <nav className="itsnav">
          <ul>
            <li>
              <Link
                to="section1"
                spy={true}
                smooth={true}
                duration={300}
                onClick={() => defSlideNo(0)}
                className={`landingPageTitle ${slideNo === 0 ? "active" : ""
                  }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="section2"
                spy={true}
                smooth={true}
                duration={300}
                onClick={() => defSlideNo(1)}
                className={`landingPageTitle ${slideNo === 1 ? "active" : ""
                  }`}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="section3"
                spy={true}
                smooth={true}
                duration={300}
                onClick={() => defSlideNo(2)}
                className={`landingPageTitle ${slideNo === 2 ? "active" : ""
                  }`}
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                to="section4"
                spy={true}
                smooth={true}
                duration={300}
                onClick={() => defSlideNo(3)}
                className={`landingPageTitle ${slideNo === 3 ? "active" : ""
                  }`}
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                to="section5"
                spy={true}
                smooth={true}
                duration={300}
                onClick={() => defSlideNo(4)}
                className={`landingPageTitle ${slideNo === 4 ? "active" : ""
                  }`}
              >
                About Us
              </Link>
            </li>
          </ul>
        </nav>

        <div className="dot-container">{renderDots()}</div>
        <Element name="section1" className="element">
          <div className="landingImageDiv">
            <RouterLink to="/home">
              <img src={cmpny1} alt="cmpny 1" className="landingImage" />
              <p
                className={`landingPageless400 ${slideNo === 0 ? "active" : ""
                  }`}
              >
                Home
              </p>
            </RouterLink>
          </div>
        </Element>

        <Element name="section2" className="element">
          <div className="landingImageDiv">
            <RouterLink to="/services">
              <img src={cmpny2} alt="cmpny 3" className="landingImage" />
              <p
                className={`landingPageless400 ${slideNo === 1 ? "active" : ""}`}
              >
                Services
              </p>
            </RouterLink>
          </div>
        </Element>

        <Element name="section3" className="element">
          <div className="landingImageDiv">
            <img src={cmpny5} alt="cmpny 3" className="landingImage" />
            <p
              className={`landingPageless400 ${slideNo === 2 ? "active" : ""}`}
            >
              Products
            </p>
          </div>
        </Element>

        <Element name="section4" className="element">
          <div className="landingImageDiv">
            <RouterLink to="/about-us">
              <img src={cmpny3} alt="cmpny 4" className="landingImage" />
              <p
                className={`landingPageless400 ${slideNo === 3 ? "active" : ""
                  }`}
              >
                About Us
              </p>
            </RouterLink>
          </div>
        </Element>

        <Element name="section5" className="element">
          <div className="landingImageDiv">
            <RouterLink to="/contact-us">
              <img src={cmpny4} alt="cmpny 5" className="landingImage" />
              <p
                className={`landingPageless400 ${slideNo === 4 ? "active" : ""
                  }`}
              >
                Contact Us
              </p>
            </RouterLink>
          </div>
        </Element>
      </div>
    </div>
  );
}

export default LandingPage;
