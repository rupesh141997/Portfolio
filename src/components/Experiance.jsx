import "./Experiance.css";
import virtusa from "../Assets/virtusa logo.jpg";
import hefshine from "../Assets/hefshine logo.jpg";
import SIC from "../Assets/SicLogo.jpeg";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";

export default function Experiance() {
  useEffect(() => {
    AOS.init({ duration: 800, offset: 200, once: false });
  }, []);
  return (
    <div className="exp">
      <div className="exp-in">
        <div className="left">
          <div className="left-head">
            <h2 data-aos="fade-in" data-aos-duration="800">
              Experience
            </h2>
          </div>
          <div className="left-in-1">
            <div
              className="left-in-1-in"
              data-aos="fade-right"
              data-aos-duration="800"
            >
              <img src={hefshine} alt="" />
              <h3> Hefshine Software </h3>
            </div>

            <h5 data-aos="fade-right" data-aos-duration="800">
              Full Stack Intern
            </h5>
            <p data-aos="fade-right" data-aos-duration="800">
              Feb 2021 - Nov 2021
            </p>
          </div>
          <div className="left-in-2">
            <div
              className="left-in-2-in"
              data-aos="fade-right"
              data-aos-duration="800"
            >
              <img src={virtusa} alt="" />
              <h3> Virtusa Consulting </h3>
            </div>
            <h5 data-aos="fade-right" data-aos-duration="800">
              Associate Engineer
            </h5>
            <p data-aos="fade-right" data-aos-duration="800">
              Nov 2021 - Dec 2022
            </p>
          </div>

          <div className="left-in-3">
            <div
              className="left-in-3-in"
              data-aos="fade-right"
              data-aos-duration="800"
            >
              <img src={SIC} alt="" />
              <h3> Mind Spark Technology </h3>
            </div>
            <h5 data-aos="fade-right" data-aos-duration="800">
              Software Engineer(React js Developer)
            </h5>
            <p data-aos="fade-right" data-aos-duration="800">
              Jan 2023 - Present
            </p>
          </div>

        </div>

        <div className="right">
          <div className="right-inerr">
            <div className="right-head">
              <h2 data-aos="fade-in" data-aos-duration="800">
                Education
              </h2>
            </div>
            <div className="right-in-1">
              <h3 data-aos="fade-left" data-aos-duration="800">
                BE (Computer Engineering)
              </h3>
              <h5 data-aos="fade-left" data-aos-duration="800">
                {" "}
                GCOERA
              </h5>
              <p data-aos="fade-left" data-aos-duration="800">
                2020
              </p>
            </div>
            <div className="right-in-2">
              <h3 data-aos="fade-left" data-aos-duration="800">
                HSC
              </h3>
              <h5 data-aos="fade-left" data-aos-duration="800">
                St. paul Jr College
              </h5>
              <p data-aos="fade-left" data-aos-duration="800">
                2015
              </p>
            </div>
            <div className="right-in-3">
              <h3 data-aos="fade-left" data-aos-duration="800">
                SSC
              </h3>
              <h5 data-aos="fade-left" data-aos-duration="800">
                {" "}
                St. paul High School College
              </h5>
              <p data-aos="fade-left" data-aos-duration="800">
                2013
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
