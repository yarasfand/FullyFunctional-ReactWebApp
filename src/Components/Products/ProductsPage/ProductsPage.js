import React, { useState } from "react";
import "./ProductsPage.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import image1 from "../ProducstAssets/cmpny.jpg";
import image2 from "../ProducstAssets/pxfuel.jpg";
import { Link } from "react-router-dom";
import Footer from "../../HomePage/footer/Footer";
function ProductsPage() {
  const products = [
    {
      title: "Product 1",
      subtitle: "Subtitle 1",
      description:
        "Say goodbye to traditional keys and passwords. Our biometric products utilize state-of-the-art fingerprint recognition technology, ensuring a secure and personalized access experience.",
      price: 50,
      type: "FingerPrintScanners",
      image: image1,
    },
    {
      title: "Product 2",
      subtitle: "Subtitle 2",
      description:
        "Say goodbye to traditional keys and passwords. Our biometric products utilize state-of-the-art fingerprint recognition technology, ensuring a secure and personalized access experience.",
      price: 60,
      type: "FingerPrintScanners",
      image: image2,
    },
    {
      title: "Product 3",
      subtitle: "Subtitle 3",
      description:
        "Say goodbye to traditional keys and passwords. Our biometric products utilize state-of-the-art fingerprint recognition technology, ensuring a secure and personalized access experience.",
      price: 70,
      type: "FaceAttendence",
      image: image1,
    },
    {
      title: "Product 4",
      subtitle: "Subtitle 4",
      description:
        "Say goodbye to traditional keys and passwords. Our biometric products utilize state-of-the-art fingerprint recognition technology, ensuring a secure and personalized access experience.",
      price: 80,
      type: "FingerPrintReader",
      image: image2,
    },
    {
      title: "Product 5",
      subtitle: "Subtitle 5",
      description:
        "Say goodbye to traditional keys and passwords. Our biometric products utilize state-of-the-art fingerprint recognition technology, ensuring a secure and personalized access experience.",
      price: 70,
      type: "FingerPrintReader",
      image: image1,
    },
    {
      title: "Product 6",
      subtitle: "Subtitle 6",
      description:
        "Say goodbye to traditional keys and passwords. Our biometric products utilize state-of-the-art fingerprint recognition technology, ensuring a secure and personalized access experience.",
      price: 80,
      type: "FingerPrintReader",
      image: image2,
    },
    {
      title: "Product 7",
      subtitle: "Subtitle 7",
      description:
        "Say goodbye to traditional keys and passwords. Our biometric products utilize state-of-the-art fingerprint recognition technology, ensuring a secure and personalized access experience.",
      price: 70,
      type: "FingerPrintReader",
      image: image1,
    },
    {
      title: "Product 8",
      subtitle: "Subtitle 8",
      description:
        "Say goodbye to traditional keys and passwords. Our biometric products utilize state-of-the-art fingerprint recognition technology, ensuring a secure and personalized access experience.",
      price: 80,
      type: "FingerPrintReader",
      image: image2,
    },
    // Add more products as needed
  ];

  const [showAccessControl, setShowAccessControl] = useState(false);
  const [showTimeAttendance, setShowTimeAttendance] = useState(false);

  const handleToggleDetails = (section) => {
    switch (section) {
      case "accessControl":
        setShowAccessControl(!showAccessControl);
        break;
      case "timeAttendance":
        setShowTimeAttendance(!showTimeAttendance);
        break;

      default:
        break;
    }
  };

  const [selectedType, setSelectedType] = useState(null);

  const filterProductsByType = (type) => {
    return products.filter((product) => product.type === type);
  };

  const filteredProducts = selectedType
    ? filterProductsByType(selectedType)
    : products;

  return (
    <>
      <div className="products">
        <section className="sortSection" style={{ display: "inline-block" }}>
          <p
            className={`timelineItem ${showAccessControl ? "selected" : ""}`}
            onClick={() => handleToggleDetails("accessControl")}
          >
            <span className="infoSpan" style={{ paddingRight: "5px" }}>
              {showAccessControl ? " -" : " +"}
            </span>{" "}
            Access Control
          </p>
          {showAccessControl && (
            <div>
              <p
                onClick={() => {
                  setSelectedType("FingerPrintReader");
                }}
                className={`productItems ${
                  selectedType === "FingerPrintReader" ? " prodActive" : ""
                }`}
              >
                FingerPrint Reader
              </p>
              <p
                onClick={() => {
                  setSelectedType("OnlineFingerPrintAccess");
                }}
                className={`productItems ${
                  selectedType === "OnlineFingerPrintAccess"
                    ? " prodActive"
                    : ""
                }`}
              >
                Online Finger Print Access
              </p>
              <p
                onClick={() => {
                  setSelectedType("StandAloneFinger");
                }}
                className={`productItems ${
                  selectedType === "StandAloneFinger" ? " prodActive" : ""
                }`}
              >
                StandAlone Finger Print Access
              </p>
            </div>
          )}

          <p
            className={`timelineItem ${showTimeAttendance ? "selected" : ""}`}
            onClick={() => handleToggleDetails("timeAttendance")}
          >
            <span className="infoSpan" style={{ marginRight: "5px" }}>
              {showTimeAttendance ? " -" : " +"}
            </span>{" "}
            Time Attendance
          </p>
          {showTimeAttendance && (
            <div>
              <p
                onClick={() => setSelectedType("FaceAttendence")}
                className={`productItems ${
                  selectedType === "FaceAttendence" ? " prodActive" : ""
                }`}
              >
                Face Attendance
              </p>
            </div>
          )}

          <p
            style={{ paddingLeft: "3px" }}
            onClick={() => setSelectedType("FingerPrintScanners")}
            className={`productItems ${
              selectedType === "FingerPrintScanners" ? " prodActive" : ""
            }`}
          >
            FingerPrint Scanners
          </p>
        </section>

        <Container className="productContain m-0">
          <Row sm={1} md={2} className="productsWholeContainer">
            {filteredProducts.map((product, index) => (
              <Col key={index} className="m-0 p-0 colProd">
                <div className="productData">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="product-image"
                  />
                  <div className="productInfo m-1">
                    <h3>{product.title}</h3>
                    <h4>{product.subtitle}</h4>
                    <p>{product.description}</p>
                    <Link to={`/home/products/${product.type}`}>
                      <Button variant="primary" className="productbtn">
                        See Details
                      </Button>
                    </Link>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
      <Footer />
    </>
  );
}

export default ProductsPage;
