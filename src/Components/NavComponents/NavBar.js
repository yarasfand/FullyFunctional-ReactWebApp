import React, { useState, useEffect } from "react";
import "./navBarStyle.css";
import logo from "./assets/logo/pioneer_logo_app.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";

function NavBar() {
  const [isSticky, setIsSticky] = useState(false);
  const [submenuVisible, setSubmenuVisible] = useState(false);
  const [submenuVisible2, setSubmenuVisible2] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleSubMenuMouseEnter = () => {
    setSubmenuVisible(!submenuVisible);
  };

  const handleSubMenuMouseLeave = () => {
    setSubmenuVisible(false);
  };

  const toggleSubmenu = () => {
    setSubmenuVisible(!submenuVisible);
  };

  const handleSubMenuMouseEnter2 = () => {
    setSubmenuVisible2(!submenuVisible2);
  };

  const handleSubMenuMouseLeave2 = () => {
    setSubmenuVisible2(false);
  };

  const toggleSubmenu2 = () => {
    setSubmenuVisible2(!submenuVisible2);
  };

  if (windowWidth > 600) {
    return (
      <div>
        <div className={`navContainer ${isSticky ? "sticky" : ""}`}>
          <div className="navLogo">
            <img src={logo} alt="this is logo" width="130" />
          </div>
          <div className="clock"> <div className="clockDot"></div> </div>
          <nav className="navItems">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li
                className="navmenuli"
                onMouseEnter={handleSubMenuMouseEnter}
                onMouseLeave={handleSubMenuMouseLeave}
                onClick={toggleSubmenu}
              >
                Business <i className="bi bi-chevron-double-down"></i>
                {submenuVisible && (
                  <ul className="navSubmenu">
                    <li>
                      <a href="ok">Web 1</a>
                    </li>
                    <li>
                      <a href="ok">Web 2</a>
                    </li>
                    <li>
                      <a href="ok">Web 3</a>
                    </li>
                  </ul>
                )}
              </li>
              <li
                className="navmenuli"
                onMouseEnter={handleSubMenuMouseEnter2}
                onMouseLeave={handleSubMenuMouseLeave2}
                onClick={toggleSubmenu2}
              >
                Services <i className="bi bi-chevron-double-down"></i>
                {submenuVisible2 && (
                  <ul className="navSubmenu">
                    <li>
                      <a href="ok">Attendance Management Software</a>
                    </li>
                    <li>
                      <a href="ok">Payroll Management</a>
                    </li>
                    <li>
                      <a href="ok">Integrations</a>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <Link to="/about-us">About Us</Link>
              </li>
              <li>
                <Link to="/contact-us">Contact Us</Link>
              </li>
              {/* {windowWidth > 850 && (
                <li>
                  <a href="ok" className="search searchli">
                    <i className="bi bi-search"></i>
                  </a>
                </li>
              )} */}
            </ul>
          </nav>
        </div>
      </div>
    );
  } else {
    const expand = "sm";

    return (
      <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
        <Container fluid>
          <Navbar.Brand href="#">
            <img
              src={logo}
              alt="Navbar Offcanvas Logo"
              height="45"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                Pioneer
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#action1" className="nav-link-custom">
                  <Link to={"/"}>Home</Link>
                </Nav.Link>

                <NavDropdown
                  title="Business"
                  id={`offcanvasNavbarDropdown-expand-${expand}`}
                  variant="dark"
                >
                  <NavDropdown.Item href="#action3">
                    Web 1 
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Web 2
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Web 3
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown
                  title="Services"
                  id={`offcanvasNavbarDropdown-expand-${expand}`}
                >
                  <NavDropdown.Item href="#action3">
                    Attendance Management Software
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Payroll Services
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Integrations
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#action1" className="nav-link-custom">
                  <Link to={"/about-us"}>About Us</Link>
                </Nav.Link>
                <Nav.Link href="#action1" className="nav-link-custom">
                  <Link to="/contact-us">Contact Us</Link>
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    );
  }
}

export default NavBar;
