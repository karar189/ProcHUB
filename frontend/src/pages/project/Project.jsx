import React from "react";
import "./project.css";
import projectbg from '../../assets/projectbg.svg';
import projectimg from '../../assets/projectimg.svg';

const Project = () => {
  return(
    <>
      <section className="hero">
        <div className="project-intro">
          <div className="logo"></div>

          <div className="project-name">Project Name</div>

          <div className="social-links">
            <a href="">
              {" "}
              <img src={twitter} alt={twitter} className="" />{" "}
            </a>
            <a href="">
              {" "}
              <img src={github} alt={github} className="" />{" "}
            </a>
            <a href="">
              {" "}
              <img src={facebook} alt={facebook} className="" />{" "}
            </a>
            <a href="">
              {" "}
              <img src={compass} alt={compass} className="" />{" "}
            </a>
          </div>
        </div>

        <div className="project-interactions">
          <div className="buttons">
            <button className="">NFT</button>
            <button className="">Marketplace</button>
            <button className="">Tag1#</button>
            <button className="">Tag2#</button>
          </div>

          <div className="interact">
            <button className="likes"></button>
            <button className="comments"></button>
          </div>
        </div>

        <div className="project details">
          <h1>About project</h1>
          <h3>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos.
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos.
          </h3>
          <img src={projectimg} alt={img} className="" />
        </div>
      </section>
    </>
  );
};

export default Project;
