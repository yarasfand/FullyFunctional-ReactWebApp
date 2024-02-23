// ProductDetails.js
import React, { useRef, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css"; 
import "./ProductDetails.css";

import detailImage1 from "./ProductDetailsAssets/cmpny.jpg";
import detailImage2 from "./ProductDetailsAssets/cmpnyagain.jpg";
import detailImage3 from "./ProductDetailsAssets/firstback.jpg";
import detailImage4 from "./ProductDetailsAssets/wp.webp";
import Footer from "../../HomePage/footer/Footer";

function ProductDetails() {
    const { productType } = useParams();

    const productsInDetails = [
        {
            title: "Product 1",
            description: "Say goodbye to traditional keys and passwords. Our biometric products utilize state-of-the-art fingerprint recognition technology, ensuring a secure and personalized access experience.",
            price: 50,
            type: "FingerPrintScanners",
            images: [{ original: detailImage1 }, { original: detailImage2 }],
        },
        {
            title: "Product 2",
            description: "Description 2",
            price: 60,
            type: "Say goodbye to traditional keys and passwords. Our biometric products utilize state-of-the-art fingerprint recognition technology, ensuring a secure and personalized access experience.",
            images: [{ original: detailImage3 }, { original: detailImage4 }],
        },
    ];

    const imageGalleryRef = useRef(null);
    const [showNav, setShowNav] = useState(window.innerWidth < 1000);

    useEffect(() => {
        
        const handleResize = () => {
            setShowNav(window.innerWidth < 1000);
        };

        window.addEventListener("resize", handleResize);

       
        return () => {
            window.removeEventListener("resize", handleResize);
        };
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
                                showNav={showNav}
                                slideDuration={300}
                            />
                        </div>
                    </div>
                    <div className="right-side">
                        <div className="wrapper">
                            <h4 className="title">
                                {selectedProduct.title}
                            </h4>
                            <p className="main-text">
                                {selectedProduct.description}
                            </p>
                            <div className="prices">
                                <div className="price-and-discount">
                                    <h2 className="price">${selectedProduct.price}</h2>
                                </div>
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
