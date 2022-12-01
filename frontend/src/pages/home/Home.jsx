import React from "react";
import Navbar from "../../components/navbar/Navbar";
import "./home.css";
import bg from "../../assets/apple-bg.svg";

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
        <div className="slider"></div>
      </div>
    </>
  );
};

export default Home;
