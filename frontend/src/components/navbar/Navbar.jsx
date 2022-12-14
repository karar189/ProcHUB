import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { userLogin } from '../../redux/actions/userAction';
import { userLogout } from '../../redux/actions/userAction';
import { useDispatch, useSelector } from 'react-redux';

import './navbar.css';
import { Routes, Route, Link, BrowserRouter as Router } from 'react-router-dom';
import logo1 from '../../assets/elipse.svg';
import search from '../../assets/search.svg';
import profile from '../../assets/profile.svg';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const dispatch = useDispatch();
  const { userInfo } = useSelector(state => state.userLogin);
  console.log(userInfo);
  //handling logout
  const handleLogout = () => {
    dispatch(userLogout());
    alert('Logout Successful!!');
  };
  //showing please login first alert
  const handleAlert = () => {
    alert('Please login first');
  };

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

            {!userInfo ? (
              <Link onClick={handleAlert} style={{ textDecoration: 'none' }}>
                <div className="upload">Upload</div>
              </Link>
            ) : (
              <Link to="/upload" style={{ textDecoration: 'none' }}>
                <div className="upload">Upload</div>
              </Link>
            )}

            {!userInfo ? (
              <Link to="/login" style={{ textDecoration: 'none' }}>
                <div className="upload">Login</div>
              </Link>
            ) : (
              <Link style={{ textDecoration: 'none' }} onClick={handleLogout}>
                <div className="upload"> Logout</div>
                {/* <img src={profile} alt="" /> */}
              </Link>
              //to show profile avatar image
            )}
          </div>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
