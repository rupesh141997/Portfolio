import React from "react";
import ButtonLink from "./ButtonLink";
// import Slider from "react-slick";
import "./work.css";
import animatedweb from "../Assets/animation landing page.png";
import nikewebapp from "../Assets/nikelandingpage.png";


  /* <ButtonLink lin='https://rupesh141997.github.io/Animation-website-front-end/'/> */

// https://rupesh141997.github.io/Nike-Landing-Page/

export default function Work() {
  return (
    <div className="works-main">
      <div className="works-inner">
        <div className="works-heading">
          <h2>Recent Works</h2>
        </div>
        <div className="works-container">
          <div className="container-inner">
            <div className="cardsss">
              <img src={animatedweb} alt="" />
              <div className="cards-in">
                <p>
                  Animated static webpage using HTML, CSS, JavaScript and Gsap.
                </p>
                <ButtonLink lin="https://rupesh141997.github.io/Animation-website-front-end/" />
              </div>
            </div>
            <div className="cardsss">
              <img src={nikewebapp} alt="" />
              <div className="cards-in">
                <p> Static Nike Landing WebPage Using HTML , CSS.</p>
                <ButtonLink lin="https://rupesh141997.github.io/Nike-Landing-Page/" />
              </div>
            </div>

               
          </div>
        </div>
      </div>
    </div>
  );
}
