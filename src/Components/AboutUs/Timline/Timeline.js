import React from "react";
import "./timeLine.css";

function TimeLine() {
  return (
    <div className="timeLine">
      <section className="design-section">
        <div className="timeline-Intro">
          <h2>
            Company History <i className="bi bi-buildings"></i>
          </h2>
          <p>70 Years of Excellence. You Can Count On Us!</p>
        </div>
        <div className="timeline">
          <div className="timeline-empty"></div>
          <div className="timeline-middle">
            <div className="timeline-circle"></div>
          </div>
          <div className="timeline-component timeline-content">
            <h2>1999</h2>
            <h3>Start With A Small Business </h3>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout The
              point of using Lorem Ipsum.
            </p>
          </div>
          <div className="timeline-component timeline-content">
            <h2>2005</h2>
            <h3>First Recognition</h3>

            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout The
              point of using Lorem Ipsum.
            </p>
          </div>
          <div className="timeline-middle">
            <div className="timeline-circle"></div>
          </div>
          <div className="timeline-empty"></div>
          <div className="timeline-empty"></div>
          <div className="timeline-middle">
            <div className="timeline-circle"></div>
          </div>
          <div className=" timeline-component timeline-content">
            <h2>2016</h2>
            <h3>World Most Popular Firm</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adi pisi cing elit, sed do
              eiusmod tempor exercitationemut labore. Curabitur metus ipsum. But
              I must explain to you how all this mistaken idea of denouncing
              pleasure and praising pain was born and I will give you a complete
              account of the system.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
export default TimeLine;
