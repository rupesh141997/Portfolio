
import ButtonLink from "./ButtonLink";
// import Slider from "react-slick";
import "./work.css";
import animatedweb from "../Assets/animation landing page.png";
import nikewebapp from "../Assets/nikelandingpage.png";
import portfolioapp from "../Assets/portfolioProject.png";
import fortuneEdu from "../Assets/fortune-edu.png";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";


  /* <ButtonLink lin='https://rupesh141997.github.io/Animation-website-front-end/'/> */

// https://rupesh141997.github.io/Nike-Landing-Page/

export default function Work() {
  useEffect(() => {
    AOS.init({duration: 800,
      offset: 200,
      once: false,});
  }, [])
  return (
    <div className="works-main">
      <div className="works-inner">
        <div className="works-heading">
          <h2>Recent Works</h2>
        </div>
        <div className="works-container">
          <div className="container-inner">
            <div className="cardsss" data-aos="zoom-in-up" data-aos-duration="1500">
              <img src={animatedweb} alt="" />
              <div className="cards-in">
                <p>
                  Animated static webpage using HTML, CSS, JavaScript and Gsap.
                </p>
                <ButtonLink lin="https://rupesh141997.github.io/Animation-website-front-end/" />
              </div>
            </div>
            <div className="cardsss" data-aos="zoom-in-up" data-aos-duration="1500">
              <img src={nikewebapp} alt="" />
              <div className="cards-in">
                <p> Static Nike Landing WebPage Using HTML , CSS.</p>
                <ButtonLink lin="https://rupesh141997.github.io/Nike-Landing-Page/" />
              </div>
            </div>

            <div className="cardsss" data-aos="zoom-in-up" data-aos-duration="1500">
              <img src={portfolioapp} alt="" />
              <div className="cards-in">
                <p> Responsive Functional portfolio using Raect Js , Animate on Scroll.  </p>
                <ButtonLink lin="https://rupesh-borkar.netlify.app/" />
              </div>
            </div>

            <div className="cardsss" data-aos="zoom-in-up" data-aos-duration="1500">
              <img src={fortuneEdu} alt="" />
              <div className="cards-in">
                <p> Dynamic website Fortune Education Services Using Next js , FireBase .</p>
                <ButtonLink lin="https://fortuneeduservices.com/" />
              </div>
            </div>

               
          </div>
        </div>
      </div>
    </div>
  );
}
