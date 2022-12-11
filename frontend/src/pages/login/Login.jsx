import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Alert from "@mui/material/Alert";
import "./login.css";
//Redux
import { userLogin } from "../../redux/actions/userAction";
import { useDispatch, useSelector } from "react-redux";
const Login = () => {
  const history = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // REDUX
  const dispatch = useDispatch();
  const { userInfo, isAuthenticated, serverError } = useSelector(
    (state) => state.userLogin
  );
  // redirect to home page if logged in
  useEffect(() => {
    if (userInfo) {
      history.push("/");
    }
  }, [history, userInfo]);

  useEffect(() => {
    if (serverError === "Request failed with status code 404") {
      setError("No account associated with this email");
    }
  }, [serverError]);
  useEffect(() => {
    if (serverError === "Request failed with status code 401") {
      setError("Invalid email or password");
    }
  }, [serverError]);

  // submit handler
  const submitHandler = (event) => {
    event.preventDefault();
    if (email !== "" && password !== "") {
      dispatch(userLogin(email, password));
      if (isAuthenticated) {
        history.push("/");
      }
    } else {
      setError("Please Provide Your Credentials Properly!");
    }
  };

  return (
    <>
      <div className="formbody">
        {error ? <Alert severity="error">{error}</Alert> : ""}
        <div className="form">
          <input
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            placeholder="Email"
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
          />
          <input
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            placeholder="Password"
            // value={password}
            // onChange={(e) => setPassword(e.target.value)}
          />
          <div className="button-class">
            <button type="submit" onClick={submitHandler}>
              Login
            </button>
            <Link to="/register">
              <button type="submit">Sign Up</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
