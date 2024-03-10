import { React , useEffect } from "react";
import Overview from "../Overview/Overview";
import TimeLine from "../Timline/Timeline";
import Footer from "../../HomePage/footer/Footer";


function AboutUs() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div id="about-us">
      <Overview />
      <TimeLine/>
      <Footer/>
    </div>
  );
}

export default AboutUs;
