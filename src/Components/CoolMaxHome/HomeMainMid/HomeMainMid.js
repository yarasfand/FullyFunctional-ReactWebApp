import React from "react";
import "./homeMainMid.css";

function HomeMainMid() {
  return (
    <>
      <h4 className="homeMainMidMainHeading">OUR COMPANIES</h4>

      <section className="homeMainMidSection">
        <div>
          <div className="homeMainMidData homeMainMidData1">
            <div className="homeMainMidDataHeadingDiv">
              <div>
                <h2 className="homeMainMidDataHeading">
                  CoolMax International
                </h2>
              </div>
            </div>
          </div>

          <p className="homeMainMidDataCaption">
            Complete HVACR & Turn-Key Solutions
          </p>
        </div>

        <div>
          <div className="homeMainMidData homeMainMidData2">
            <div className="homeMainMidDataHeadingDiv">
              <div>
                <h2 className="homeMainMidDataHeading">
                  CoolMax International
                </h2>
              </div>
            </div>
          </div>
          <p className="homeMainMidDataCaption">
            Steel Structures | Cold Chain Solutions | Doors
          </p>
        </div>
        <div>
          <div className="homeMainMidData homeMainMidData3">
            <div className="homeMainMidDataHeadingDiv">
              <div>
                <h2 className="homeMainMidDataHeading">
                  CoolMax International
                </h2>
              </div>
            </div>
          </div>
          <p className="homeMainMidDataCaption">RCC Construction</p>
        </div>
      </section>
    </>
  );
}

export default HomeMainMid;
