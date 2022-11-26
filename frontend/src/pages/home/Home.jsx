import React from "react";
import Navbar from "../../components/navbar/Navbar";
import "./home.css";

const Home = () => {
  return(
    <>
       <div className="hero">

        <div className="Herotext">
          <h1>
             <span>Showcase your Web3 Projects to the world</span> 
          </h1>
          <h3>A platform to document your development journey</h3>
          </div> 
         
          <div className="buttons">
            
          <button type="button">Upload project</button>
          
          <button type="button">Sign up today</button>

          </div>

          <div className="banners">
          </div>

          <div className="featured"><h2>Featured Projects</h2></div>
          <div><h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4></div>

          <div className="Top">
               <div className="NFT"></div>
               <div className="see-all"></div>
          </div>
          

          </div>
  
          <div className="Cards"></div>

          <button type="button">Upload your project today</button>

          <div className="sub-hero">

            <div className="sub-hero-text">
             
            <div className="sub-hero-heading"><h1>We are a decentralized platform</h1></div>

            <div className="sub-hero-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</div>

            <button type="button">Learn More</button>

            </div>

            <div className="sub-hero-img"></div>

          </div>

         

          

    </>
  )
}

export default Home;