
import "./myskills.css";
import htmllogo from '../Assets/htmllogo.png';
import csslogo from '../Assets/csslogo.png';
import jslogo from '../Assets/jslogo.png';
import reactlogo from '../Assets/reactlogo.png';
import javalogo from '../Assets/javalogo.png';
import gitlogo from '../Assets/gitlogo.png';
import mysqllogo from '../Assets/mysqllogo.png'
import springbootlogo from '../Assets/icons8-spring-boot-96.png';

import AOS from 'aos';
import 'aos/dist/aos.css';
import React,{useEffect} from "react";


export default function Myskills() {

  useEffect(() => {
    AOS.init({duration: 800,
      offset: 80,
      once: false,});
  }, [])

  return (
    <>
      <div className="skills">
        <h2 >My Skills</h2>
        <div className="skills-inner">
          <div className="cards" data-aos="fade-in" data-aos-duration="1500">
            <img src={htmllogo} alt="" />
            <p >HTML</p>
          </div>
          <div className="cards" data-aos="fade-in" data-aos-duration="1500">
            <img src={csslogo} alt="" />
            <p>CSS</p>
          </div>
          <div className="cards" data-aos="fade-in" data-aos-duration="1500">
            <img src={jslogo} alt="" />
            <p>JS</p>
          </div>
          <div className="cards" data-aos="fade-in" data-aos-duration="1500">
            <img src={reactlogo} alt="" />
            <p>REACT js</p>
          </div>
          <div className="cards" data-aos="fade-in" data-aos-duration="1500">
            <img src={javalogo} alt="" />
            <p>JAVA</p>
          </div>
          <div className="cards" data-aos="fade-in" data-aos-duration="1500">
           <img src={gitlogo} alt="" />
            <p>GITHUB</p>
          </div> 
          <div className="cards" data-aos="fade-in" data-aos-duration="1500">
           <img src={mysqllogo} alt="" />
            <p>Mysql</p>
          </div> 
          <div className="cards" data-aos="fade-in" data-aos-duration="1500">
           <img src={springbootlogo} alt="" />
            <p>SpringBoot</p>
          </div> 
        </div>
      </div>
    </>
  );
}
