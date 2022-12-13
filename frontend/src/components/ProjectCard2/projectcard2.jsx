import React from "react";
import "./projectcard2.css";
import facebook from "../../assets/facebook2.svg";
import github from "../../assets/Github.svg";
import twitter from "../../assets/twitter2.svg";
import proc1 from "../../assets/img-proc.png";


const ProjectCard2 = () => {
  return(
    <>
      <div className="box-card">
        <div className="img-proc">
          <img src={proc1} alt="background-img" srcset="" />
        </div>
        <div className="content">

          <h1>Post Title</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. </p>

        </div>
        
        <div className="footer-card">
          <div className="footer-card-left">
            <a className="dates"></a>
          </div>

          <div className="footer-card-right">
            <a type="button">View</a>
          </div>
 
        </div>
      </div>
    </>
  )
}

export default ProjectCard2;