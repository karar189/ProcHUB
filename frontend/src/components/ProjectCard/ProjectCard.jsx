import React from "react";
import "./project.css";

const ProjectCard = () => {
  return (
    <>
      <div className="box-card">
        <div className="img">
          <img src="" alt="background-img" srcset="" />
        </div>
        <div className="content">
          <h1>Project Name</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>

          <div className="tags">
            <span>React</span>
            <span>React</span>
            <span>React</span>
          </div>

          <div className="about">
            <h2>About</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
          </div>
        </div>
      </div>
      <div className="footer-card">
        <div className="footer-card-left">
          <div className="socials">
            <img src="" alt="github" srcset="" />
            <img src="" alt="twitter" srcset="" />
            <img src="" alt="linkedin" srcset="" />
          </div>
        </div>
        <div className="footer-card-right">
          <button type="button">View Project</button>
        </div>
      </div>
      <div />
    </>
  );
};

export default ProjectCard;
