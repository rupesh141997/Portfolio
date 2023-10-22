import React  from "react";
import './Experiance.css';
import virtusa from '../Assets/virtusa logo.jpg';
import hefshine from '../Assets/hefshine logo.jpg';

export default  function Experiance(){
    return(

        <div className="exp">
            <div className="exp-in">
                <div className="left">
                        <div className="left-head">
                            <h2>Experience</h2>
                        </div>
                        <div className="left-in-1">
                            <div className="left-in-1-in"> 
                            <img src={hefshine} alt="" />
                             <h3>  Hefshine Software </h3>
                             </div>
                            
                            <h5>Full Stack Intern</h5>
                            <p>Feb 2021 - Nov 2021</p>
                        </div>
                        <div className="left-in-2">
                            <div className="left-in-2-in"> 
                            <img src={virtusa} alt="" />
                           <h3>  Virtusa Consulting  </h3>  
                           </div>
                            <h5>Associate Engineer</h5>
                            <p>Nov 2021 - Dec 2022</p>
                        </div>
                </div>
                 
                <div className="right">
                        <div className="right-inerr">
                            <div className="right-head">
                                <h2>Education</h2>
                            </div>
                            <div className="right-in-1">
                                <h3>BE (Computer Engineering)</h3>
                                 <h5> GCOERA</h5>
                                <p>2020</p>
                            </div>
                            <div className="right-in-2">
                                <h3>HSC</h3>
                                <h5>St. paul Jr College</h5>
                                <p>2015</p>
                            </div>
                            <div className="right-in-3">
                            <h3>SSC</h3>
                            <h5> St. paul High School College</h5>
                                <p>2013</p>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    );
}
