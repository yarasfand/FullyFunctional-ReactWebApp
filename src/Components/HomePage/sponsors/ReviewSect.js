import React, { useState, useEffect } from "react";
import "./reviewSect.css";
import sp1 from "./sponsorAssets/sp1.png";
import sp2 from "./sponsorAssets/sp2.png";
import sp3 from "./sponsorAssets/sp3.png";
import sp4 from "./sponsorAssets/sp4.png";
import sp5 from "./sponsorAssets/sp5.png";
import sp6 from "./sponsorAssets/sp3.png";
import sp7 from "./sponsorAssets/sp1.png";
import sp8 from "./sponsorAssets/sp2.png";

function ReviewSect() {
  // Array of sponsor image paths
  const sponsorImages = [sp1, sp2, sp3, sp4, sp5, sp6, sp7, sp8];

  // State to store the column class
  const [columnClass, setColumnClass] = useState("col-3");

  // Effect to update column class on window resize
  useEffect(() => {
    function handleResize() {
      setColumnClass(window.innerWidth < 600 ? "col-6" : "col-3");
    }
    // Add event listener for window resize
    window.addEventListener("resize", handleResize);
    // Cleanup function
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array ensures effect runs only once after initial render

  return (
    <div>
      <section className="sponsorsSect">
        <h1 className="sponsors-heading">Our Esteemed Clients</h1>

        <div className="row justify-content-center m-5 sponsors-grid">
          {sponsorImages.map((image, index) => (
            <div className={columnClass  + " sponsor"} key={index}>
              <img className="sponsor-image " src={image} alt={`Sponsor ${index + 1}`} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default ReviewSect;
