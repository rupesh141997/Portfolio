import React from "react";
import "./myskills.css";
import htmllogo from '../Assets/htmllogo.png';
import csslogo from '../Assets/csslogo.png';
import jslogo from '../Assets/jslogo.png';
import reactlogo from '../Assets/reactlogo.png';
import javalogo from '../Assets/javalogo.png';
import gitlogo from '../Assets/gitlogo.png';
import mysqllogo from '../Assets/mysqllogo.png'
import springbootlogo from '../Assets/icons8-spring-boot-96.png';

export default function Myskills() {
  return (
    <>
      <div className="skills">
        <h2>My Skills</h2>
        <div className="skills-inner">
          <div className="cards">
            <img src={htmllogo} alt="" />
            <p>HTML</p>
          </div>
          <div className="cards">
            <img src={csslogo} alt="" />
            <p>CSS</p>
          </div>
          <div className="cards">
            <img src={jslogo} alt="" />
            <p>JS</p>
          </div>
          <div className="cards">
            <img src={reactlogo} alt="" />
            <p>REACT</p>
          </div>
          <div className="cards">
            <img src={javalogo} alt="" />
            <p>JAVA</p>
          </div>
          <div className="cards">
           <img src={gitlogo} alt="" />
            <p>GITHUB</p>
          </div> 
          <div className="cards">
           <img src={mysqllogo} alt="" />
            <p>GITHUB</p>
          </div> 
          <div className="cards">
           <img src={springbootlogo} alt="" />
            <p>SpringBoot</p>
          </div> 
        </div>
      </div>
    </>
  );
}
