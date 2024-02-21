import React, { useState, useEffect } from "react";
import "./navBarStyle.css";
import logo from "./assets/logo/pioneer_logo_app.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
//import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

function NavBar() {
  const [isSticky, setIsSticky] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  /*
    const [submenuVisible, setSubmenuVisible] = useState(false);
    const [submenuVisible2, setSubmenuVisible2] = useState(false);
   
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
  
  */

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

  if (windowWidth > 600) {
    return (
      <div>
        <div className={`navContainer ${isSticky ? "sticky" : ""}`}>
          <div className="navLogo">
            <img src={logo} alt="this is logo" width="130" />
          </div>
          <nav className="navItems">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="products">Products</Link>
              </li>
              {/* <li
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
              </li> */}
              <li>
                <Link to="services">Services</Link>
              </li>
              {/* <li
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
              </li> */}
              <li>
                <Link to="about-us">About Us</Link>
              </li>
              <li>
                <Link to="contact-us">Contact Us</Link>
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
    return (
      <Navbar collapseOnSelect="true" expand="xxl" bg="light" variant="light ">
        <Container className="navContainer m-0">
          <Navbar.Brand href="#">
            <img
              src={logo}
              alt="Navbar Offcanvas Logo"
              height="45"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              {/* <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                Pioneer
              </Offcanvas.Title>
            </Offcanvas.Header> */}
              <Nav.Link eventKey={2}>
                <Link to="/" className="mobNavOpt">
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link eventKey={2}>
                <Link to="services" className="mobNavOpt">
                  Services
                </Link>
              </Nav.Link>
              <Nav.Link eventKey={2}>
                <Link to="products" className="mobNavOpt">
                  Products
                </Link>
              </Nav.Link>
              <Nav.Link eventKey={2}>
                <Link to="about-us" className="mobNavOpt">
                  About Us
                </Link>
              </Nav.Link>
              <Nav.Link eventKey={2}>
                <Link to="contact-us" className="mobNavOpt">
                  Contact Us
                </Link>
              </Nav.Link>
              {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Home</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Item 2</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Item 3</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated Item</NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
            {/* <Nav>
              <Nav.Link href="#deets">Another Link</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Another Link
              </Nav.Link>
            </Nav> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default NavBar;
