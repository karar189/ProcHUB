import React from "react";
import projectbg from "../../assets/projectbg.svg";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import projectimg from "../../assets/projectimg.svg";
import "./projectPage.css";
import projectlogo from "../../assets/Projectlogo.svg";
import facebooksmall from "../../assets/Facebooksmall.svg";
import twittersmall from "../../assets/Twittersmall.svg";
import githubsmall from "../../assets/Githubsmall.svg";
import browsersmall from "../../assets/Browser.svg"
import likes from "../../assets/like.svg";
import comments from "../../assets/comment.svg";
import graphs from "../../assets/Line chart.svg";


const ProjectPage = () => {
  return (
    <>
      <section className="heroic">

        <div className="project-intro">

          <div className="project-logo">
            <img src={projectlogo} alt="" className="pro-logo" />
          </div>

          <div className="project-name">

            <a> Project Name </a>
            
            <span >Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>

            </div>

          <div className="social-links2">
            <a href="">
              {" "}
              <img src={twittersmall} alt="twitter" className="socials" />{" "}
            </a>
            <a href="">
              {" "}
              <img src={githubsmall} alt="github"className="socials" />{" "}
            </a>
            <a href="">
              {" "}
              <img src={facebooksmall} alt="" className="socials" />{" "}
            </a>
            <a href="">
              {" "}
              <img src={browsersmall} alt="browser" className="socials" />{" "}
            </a>
          </div>

        </div>

        </section>

        <div className="project-interactions">

          <div className="buttons">
            <button className="boxes">NFT</button>
            <button className="boxes">Marketplace</button>
            <button className="boxes">Tag1#</button>
            <button className="boxes">Tag2#</button>
          </div>

          <div className="interactions">
            
            <button className="boxes2">
             <img src={likes} alt="likes" className="icons" /> <span>6.9K</span>
            </button>

            <button className="boxes3">
              <img src={comments} alt="comments" className="icons" />
            </button>

          </div>

        </div>

        <div className="project-details">
          <div className="project-texts">
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
          </div>

          <div className="project-img">
          <img src={projectimg} alt="image" className="pimage" />
          </div>

          
        </div>

        <div className="milestones">

          <div className="mile-head">Milestones</div>

          <div className="mile-contents">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum ,ac aliquet <br/> odio mattis  Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos.
          </div>

          <div className="chart">
            <img src={graphs} alt="graphs" className="graphs" />
          </div>

          {/* <button className="puku"></button> */}

        </div>

        <div className="showcase">
          <div className="show-header">Showcase</div>

          <div className="show-contents">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet <br/> odio mattis Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos.
          </div>

          <div className="chart"></div>

          <button className="puku"></button>
        </div>
      

      <section className="cards">
        
        <div className="feature">
          <div>
            {" "}
            <a className="">We were Featured on</a>
            <a>See all</a>{" "}
          </div>
          
          <div className="card-section">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>

        </div>
      </section>
    </>
  );
};

export default ProjectPage;
