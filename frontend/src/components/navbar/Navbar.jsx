import React, { useState } from "react";
import "./navbar.css";
import { Routes, Route, Link, BrowserRouter as Router } from "react-router-dom";
import logo1 from "../../assets/elipse.svg";
import search from "../../assets/search.svg";
import profile from "../../assets/profile.svg";

// import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const Navbar = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
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
              <a href="">Upload</a>
            </div>
            <Link to="/" style={{ textDecoration: "none" }}>
              <img src={profile} alt="logo" className="profile" />
            </Link>
            <div>
              <Button variant="outlined" onClick={handleClickOpen}>
                SignIn
              </Button>
              <Dialog open={open} onClose={handleClose}>
                {/* <DialogTitle>Subscribe</DialogTitle> */}
                <DialogContent>
                  {/* <DialogContentText>
                    To subscribe to this website, please enter your email
                    address here. We will send updates occasionally.
                  </DialogContentText> */}
                  <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Email Address"
                    type="email"
                    fullWidth
                    variant="standard"
                  />
                  <TextField
                    autoFocus
                    margin="dense"
                    id="password"
                    label="Password"
                    type="email"
                    fullWidth
                    variant="standard"
                  />
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose}>Sign In</Button>
                  <Button onClick={handleClose}>Create Account</Button>
                </DialogActions>
              </Dialog>
            </div>
          </div>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
