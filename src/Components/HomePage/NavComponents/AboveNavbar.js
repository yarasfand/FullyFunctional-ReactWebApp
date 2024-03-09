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
    <header className="topOfTheNav">
      <div className="topNav">
        <p className="topNavText">Pioneer Time System.</p>
        <ul className="topNav-list">
          <li>
            <i className="bi bi-hourglass-split"></i> Mon to Sat 10:00 - 18:00
          </li>
          <li>
          <i className="bi bi-telephone"></i>  +(042)  37725777
          </li>
          <li>
            <i className="bi bi-telephone"></i>  +(92) 3044976411
          </li>
        </ul>
      </div>
    </header>
  );
}

export default AboveNavbar;
