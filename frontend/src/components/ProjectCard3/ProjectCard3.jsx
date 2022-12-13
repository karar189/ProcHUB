import React from 'react';
import './projectcard3.css';
import proc1 from "../../assets/img-proc.png";
import logobg from "../../assets/logo-bg.png";
import tweetfooter from "../../assets/tweet-footer.png";
import gitfooter from "../../assets/git-footer.png";
import facebookfooter from "../../assets/facebook-footer.png";
import browserfooter from "../../assets/browser-footer.png";



const ProjectCard3 = () => {
  return (
    <>
         <div className="box-card">

         <div className="img-proc">
          <img src={proc1} alt="background-img" className="card3-bg" />
        </div>

        {/* <div className="logo">
          <img src={logobg} alt="logobg" className="" />
        </div> */}

      

          <div className="content">
            <h2>Project Name</h2>
            <p>A platform to take you NFT portfolio t...</p>
          </div>

          <div className="buttons">
          <button className="boxes">NFT</button>
          <button className="boxes">Trading</button>
          <button className="boxes">Trend</button>
          </div>

          <div className="footer">

            <div className="icons">

              <a href="" className="footer-icon">
                <img src= {tweetfooter} alt="icon-footer" className="icon-footer" />
              </a>

              <a href="" className="footer-icon">
              <img src= { gitfooter} alt="icon-footer" className="icon-footer" />
              </a>

              <a href="" className="footer-icon">
              <img src= {facebookfooter} alt="icon-footer" className="icon-footer" />
              </a>

              <a href="" className="footer-icon">
              <img src= {browserfooter} alt="icon-footer" className="icon-footer" />
              </a>

            </div>

            <div className="view">
            <a type="button">View</a>
          </div>
            
          </div>




        

         </div>
    </>
  )
}

export default ProjectCard3;