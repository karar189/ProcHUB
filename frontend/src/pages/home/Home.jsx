import React from "react";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import "./home.css";
import bg from "../../assets/apple-bg.svg";
import illustration from "../../assets/Decentralised.svg";

const Home = () => {
  return (
    <>
      <div className="hero">
        <div className="herotext ">
          <h1 className="heading">
            <span>Showcase your Web3 Projects to the world</span>
          </h1>
          <h3>A platform to document your development journey</h3>
        </div>

        <div className="button-div">
          <a href="">
            {" "}
            <button type="button">Upload project</button>
          </a>

          <a href="">
            <button type="button"> Sign up today</button>
          </a>
        </div>

        <div className="banner">
          <div className="box">
            <h1>1500+</h1>
            <p>Curated projects</p>
          </div>
          <div className=" box">
            <h1>10k+</h1>
            <p>Careers Upskilled</p>
          </div>
          <div className="box">
            <h1>$150k</h1>
            <p>Raised in revenue</p>
          </div>
        </div>
      </div>
      <div className="featured">
        <h1 className="heading ">Featured Projects</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <br />
        <br />
        <div className="slider">slider</div>
        <br />
        <br />
        <div className="title">
          <div className="left ">
            <p>Top 3 of 109 NFT Projects</p>
          </div>
          <div className="right">
            <p>View all</p>
          </div>
        </div>
        <br />
        <div className="card-section">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
        <br />
        <br />
        <div className="upload-btn">
          <a href="">Upload Your Project Today</a>
        </div>
      </div>
      <div className="about-main about section 1">
        <div className="about1">
          <div className="about1-left">
            <h1>We are a decentralized platform</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              malesuada, nunc vel tincidunt lacinia, nisl nisl aliquam nunc, nec
              aliquam nisl nisl sit
            </p>
            <br />
            <div className="button">
              <a href="">Read More</a>
            </div>
          </div>
          <div className="about1-right">
            <img src={illustration} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
