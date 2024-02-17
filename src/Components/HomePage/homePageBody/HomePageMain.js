import React from "react";
import HeroSlider from "../firstHeroSlider/HeroSlider";
import UpperPart from "../upperbody/UpperPart";
import MidCarousel from "../midbody/MidCarousel";
import ReviewSect from "../testimonials/ReviewSect";
import ContactForm from "../contactForm/ContactForm";
import Footer from "../footer/Footer";


function HomePageMain(){
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