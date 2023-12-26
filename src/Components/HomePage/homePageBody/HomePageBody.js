import HeroSlider from "../firstHeroSlider/HeroSlider";
import MidCarousel from "../midbody/MidCarousel";
import UpperPart from "../upperbody/UpperPart";
import ReviewSect from "../testimonials/ReviewSect";
import ContactForm from "../contactForm/ContactForm";
import  Footer  from "../footer/Footer";
import AboveNavbar from  "../../NavComponents/AboveNavbar";


function HomePageBody() {
  return (
    <div>
      <div>
        <AboveNavbar/>
        <HeroSlider/>
        <UpperPart/>
        <MidCarousel/>
        <ReviewSect/>
        <ContactForm/>
        <Footer/>
      </div>
    </div>
  );
}

export default HomePageBody;
