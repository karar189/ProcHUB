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
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const history = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // REDUX
  const dispatch = useDispatch();
  const { userInfo, isAuthenticated, serverError } = useSelector(state => state.userLogin);
  // redirect to home page if logged in
  useEffect(() => {
    if (userInfo) {
      history.push('/');
    }
  }, [history, userInfo]);
  useEffect(() => {
    if (serverError === 'Request failed with status code 404') {
      setError('No account associated with this email');
    }
  }, [serverError]);
  useEffect(() => {
    if (serverError === 'Request failed with status code 401') {
      setError('Invalid email or password');
    }
  }, [serverError]);

  // submit handler
  const submitHandler = event => {
    event.preventDefault();
    if (email !== '' && password !== '') {
      dispatch(userLogin(email, password));
      if (isAuthenticated) {
        history.push('/');
      }
    } else {
      alert('Please Provide Your Credentials Properly!');
    }
    console.log('email', email);
    console.log('password', password);
  };

  return (
    <>
      {error ? <Alert severity="error">{error}</Alert> : ''}
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
