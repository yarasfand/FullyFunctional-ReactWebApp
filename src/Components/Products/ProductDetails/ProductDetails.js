import React, { useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "./ProductDetails.css";

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
            images: [{ original: productImage1 }],
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
            images: [{ original: productImage2 }],
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
            images: [{ original: productImage3 }],
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
            images: [{ original: productImage4 }],
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
            images: [{ original: productImage5 }],
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
            images: [{ original: productImage6 }],
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
            images: [{ original: productImage7 }],
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
            images: [{ original: productImage8 }],
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
                "Realtime Smart APP"
            ],

            price: 60,
            type: "Smart-Camera-c7",
            images: [{ original: productImage9 }],
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
            images: [{ original: productImage10 }],
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
            images: [{ original: productImage11 }],
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
                            <p className="main-text">{selectedProduct.description}</p>
                            <div className="main-text">
                                <FeatureList features={selectedProduct.features} />
                            </div>
                            {/* <div className="prices">
                                <div className="price-and-discount">
                                    <h2 className="price">${selectedProduct.price}</h2>
                                </div>
                            </div> */}
                            <div className="main-text">
                                {selectedProduct.specifications && (
                                    <Specifications specifications={selectedProduct.specifications} />
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
