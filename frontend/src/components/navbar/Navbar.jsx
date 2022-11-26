import React from "react";
import "./navbar.css";
import { Routes, Route, Link, BrowserRouter as Router } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav role="navigation">
        <ul id="menu">
          <Link to="/" style={{ textDecoration: "none" }}>
            <img src="" alt="logo" className=""/>
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
        </ul>

        {/* <div className="Logo"></div>

        <div className="Projects">Projects</div>

        <div className="Ranking">Ranking</div>

        <div className="Blogs">Blogs</div>

        <div className="Search-button">
          <button type="search"> </button>
        </div>

        <div className="Upload-button">
          <button type="upload"> </button>
        </div>

        <div className="profile"></div> */}
      </nav>
    </>
  );
};

export default Navbar;
