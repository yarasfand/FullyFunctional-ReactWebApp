import "./abovenavstyle.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import React, { useState, useEffect } from "react";

function AboveNavbar() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  if (screenWidth <= 1060) {
    return null;
  }

  return (
    <header>
      <div className="topNav">
        <p className="topNavText">Pioneer Time System.</p>
        <ul className="topNav-list">
          <li>
            <i className="bi bi-hourglass-split"></i> Mon to Fri 08:00 - 16:00
          </li>
          <li>
            <i className="bi bi-geo-alt-fill"></i> Napier Road
          </li>
          <li>
            <i className="bi bi-telephone"></i> +(92) 111 222 3330
          </li>
        </ul>
      </div>
    </header>
  );
}

export default AboveNavbar;
