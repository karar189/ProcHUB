import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { userLogin } from '../../redux/actions/userAction';
import { useDispatch, useSelector } from 'react-redux';

import './navbar.css';
import { Routes, Route, Link, BrowserRouter as Router } from 'react-router-dom';
import logo1 from '../../assets/elipse.svg';
import search from '../../assets/search.svg';
import profile from '../../assets/profile.svg';

// import * as React from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Alert from '@mui/material/Alert';

const Navbar = () => {
  

  return (
    <>
      <nav role="navigation">
        <ul id="menu">
          <div className="left">
            <Link to="/" style={{ textDecoration: 'none' }}>
              <img src={logo1} alt="logo" className="logo" />
            </Link>
            <Link to="./projects" style={{ textDecoration: 'none' }}>
              <p>Projects</p>
            </Link>
            <Link to="./ranks" style={{ textDecoration: 'none' }}>
              <p>Ranks</p>
            </Link>
            <Link to="./blogs" style={{ textDecoration: 'none' }}>
              <p>Blogs</p>
            </Link>
          </div>
          <div className="right">
            <div className="input">
              <img src={search} alt="searchicon" id="searchId" />
              <input type="search" placeholder="Search..." id="searchInput" />
            </div>
            <Link to="/" style={{ textDecoration: 'none' }}>
              <div className="upload">Upload</div>
            </Link>

            <Link to="/login" style={{ textDecoration: 'none' }}>
              {/* <img src={profile} alt="logo" className="profile" /> */}
              <div className="upload">Login</div>
            </Link>
          </div>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
