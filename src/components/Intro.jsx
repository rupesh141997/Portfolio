import "./intro.css";
import { Link } from "react-router-dom";
import profile from "../Assets/profile.png";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import linkedin from "../Assets/linkedin.png";
import leetcode from "../Assets/LeetCode_Logo_1.png";
import github from "../Assets/gitlogo.png";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
// import pdf from '../Assets/Rupesh_Charandas_Borkar.pdf';

export default function Intro() {
  const [text] = useTypewriter({
    words: ["Front End", "Java"],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 120,
  });

  const openInNewTabProfile = (url) => {
    window.open(url, "_blank", "noreferrer");
  };

  // ------------------resume dowunload------------------------------

  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch("RUPESH_CHARANDAS_BORKAR_CV.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "RUPESH_CHARANDAS_BORKAR_CV.pdf";
        alink.click();
      });
    });
  };

  useEffect(() => {
    AOS.init({ duration: 800, offset: 80, once: false });
  }, []);
  return (
    <div className="intro">
      
      <div className="intro-contain">
        <div className="inner" data-aos="fade-right" data-aos-duration="1500">
          <h5>hello,</h5>
          <h4>I'm rupesh</h4>
          <h4>
            <span className="sp">{text}</span>
            <Cursor cursorStyle="." deleteSpeed="800" typeSpeed="400" />
          </h4>
          <h4>Developer</h4>
          <p>
            I am a skilled and passionate web Developer with experience in
            creating visually appealing and user-friendly website
          </p>
          <div className="links-part">
            <Link>
              <button className="bt" onClick={onButtonClick}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                  />
                </svg>
                Download CV
              </button>
            </Link>
            {/* //---------------------------------------profilr links----------------------------- */}

            <div className="profiles">
              <button
                className="butt"
                role="link"
                onClick={() =>
                  openInNewTabProfile(
                    "https://www.linkedin.com/in/rupesh-borkar-2183b6190/"
                  )
                }
              >
                <img src={linkedin} alt="" />
              </button>
              <button
                className="butt"
                role="link"
                onClick={() =>
                  openInNewTabProfile("https://leetcode.com/rupesh123/")
                }
              >
                <img src={leetcode} alt="" />
              </button>
              <button
                className="butt"
                role="link"
                onClick={() =>
                  openInNewTabProfile("https://github.com/rupesh141997")
                }
              >
                <img src={github} alt="" />
              </button>
            </div>

            {/* { ----------------------------------------------------------------------------------} */}
          </div>
        </div>

        <div
          className="prof"
          data-aos="fade-left" data-aos-duration="1500"
        >
          <img className="bg" loading="lazy" src={profile} alt="fjkhjf" />
        </div>
        
      </div>

    </div>
  );
}
