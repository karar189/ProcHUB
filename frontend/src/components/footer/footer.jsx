import React from "react";
import logo1 from "../../assets/elipse.svg";
import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";
import twitter from "../../assets/twitter.svg";
import linkedn from "../../assets/linkedn.svg";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">

        <div className="left-side">
          <div>
            <img src={logo1} alt="logo" className="logo" />
          </div>

          <div className="footer-text">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing <br/> elit. Nunc vulputate libero et velit interdum, ac  <br/>  aliquet</p>{" "}
          </div>

          <div className="social-links">
            <a href="">
              {" "}
              <img src={facebook} alt={facebook} className="" />{" "}
            </a>
            <a href="">
              {" "}
              <img src={instagram} alt={instagram} className="" />{" "}
            </a>
            <a href="">
              {" "}
              <img src={twitter} alt={twitter} className="" />{" "}
            </a>
            <a href="">
              {" "}
              <img src={linkedn} alt={linkedn} className="" />{" "}
            </a>
          </div>
        </div>



        <div className="right-side">
          <div className="company" >  
            <a className="headings">Company</a>

            <a className="sub-heading">Link 1#</a>
            <a className="sub-heading">Link 2#</a>
            <a className="sub-heading">Link 3#</a>
            <a className="sub-heading">Link 4#</a>
          </div>

          <div className="about">
            <a className="headings">About</a>

            <a className="sub-heading">Link 1#</a>
            <a className="sub-heading">Link 2#</a>
          </div>

          <div className="policies">

            <a className="headings">Policies</a>

            <a className="sub-heading">Link 1#</a>
            <a className="sub-heading">Link 2#</a>
            <a className="sub-heading">Link 3#</a>

          </div>
        </div>

      </div>

      <div className="copyright">Copyright 2022 @ SUI Hub</div>
    </>
  );
};


export default Footer;
