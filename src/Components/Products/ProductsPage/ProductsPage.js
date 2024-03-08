import React, { useState, useEffect, useCallback } from "react";
import "./ProductsPage.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import product1 from "../ProducstAssets/product1.png";
import product2 from "../ProducstAssets/product2.png";
import product3 from "../ProducstAssets/product3.png";
import product4 from "../ProducstAssets/product4.png";
import product5 from "../ProducstAssets/product5.png";
import product6 from "../ProducstAssets/product6.png";
import product7 from "../ProducstAssets/product7.png";
import product8 from "../ProducstAssets/product8.png";
import product9 from "../ProducstAssets/product9.png";
import product10 from "../ProducstAssets/product10.png";
import product11 from "../ProducstAssets/product11.png";
import product12 from "../ProducstAssets/product12.png";
import product13 from "../ProducstAssets/product13.png";
import product14 from "../ProducstAssets/product14.png";
import product15 from "../ProducstAssets/product15.png";
import product16 from "../ProducstAssets/product16.png";
import product17 from "../ProducstAssets/product17.png";
import product18 from "../ProducstAssets/product18.png";
import product19 from "../ProducstAssets/product19.png";
import product20 from "../ProducstAssets/product20.png";
import product21 from "../ProducstAssets/product21.png";
import { Link } from "react-router-dom";

function ProductsPage() {
  const checkAndSaveImagesToLocalStorage = useCallback(() => {
    try {
      const images = [
        { key: "product1", value: product1 },
        { key: "product2", value: product2 },
        { key: "product3", value: product3 },
        { key: "product4", value: product4 },
        { key: "product5", value: product5 },
        { key: "product6", value: product6 },
        { key: "product7", value: product7 },
        { key: "product8", value: product8 },
        { key: "product9", value: product9 },
        { key: "product10", value: product10 },
        { key: "product11", value: product11 },
        { key: "product12", value: product12 },
        { key: "product13", value: product13 },
        { key: "product14", value: product14 },
        { key: "product15", value: product15 },
        { key: "product16", value: product16 },
        { key: "product17", value: product17 },
        { key: "product18", value: product18 },
        { key: "product19", value: product19 },
        { key: "product20", value: product20 },
        { key: "product21", value: product21 },
      ];

      // Filter out the images that are missing in local storage
      const missingImages = images.filter(
        ({ key }) => !localStorage.getItem(key)
      );

      if (missingImages.length > 0) {
        // If any image is missing, save only the missing images to local storage
        saveImagesToLocalStorage(missingImages);
      } else {
        console.log("All images are already present in local storage.");
      }
    } catch (error) {
      console.error(
        "Error checking and saving images to local storage:",
        error
      );
    }
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page when component mounts
    checkAndSaveImagesToLocalStorage(); // Call function to check and save images to local storage
  }, [checkAndSaveImagesToLocalStorage]);

  // Function to save images to local storage
  const saveImagesToLocalStorage = (images) => {
    images.forEach(({ key, value }) => {
      localStorage.setItem(key, value);
    });
    console.log("Images saved to local storage.");
  };

  const products = [
    {
      title: "PT-1000",
      subtitle: "Face With Finger Attendance And Access Control",
      description:
        "Say goodbye to traditional keys and passwords. Our biometric products utilize state-of-the-art fingerprint recognition technology, ensuring a secure and personalized access experience.",
      price: 50,
      filter: "Face-with-finger-attendance",
      type: "PT-1000",
      image: localStorage.getItem("product1"),
    },
    {
      title: "PT-1000 Mini",
      subtitle: "Face With Finger Attendance And Access Control",
      description:
        "Say goodbye to traditional keys and passwords. Our biometric products utilize state-of-the-art fingerprint recognition technology, ensuring a secure and personalized access experience.",
      price: 60,
      filter: "Face-with-finger-attendance",
      type: "PT-1000-Mini",
      image: localStorage.getItem("product2"),
    },

    {
      title: "PT-1500 Mini",
      subtitle: "Long Range Face Recognition",
      description:
        "Say goodbye to traditional keys and passwords. Our biometric products utilize state-of-the-art fingerprint recognition technology, ensuring a secure and personalized access experience.",
      price: 60,
      filter: "Long-Range-Face",
      type: "PT-1500-Mini",
      image: localStorage.getItem("product3"),
    },

    {
      title: "PT-1500",
      subtitle: "Long Range Face Recognition",
      description:
        "Say goodbye to traditional keys and passwords. Our biometric products utilize state-of-the-art fingerprint recognition technology, ensuring a secure and personalized access experience.",
      price: 60,
      filter: "Long-Range-Face",
      type: "PT-1500",
      image: localStorage.getItem("product4"),
    },

    {
      title: "PT-10000",
      subtitle: "Long Range Face Recognition",
      description:
        "Say goodbye to traditional keys and passwords. Our biometric products utilize state-of-the-art fingerprint recognition technology, ensuring a secure and personalized access experience.",
      price: 60,
      filter: "Long-Range-Face",
      type: "PT-10000",
      image: localStorage.getItem("product5"),
    },

    {
      title: "PT-5000 Pro",
      subtitle: "Pro Series With Fingerprint",
      description:
        "Say goodbye to traditional keys and passwords. Our biometric products utilize state-of-the-art fingerprint recognition technology, ensuring a secure and personalized access experience.",
      price: 60,
      filter: "FingerprinT-Pro",
      type: "PT-5000-Pro",
      image: localStorage.getItem("product6"),
    },
    {
      title: "PT-20000 Pro",
      subtitle: "Pro Series With Fingerprint",
      description:
        "Say goodbye to traditional keys and passwords. Our biometric products utilize state-of-the-art fingerprint recognition technology, ensuring a secure and personalized access experience.",
      price: 60,
      filter: "FingerprinT-Pro",
      type: "PT-20000-Pro",
      image: localStorage.getItem("product7"),
    },

    {
      title: "PT-600",
      subtitle: "Face Finger Professional Access Control",
      description:
        "Say goodbye to traditional keys and passwords. Our biometric products utilize state-of-the-art fingerprint recognition technology, ensuring a secure and personalized access experience.",
      price: 60,
      filter: "Face&FingerPro",
      type: "PT-600",
      image: localStorage.getItem("product8"),
    },
    {
      title: "Smart Camera c7",
      subtitle: "Pioneer Smart Camera",
      description:
        "Say goodbye to traditional keys and passwords. Our biometric products utilize state-of-the-art fingerprint recognition technology, ensuring a secure and personalized access experience.",
      price: 60,
      filter: "Smart-Camera",
      type: "Smart-Camera-c7",
      image: localStorage.getItem("product9"),
    },
    {
      title: "SDL 700",
      subtitle: "Pioneer Smart Access Control",
      description:
        "Say goodbye to traditional keys and passwords. Our biometric products utilize state-of-the-art fingerprint recognition technology, ensuring a secure and personalized access experience.",
      price: 60,
      filter: "Smart-Door-Locks",
      type: "SDL-700",
      image: localStorage.getItem("product10"),
    },

    {
      title: "SDL A7",
      subtitle: "Pioneer Smart Access Control",
      description:
        "Say goodbye to traditional keys and passwords. Our biometric products utilize state-of-the-art fingerprint recognition technology, ensuring a secure and personalized access experience.",
      price: 60,
      filter: "Smart-Door-Locks",
      type: "SDL-A7",
      image: localStorage.getItem("product11"),
    },
    {
      title: "Pioneer Flower",
      subtitle: "Pioneer Clocks",
      description:
        "Say goodbye to traditional keys and passwords. Our biometric products utilize state-of-the-art fingerprint recognition technology, ensuring a secure and personalized access experience.",
      price: 60,
      filter: "Wall-Clocks",
      type: "pioneer-clocks-flower",
      image: localStorage.getItem("product12"),
    },

    {
      title: "Pioneer Chroma",
      subtitle: "Pioneer Clocks",
      description:
        "Say goodbye to traditional keys and passwords. Our biometric products utilize state-of-the-art fingerprint recognition technology, ensuring a secure and personalized access experience.",
      price: 60,
      filter: "Wall-Clocks",
      type: "pioneer-clocks-chroma",
      image: localStorage.getItem("product13"),
    },
    {
      title: "Pioneer Hex",
      subtitle: "Pioneer Clocks",
      description:
        "Say goodbye to traditional keys and passwords. Our biometric products utilize state-of-the-art fingerprint recognition technology, ensuring a secure and personalized access experience.",
      price: 60,
      filter: "Wall-Clocks",
      type: "pioneer-clocks-hex",
      image: localStorage.getItem("product14"),
    },
    {
      title: "Pioneer Crown",
      subtitle: "Pioneer Clocks",
      description:
        "Say goodbye to traditional keys and passwords. Our biometric products utilize state-of-the-art fingerprint recognition technology, ensuring a secure and personalized access experience.",
      price: 60,
      filter: "Wall-Clocks",
      type: "pioneer-clocks-crown",
      image: localStorage.getItem("product15"),
    },

    {
      title: "Pioneer Gear",
      subtitle: "Pioneer Clocks",
      description:
        "Say goodbye to traditional keys and passwords. Our biometric products utilize state-of-the-art fingerprint recognition technology, ensuring a secure and personalized access experience.",
      price: 60,
      filter: "Wall-Clocks",
      type: "pioneer-clocks-gear",
      image: localStorage.getItem("product16"),
    },

    {
      title: "Pioneer Pattern",
      subtitle: "Pioneer Clocks",
      description:
        "Say goodbye to traditional keys and passwords. Our biometric products utilize state-of-the-art fingerprint recognition technology, ensuring a secure and personalized access experience.",
      price: 60,
      filter: "Wall-Clocks",
      type: "pioneer-clocks-pattern",
      image: localStorage.getItem("product17"),
    },

    {
      title: "Pioneer Skel",
      subtitle: "Pioneer Clocks",
      description:
        "Say goodbye to traditional keys and passwords. Our biometric products utilize state-of-the-art fingerprint recognition technology, ensuring a secure and personalized access experience.",
      price: 60,
      filter: "Wall-Clocks",
      type: "pioneer-clocks-skel",
      image: localStorage.getItem("product18"),
    },

    {
      title: "Pioneer Roman",
      subtitle: "Pioneer Clocks",
      description:
        "Say goodbye to traditional keys and passwords. Our biometric products utilize state-of-the-art fingerprint recognition technology, ensuring a secure and personalized access experience.",
      price: 60,
      filter: "Wall-Clocks",
      type: "pioneer-clocks-roman",
      image: localStorage.getItem("product19"),
    },
    {
      title: "Pioneer Spear",
      subtitle: "Pioneer Clocks",
      description:
        "Say goodbye to traditional keys and passwords. Our biometric products utilize state-of-the-art fingerprint recognition technology, ensuring a secure and personalized access experience.",
      price: 60,
      filter: "Wall-Clocks",
      type: "pioneer-clocks-spear",
      image: localStorage.getItem("product20"),
    },
    {
      title: "Pioneer Astronomia",
      subtitle: "Pioneer Clocks",
      description:
        "Say goodbye to traditional keys and passwords. Our biometric products utilize state-of-the-art fingerprint recognition technology, ensuring a secure and personalized access experience.",
      price: 60,
      filter: "Wall-Clocks",
      type: "pioneer-clocks-astronomia",
      image: localStorage.getItem("product21"),
    },
    // Add more products as needed
  ];

  const [showAccessControl, setShowAccessControl] = useState(false);
  const [showSmartDevices, setShowSmartDevices] = useState(false);
  const [showTimeAttendance, setShowTimeAttendance] = useState(false);
  const [showPioneerClocks, setShowPioneerClocks] = useState(false);

  const handleToggleDetails = (section) => {
    switch (section) {
      case "accessControl":
        setShowAccessControl(!showAccessControl);
        break;
      case "timeAttendance":
        setShowTimeAttendance(!showTimeAttendance);
        break;

      case "SmartDevices":
        setShowSmartDevices(!showSmartDevices);
        break;

      case "pioneerClocks":
        setShowPioneerClocks(!showPioneerClocks);
        break;
      case "all":
        setSelectedType(null); // Reset selectedType to show all products
        break;

      default:
        break;
    }
  };

  const [selectedType, setSelectedType] = useState(null);

  const filterProductsByType = (type) => {
    return products.filter((product) => product.filter === type);
  };

  const filteredProducts = selectedType
    ? filterProductsByType(selectedType)
    : products;

  return (
    <>
      <div className="products" id="products">
        <section className="sortSection">
          <p
            onClick={() => handleToggleDetails("all")} // Toggle to show all products
            className={`productItems ${
              selectedType === null ? "prodActive selected" : ""
            }`}
          >
            All
          </p>

          <p
            className={`timelineItem ${showAccessControl ? " selected" : ""}`}
            onClick={() => handleToggleDetails("accessControl")}
          >
            <span className="infoSpan" style={{ paddingRight: "5px" }}>
              {showAccessControl ? (
                <i class="bi bi-arrow-down"></i>
              ) : (
                <i class="bi bi-arrow-right"></i>
              )}
            </span>{" "}
            Access Control
          </p>
          {showAccessControl && (
            <div>
              <p
                onClick={() => {
                  setSelectedType("Face-with-finger-attendance");
                }}
                className={`productItems ${
                  selectedType === "Face-with-finger-attendance"
                    ? " prodActive"
                    : ""
                }`}
              >
                Face with finger attendance
              </p>
              <p
                onClick={() => {
                  setSelectedType("FingerprinT-Pro");
                }}
                className={`productItems ${
                  selectedType === "FingerprinT-Pro" ? " prodActive" : ""
                }`}
              >
                Fingerprint Pro
              </p>
              <p
                onClick={() => {
                  setSelectedType("Face&FingerPro");
                }}
                className={`productItems ${
                  selectedType === "Face&FingerPro" ? " prodActive" : ""
                }`}
              >
                Face & Finger Pro
              </p>
            </div>
          )}

          <p
            className={`timelineItem ${showTimeAttendance ? " selected" : ""}`}
            onClick={() => handleToggleDetails("timeAttendance")}
          >
            <span className="infoSpan" style={{ marginRight: "5px" }}>
              {showTimeAttendance ? (
                <i class="bi bi-arrow-down"></i>
              ) : (
                <i class="bi bi-arrow-right"></i>
              )}
            </span>{" "}
            Time Attendance
          </p>
          {showTimeAttendance && (
            <div>
              <p
                onClick={() => setSelectedType("Long-Range-Face")}
                className={`productItems ${
                  selectedType === "Long-Range-Face" ? " prodActive" : ""
                }`}
              >
                Face Attendance
              </p>
            </div>
          )}

          <p
            className={`timelineItem ${showSmartDevices ? " selected" : ""}`}
            onClick={() => handleToggleDetails("SmartDevices")}
          >
            <span className="infoSpan" style={{ marginRight: "5px" }}>
              {showSmartDevices ? (
                <i class="bi bi-arrow-down"></i>
              ) : (
                <i class="bi bi-arrow-right"></i>
              )}
            </span>{" "}
            Smart Devices
          </p>
          {showSmartDevices && (
            <div>
              <p
                onClick={() => setSelectedType("Smart-Door-Locks")}
                className={`productItems ${
                  selectedType === "Smart-Door-Locks" ? " prodActive" : ""
                }`}
              >
                Smart Door Locks
              </p>
              <p
                onClick={() => setSelectedType("Smart-Camera")}
                className={`productItems ${
                  selectedType === "Smart-Camera" ? " prodActive" : ""
                }`}
              >
                Smart Camera
              </p>
            </div>
          )}

          {/* <p
            style={{ paddingLeft: "3px" }}
            onClick={() => setSelectedType("FingerPrint-Scanners")}
            className={`productItems ${
              selectedType === "FingerPrint-Scanners" ? " prodActive" : ""
            }`}
          >
            FingerPrint Scanners
          </p> */}

          <p
            className={`timelineItem ${showPioneerClocks ? " selected" : ""}`}
            onClick={() => handleToggleDetails("pioneerClocks")}
          >
            <span className="infoSpan" style={{ marginRight: "5px" }}>
              {showPioneerClocks ? (
                <i class="bi bi-arrow-down"></i>
              ) : (
                <i class="bi bi-arrow-right"></i>
              )}
            </span>{" "}
            Pioneer Clocks
          </p>
          {showPioneerClocks && (
            <div>
              <p
                onClick={() => setSelectedType("Wall-Clocks")}
                className={`productItems ${
                  selectedType === "Wall-Clocks" ? " prodActive" : ""
                }`}
              >
                Wall Clocks
              </p>
              <p
                onClick={() => setSelectedType("Tower/Outdoor-Clocks")}
                className={`productItems ${
                  selectedType === "Tower/Outdoor-Clocks" ? " prodActive" : ""
                }`}
              >
                Tower Clocks
              </p>
            </div>
          )}
        </section>

        <Container className="productContain m-0">
          <Row sm={1} md={2} className="productsWholeContainer">
            {filteredProducts.map((product, index) => (
              <div key={index} className="m-0 p-0 colProd">
                <div className="productData">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="product-image"
                  />
                  <div className="productInfo m-1">
                    <h3>{product.title}</h3>
                    <h4 className="product-subtilte">{product.subtitle}</h4>
                    {/* <p>{product.description}</p> */}
                    <Link to={`/home/products/${product.type}`}>
                      <Button className="productbtn">See Details</Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
}

export default ProductsPage;
