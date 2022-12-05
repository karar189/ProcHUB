import React from "react";
import "./navbar.css";
import { Routes, Route, Link, BrowserRouter as Router } from "react-router-dom";
import logo1 from "../../assets/elipse.svg";
import search from "../../assets/search.svg";
import profile from "../../assets/profile.svg";

const Navbar = () => {
  return (
    <>
      <nav role="navigation">
        <ul id="menu">
          <div className="left">
            <Link to="/" style={{ textDecoration: "none" }}>
              <img src={logo1} alt="logo" className="logo" />
            </Link>
            <Link to="./projects" style={{ textDecoration: "none" }}>
              <p>Projects</p>
            </Link>
            <Link to="./ranks" style={{ textDecoration: "none" }}>
              <p>Ranks</p>
            </Link>
            <Link to="./blogs" style={{ textDecoration: "none" }}>
              <p>Blogs</p>
            </Link>
          </div>
          <div className="right">
            <div className="input">
              <img src={search} alt="searchicon" id="searchId" />
              <input type="search" placeholder="Search..." id="searchInput" />
            </div>

            <div className="upload">
              <button>Upload</button>
            </div>
            <Link to="/" style={{ textDecoration: "none" }}>
              <img src={profile} alt="logo" className="profile" />
            </Link>
          </div>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
