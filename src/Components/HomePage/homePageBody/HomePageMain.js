import {React, useEffect} from "react";
import HeroSlider from "../firstHeroSlider/HeroSlider";
import UpperPart from "../upperbody/UpperPart";
import MidCarousel from "../midbody/MidCarousel";
import ReviewSect from "../sponsors/ReviewSect";
import ContactForm from "../contactForm/ContactForm";
import Footer from "../footer/Footer";


function HomePageMain(){
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page when component mounts
      }, []);
    return(
        <div>
            <HeroSlider/>
            <UpperPart/>
            <MidCarousel/>
            <ReviewSect/>
            <ContactForm/>
            <Footer/>
        </div>
    );
}


export default HomePageMain;