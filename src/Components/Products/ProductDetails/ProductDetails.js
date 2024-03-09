import React, { useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "./ProductDetails.css";

/*
import productImage1 from "../ProducstAssets/product1.png";
import productImage2 from "../ProducstAssets/product2.png";
import productImage3 from "../ProducstAssets/product3.png";
import productImage4 from "../ProducstAssets/product4.png";
import productImage5 from "../ProducstAssets/product5.png";
import productImage6 from "../ProducstAssets/product6.png";
import productImage7 from "../ProducstAssets/product7.png";
import productImage8 from "../ProducstAssets/product8.png";
import productImage9 from "../ProducstAssets/product9.png";
import productImage10 from "../ProducstAssets/product10.png";
import productImage11 from "../ProducstAssets/product11.png";

*/

import Footer from "../../HomePage/footer/Footer";
import FeatureList from "./FeatureList";
import Specifications from "./Specifications";

function ProductDetails() {
  const { productType } = useParams();

  const productsInDetails = [
    {
      title: "PT-1000",
      features: [
        "Fingerprint",
        "RF Card",
        "TCP/IP",
        "Personal Identity Number",
        "USB Disk",
        "Access Control",
        "Camera",
        "Fingerprint Scanner",
      ],
      specifications: {
        "Face Capacity": 1000,
        "Fingerprint Capacity": 1000,
        "Card Capacity": 1000,
        "Password Capacity": 1000,
        "Max Attendance Log": "100,000",
        "Management log": 10000,
        "Identify mode": "Face, Card, Password and Combinations",
        Display: '3" LCD',
        Communication: "TCP/IP, Wifi Both together",
        "Card Reader Connectivity": "Yes (Wiegand IN)",
        "User Validity": "Yes",
        "Push Button Connectivity": "Yes",
        "QR Reader Connectivity": "Yes (Wiegand IN)",
        "U-disk": "Supported",
        Battery: "Built-In Battery Backup",
        "Working voltage": "DC12V",
        "Working temperature": "-10°C~+50°C",
        "Working humidity(RH)": "20%~80%",
        "Self-test function": "Supported",
        "Access Control": "Built In",
      },
      price: 50,
      type: "PT-1000",
      images: [{ original: localStorage.getItem("product1") }],
    },
    {
      title: "PT-1000 Mini",
      features: [
        "Fingerprint",
        "RF Card",
        "TCP/IP",
        "Personal Identity Number",
        "USB Disk",
        "Access Control",
        "Camera",
        "Fingerprint Scanner",
      ],
      specifications: {
        "Face Capacity": 3000,
        "Fingerprint Capacity": 5000,
        "Card Capacity": 5000,
        "Password Capacity": 5000,
        "Max Attendance Log": 200000,
        "Identify Mode": "Face, Fingerprint, Card, Password, and Combination",
        Display: 'Color Scene 3.0" Inch',
        Communication: "TCP/IP, USB Device, P2P, Web, WiFi",
        "U-disk": "Supported",
        "Working voltage": "12V 3A Adapter",
        "Working temperature": "-10°C ~ -45°C",
        "Working humidity(RH)": "20% ~ 80%",
        "Self-test function": "Supported",
        "Power management": "Sleep Mode",
        "FAR/FRR": "0.00001 / 0.1(%)",
        "Access Control": "Simple Built In",
        GPS: "Yes",
      },
      price: 60,
      type: "PT-1000-Mini",
      images: [{ original: localStorage.getItem("product2") }],
    },
    {
      title: "PT-1500 Mini",
      features: [
        "Long Range Face Recognition",
        "Live Face Detection",
        "Touch Screen",
        "WI-FI",
        `3.5" LCD Display`,
        "Cloud",
      ],
      specifications: {
        "Face / Card / PIN capacity": 1500,
        "Record capacity": 150000,
        "Recognition way": "Face, Card, Password",
        Accuracy: 0.3,
        Language: "English",
        "Self-checking function": "Yes",
        "Face FAR/ FRR": "0.001/0.1(%)",
        "Recognition Speed": "0.3s",
        "Face intelligent update function": "Yes",
        "Recognition ways": "1:1, 1:N",
        CPU: "Quad-core, 1.7G",
        OS: "LINUX",
        Camera: "Dual camera",
        "IR LED": "Yes",
        LCD: '3.5" inch HD Touch Screen',
        "Infrared approach receiver": "Yes",
        "Touch screen": "Yes",
        Communication: "TCP/IP, U-disk, WiFi",
        "Working voltage": "DC12V - 24V Wide voltage design",
        "Ambient light": "0-50000Lux",
        "Working temperature": "0°C-40°C",
        "0°C-40°C": "20% ~ 80%",
        "Door sensor(EN-MG)": "Gate magnetic signal input",
        Alarm: "Alarm output",
      },
      price: 60,
      type: "PT-1500-Mini",
      images: [{ original: localStorage.getItem("product3") }],
    },

    {
      title: "PT-1500",
      features: [
        "Long Range Face Recognition",
        "Live Face Detection",
        "Touch Screen",
        "WI-FI",
        `4.0" LCD Display`,
        "Cloud",
      ],
      specifications: {
        "Face / Card / PIN capacity": 1500,
        "Record capacity": 100000,
        "Recognition way": "Face, Card, Password",
        Accuracy: 0.3,
        Language: "English",
        "Self-checking function": "Yes",
        "Face FAR/ FRR": "0.001/0.1(%)",
        "Recognition Speed": "0.3s",
        "Face intelligent update function": "Yes",
        "Recognition ways": "1:1, 1:N",
        CPU: "Quad-core, 1.7G",
        OS: "LINUX",
        Camera: "Dual camera",
        "IR LED": "Yes",
        LCD: '4" inch HD Touch Screen',
        "Infrared approach receiver": "Yes",
        "Touch screen": "Yes",
        Communication: "TCP/IP, U-disk, WiFi",
        "Working voltage": "DC12V - 24V Wide voltage design",
        "Ambient light": "0-50000Lux",
        "Working temperature": "0°C-40°C",
        "0°c-40°c": "20% ~ 80%",
        "Door sensor(EN-MG)": "Gate magnetic signal input",
        Alarm: "Alarm output",
      },
      price: 60,
      type: "PT-1500",
      images: [{ original: localStorage.getItem("product4") }],
    },

    {
      title: "PT-10000",
      features: [
        "Long Range Face Recognition",
        "Live Face Detection",
        "Touch Screen",
        "WI-FI",
        `4.5" LCD Display`,
        "Cloud",
      ],
      specifications: {
        "Face Capacity": 10000,
        "Card Capacity": 10000,
        "Record Capacity": 500000,
        LED: "LED Double High Power Infrared Light",
        Display: '4.5" Capacitive LCD touch screen',
        Communication: "TCP/IP, USB Disk, WiFi",
        "Power Supply": "DC 12V, 2A",
        "Operating Temperature": "-15°C~+60°C",
        "Operating System": "Linux",
        Identification: "Dynamic Facial, PIN, Face & PIN Combination",
        "Identification Mode": "1:1, 1:N",
        "Face Recognition Time": "<0.2S",
        "Detection Range": "8feet",
        "Alarm Output": "Yes",
        Wiegand: "Wiegand in and Wiegand Out",
        Dimensions: "185*110*20mm",
      },
      price: 60,
      type: "PT-10000",
      images: [{ original: localStorage.getItem("product5") }],
    },

    {
      title: "PT-5000 Pro",
      features: [
        "Fingerprint",
        "RF Card",
        "TCP/IP",
        "Access Control",
        "Camera",
        "Fingerprint Scanner",
        "USB Disk",
        "Personal Identity Number",
        "Wi-Fi",
      ],
      specifications: {
        "Face Capacity": 5000,
        "Card Capacity": 5000,
        "Fingerprint Capacity": 5000,
        "Password Capacity": 5000,
        "Max Attendance Log": 1000000,
        "Identify Mode": "Face, Fingerprint, Card, Password, and Combinations",
        Display: "4.8 Inch LCD",
        Communication: "TCP/IP, 4G (Optional)",
        "U-disk": "Supported",
        "Working voltage": "DC12V",
        "Working temperature": "-10°C~+50°C",
        "Working humidity(RH)": "20%~80%",
        "Self-test function": "Supported",
        "Power management": "Sleep Mode",
        "FAR/FRR": "0.001/1(%)",
        "Access Control": "Built In",
      },
      price: 60,
      type: "PT-5000-Pro",
      images: [{ original: localStorage.getItem("product6") }],
    },

    {
      title: "PT-20000 Pro",
      features: [
        "Face Recognition",
        "RF Card",
        "TCP/IP",
        "Access Control",
        "Camera",
        "Fingerprint Scanner",
        "USB Disk",
        "Personal Identity Number",
        "Wi-Fi",
      ],
      specifications: {
        "Face Capacity": 20000,
        "Card Capacity": 20000,
        "Fingerprint Capacity": 25000,
        "Password Capacity": 20000,
        "Max Attendance Log": 500000,
        "Identify Mode": "Face, Fingerprint, Card, Password, and Combinations",
        Display: "8.5 Inch LCD",
        Communication: "TCP/IP, 4G (Optional)",
        "U-disk": "Supported",
        "Working voltage": "DC12V",
        "Working temperature": "-10°C~+50°C",
        "Working humidity(RH)": "20%~80%",
        "Self-test function": "Supported",
        "Power management": "Sleep Mode",
        "FAR/FRR": "0.001/1(%)",
        "Access Control": "Built In",
      },
      price: 60,
      type: "PT-20000-Pro",
      images: [{ original: localStorage.getItem("product7") }],
    },
    {
      title: "PT-600",
      features: [
        "Face Recognition",
        "RFID Reader",
        "PIN",
        "TCP/IP",
        "Access Control",
        "Cloud Connectivity",
        "Camera",
        "Lock Connectivity",
        "Alarm Connectivity",
        "Fingerprint Scanner",
        "USB Disk",
        "Wi-Fi",
      ],
      specifications: {
        "Face Capacity": 1000,
        "Card Capacity": 1000,
        "Fingerprint Capacity": 1000,
        "Password Capacity": 1000,
        "Max Attendance Log": 100000,
        "Identify Mode": "Face, Fingerprint, Card, Password, and Combinations",
        Display: "2.4 Inch TFT LCD",
        Communication: "TCP/IP, WiFi, USB, 4G (External)",
        "U-disk": "Supported",
        "Working voltage": "DC12V",
        "Working temperature": "-10°C ~ +60°C",
        "Working humidity(RH)": "20% ~ 80%",
        "Self-test function": "Supported",
        "Power management": "Sleep Mode",
        "FAR/FRR": "0.001/1(%)",
        "Access Control": "Built In",
      },
      price: 60,
      type: "PT-600",
      images: [{ original: localStorage.getItem("product8") }],
    },
    {
      title: "Pioneer Smart Camera c7",
      features: [
        "3MP Camera",
        "Motion Detection",
        "Smart Tracking",
        "Motorized Pan and Tilt 360",
        "Degree Visual Coverage",
        "Two-way Audio Intercom",
        "Night Vision",
        "Realtime Smart APP",
      ],

      price: 60,
      type: "Smart-Camera-c7",
      images: [{ original: localStorage.getItem("product9") }],
    },
    {
      title: "SDL 700",
      features: [
        "Fingerprint Unlock",
        "RFID Card",
        "Password Unlock",
        "Bluetooth",
        "Bell",
        "Access Control",
        "Realtime Smart APP",
      ],

      price: 60,
      type: "SDL-700",
      images: [{ original: localStorage.getItem("product10") }],
    },
    {
      title: "SDL A7",
      features: [
        "Fingerprint Unlock",
        "RFID Card",
        "Password Unlock",
        "App Unlock",
        "Wifi Smart Lock",
        "Realtime Smart App",
      ],

      price: 60,
      type: "SDL-A7",
      images: [{ original: localStorage.getItem("product11") }],
    },
    {
      title: "SDL 700",
      features: [
        "Fingerprint Unlock",
        "RFID Card",
        "Password Unlock",
        "Bluetooth",
        "Bell",
        "Access Control",
        "Realtime Smart APP",
      ],

      price: 60,
      type: "SDL-700",
      images: [{ original: localStorage.getItem("product10") }],
    },

    {
      title: "Pioneer Flower",
      description:
        "Step into the world of timeless beauty with the Pioneer Flower Wall Clock, an embodiment of elegance and precision. Dive into the unique features that distinguish this exquisite timepiece.",

      specifications: {
        Material: "Metal",
        Size: "15 x 15 Inches",
        Type: "Wall Clock",
        Color: "Powder Coated Gold",
      },
      price: 60,
      type: "pioneer-clocks-flower",
      images: [{ original: localStorage.getItem("product12") }],
    },
    {
      title: "Pioneer Chroma",
      description:
        "Unveil the modern elegance of the Pioneer Chroma Wall Clock, a perfect synthesis of style and functionality. Dive into the details that make this timepiece stand out.",
      specifications: {
        Material: "Metal",
        Size: "15 x 15 Inches",
        Type: "Wall Clock",
        Color: "Powder Coated White",
      },
      price: 60,
      type: "pioneer-clocks-chroma",
      images: [{ original: localStorage.getItem("product13") }],
    },
    {
      title: "Pioneer Hex",
      description:
        "Embrace contemporary elegance with the Pioneer Hex Wall Clock, a fusion of modern design and functionality. Explore the distinctive features that set this timepiece apart.Experience the meticulous craftsmanship and contemporary design that define the Pioneer Hex Wall Clock. Elevate your living space with this geometric-inspired timepiece, where form and function harmonize seamlessly.",
      specifications: {
        Material: "Metal",
        Size: "15 x 15 Inches",
        Type: "Wall Clock",
        Color: "Powder Coated White",
      },
      price: 60,
      type: "pioneer-clocks-hex",
      images: [{ original: localStorage.getItem("product14") }],
    },
    {
      title: "Pioneer Crown",
      description:
        "Unveil the regal charm of the Pioneer Crown Wall Clock, a seamless blend of elegance and functionality. Delve into the distinctive features that set this timepiece apart. Experience the luxurious design and meticulous craftsmanship that define the Pioneer Crown Wall Clock. Elevate your living space with this regal timepiece, symbolizing a perfect fusion of style and substance.",
      specifications: {
        Material: "Metal",
        Size: "15 x 15 Inches",
        Type: "Wall Clock",
        Color: "Powder Coated White",
      },

      price: 60,
      type: "pioneer-clocks-crown",
      images: [{ original: localStorage.getItem("product15") }],
    },
    {
      title: "Pioneer Gear",
      description:
        "Step into the world of industrial elegance with the Pioneer Gear Wall Clock, where functionality meets distinctive design. Explore the unique features that make this timepiece a standout addition. Experience the meticulous craftsmanship and distinctive design that define the Pioneer Gear Wall Clock. Transform your living space with this industrial-inspired timepiece, where form and function merge seamlessly.",
      specifications: {
        Material: "Metal",
        Size: "15 x 15 Inches",
        Type: "Wall Clock",
        Color: "Powder Coated Black",
      },

      price: 60,
      type: "pioneer-clocks-gear",
      images: [{ original: localStorage.getItem("product16") }],
    },
    {
      title: "Pioneer Pattern",
      description:
        "Step into a world of sophisticated design with the Pioneer Pattern Wall Clock, where intricate details meet modern aesthetics. Explore the defining features of this exquisite timepiece. Experience the meticulous craftsmanship and contemporary design that define the Pioneer Pattern Wall Clock. Elevate your living space with this stylish timepiece, where form and function merge seamlessly.",
      specifications: {
        Material: "Metal",
        Size: "15 x 15 Inches",
        Type: "Wall Clock",
        Color: "Powder Coated Black",
      },

      price: 60,
      type: "pioneer-clocks-pattern",
      images: [{ original: localStorage.getItem("product17") }],
    },
    {
      title: "Pioneer Skel",
      description:
        "Immerse yourself in contemporary design with the Pioneer Skel Wall Clock, where modern aesthetics meet precision craftsmanship. Explore the defining features of this exceptional timepiece. Experience the meticulous craftsmanship and contemporary design that define the Pioneer Skel Wall Clock. Elevate your living space with this stylish and sleek timepiece, where form and function merge seamlessly.",

      specifications: {
        Material: "Metal",
        Size: "15 x 15 Inches",
        Type: "Wall Clock",
        Color: "Powder Coated White",
      },

      price: 60,
      type: "pioneer-clocks-skel",
      images: [{ original: localStorage.getItem("product18") }],
    },

    {
      title: "Pioneer Roman",
      description:
        "Immerse yourself in timeless elegance with the Pioneer Roman Wall Clock, where classic design meets modern craftsmanship. Explore the distinctive features that make this timepiece a distinguished addition. Experience the meticulous craftsmanship and timeless design that define the Pioneer Roman Wall Clock. Elevate your living space with this stylish and classic timepiece, where form and function harmonize seamlessly.",

      specifications: {
        Material: "Metal",
        Size: "15 x 15 Inches",
        Type: "Wall Clock",
        Color: "Powder Coated Blue",
      },
      price: 60,
      type: "pioneer-clocks-roman",
      images: [{ original: localStorage.getItem("product19") }],
    },
    {
      title: "Pioneer Spear",
      description:
        "Immerse yourself in the contemporary elegance of the Pioneer Spear Wall Clock, where sleek design meets precision craftsmanship. Explore the distinctive features that make this timepiece a standout addition. Experience the meticulous craftsmanship and contemporary design that define the Pioneer Spear Wall Clock. Elevate your living space with this stylish and bold timepiece, where form and function harmonize seamlessly.",

      specifications: {
        Material: "Metal",
        Size: "15 x 15 Inches",
        Type: "Wall Clock",
        Color: "Powder Coated Blue",
      },

      /*
      clockfeatures: [
        {
          description:
            "Immerse yourself in the contemporary elegance of the Pioneer Spear Wall Clock, where sleek design meets precision craftsmanship. Explore the distinctive features that make this timepiece a standout addition.",
        },
        {
          title: "MATERIAL: ",
          subtitle: "Metal",
          description:
            "Crafted from high-quality metal, the Pioneer Spear Wall Clock embodies durability and a modern aesthetic, ensuring a striking addition to your space. ",
        },
        {
          title: "SIZE: ",
          subtitle: " 15 x 15 Inches",
          description:
            "With dimensions of 15 x 15 inches, the Pioneer Spear Wall Clock becomes a captivating centerpiece, adding a touch of contemporary flair to your living space.",
        },
        {
          title: "TYPE: ",
          subtitle: "Wall Clock",
          description:
            "Beyond its utilitarian function, the Pioneer Spear is a statement piece, seamlessly integrating into your decor to enhance the overall visual appeal.",
        },
        {
          title: "COLOR: ",
          subtitle: "Powder Coated Blue",
          description:
            "Immerse yourself in the serene and modern aesthetic of the Powder Coated Blue finish, adding a touch of sophistication to your interior.",
        },
        {
          description:
            "Experience the meticulous craftsmanship and contemporary design that define the Pioneer Spear Wall Clock. Elevate your living space with this stylish and bold timepiece, where form and function harmonize seamlessly.",
        },
      ], */
      price: 60,
      type: "pioneer-clocks-spear",
      images: [{ original: localStorage.getItem("product20") }],
    },
    {
      title: "Pioneer Astronomia",
      description:
        "Unveil the charm of the Pioneer Astronomia Wall Clock, a blend of functionality and aesthetic appeal, highlighted by its exquisite details. Experience the meticulous craftsmanship and attention to detail that define the Pioneer Astronomia Wall Clock. Elevate your living space with this exceptional timepiece, where form meets function in perfect harmony.",

      specifications: {
        Material: "Metal",
        Size: "15 x 15 Inches",
        Type: "Wall Clock",
        Color: "Powder Coated Gold",
      },

      /*

      clockfeatures: [
        {
          description: "Unveil the charm of the Pioneer Astronomia Wall Clock, a blend of functionality and aesthetic appeal, highlighted by its exquisite details. " },
        {
          title: "MATERIAL: ",
          subtitle: "Metal",
          description:
            "Immerse yourself in the durability and elegance of metal craftsmanship, ensuring a lasting and sophisticated timepiece.",
        },
        {
          title: "SIZE: ",
          subtitle: " 15 x 15 Inches",
          description:
            "The perfect dimensions of 15 x 15 inches make the Pioneer Astronomia Wall Clock a standout feature, commanding attention and becoming a focal point in any space.",
        },
        {
          title: "TYPE: ",
          subtitle: "Wall Clock",
          description:
            "More than just a timekeeping device, the Pioneer Astronomia is a stylish addition to your decor, blending seamlessly with various interior styles.",
        },
        {
          title: "COLOR: ",
          subtitle: "Powder Coated Gold",
          description:
            "Indulge in the opulence of the Powder Coated Gold finish, adding warmth and sophistication to your surroundings. This luxurious color choice ensures versatility in complementing diverse design preferences.",
        },
        {
          description:
            "Experience the meticulous craftsmanship and attention to detail that define the Pioneer Astronomia Wall Clock. Elevate your living space with this exceptional timepiece, where form meets function in perfect harmony.",
        },
      ],

      */

      price: 60,
      type: "pioneer-clocks-astronomia",
      images: [{ original: localStorage.getItem("product21") }],
    },
  ];

  const imageGalleryRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page when component mounts
  }, []);

  const selectedProduct = productsInDetails.find(
    (product) => product.type === productType
  );

  if (!selectedProduct) {
    return <div>You are wrong - Product not found</div>;
  }

  const items = selectedProduct.images.map((image, index) => {
    return {
      original: image.original,
      thumbnail: image.original, // Use the same image URL for both original and thumbnail
    };
  });

  return (
    <div className="image-gallery-container">
      <div className="product-info">
        <main className="prdouctDetailMain">
          <div className="images">
            <div ref={imageGalleryRef}>
              <ImageGallery
                items={items}
                infinite={true}
                showPlayButton={false}
                showFullscreenButton={false}
                lazyLoad={true}
                slideDuration={300}
              />
            </div>
          </div>

          <div className="right-side">
            <div className="wrapper">
              <h4 className="title">{selectedProduct.title}</h4>
              {/* <p className="main-text">{selectedProduct.description}</p> */}

              <div className="main-text">
                <p>{selectedProduct.description}</p>

                {/* {selectedProduct.clockfeatures &&
                  selectedProduct.clockfeatures.map((feature, index) => (
                    <div key={index}>
                      <br />
                      <h5 className="clock-prod-heading">
                        {feature.title}{" "}
                        <span className="clock-prod-subheading">
                          {feature.subtitle}
                        </span>
                      </h5>

                      <p className="clock-prod-descript">
                        {feature.description}
                      </p>
                    </div>
                  ))} */}

                {selectedProduct.features && (
                  <FeatureList features={selectedProduct.features} />
                )}
              </div>

              {/* <div className="prices">
                                <div className="price-and-discount">
                                    <h2 className="price">${selectedProduct.price}</h2>
                                </div>
                            </div> */}
              <div className="main-text">
                {selectedProduct.specifications && (
                  <Specifications
                    specifications={selectedProduct.specifications}
                  />
                )}
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default ProductDetails;
