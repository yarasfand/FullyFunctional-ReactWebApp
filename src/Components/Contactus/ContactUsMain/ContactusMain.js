import {React , useEffect} from "react";
import Footer from "../../HomePage/footer/Footer";
import ContactUsPageForm from "../ContactUsForm/ContactusPageForm";
import ContactUsLocation from "../contactUsLocation/ContactUsLocation";

function ContactUsMain() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
    return( 
  <div id="contact-us">
    <ContactUsPageForm/>
    <ContactUsLocation/>
    <Footer/>
  </div>
  );
}

export default ContactUsMain;
