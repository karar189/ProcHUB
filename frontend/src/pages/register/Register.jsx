import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import "./register.css";

// Redux
import { userRegister } from "../../redux/actions/userAction";
import { useDispatch, useSelector } from "react-redux";

const Register = ({ history }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  //redux
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.userLogin);
  const { serverError } = useSelector((state) => state.userRegister);
  //Redirect to Homepage if loggedin
  useEffect(
    (history) => {
      if (userInfo) {
        history.push("/");
      }
    },
    [history, userInfo]
  );

  //serverside validation
  useEffect(() => {
    if (serverError !== null) {
      setError("User with this email address already exist!");
    }
    if (serverError === true) {
      history.push("/");
    }
  }, [serverError, history]);

  const submitHandler = (event) => {
    event.preventDefault();
    if (username && email && password) {
      if (
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
          email
        )
      ) {
        if (password.match(/^[A-Za-z]\w{7,14}$/)) {
          dispatch(userRegister(username, email, password));
        } else {
          setError(
            "password must be between 7 to 16 characters which contain only characters, numeric digits, underscore and first character must be a letter"
          );
        }
      } else {
        setError("This is not the right email");
      }
    } else {
      setError("Please fill all the fields");
    }
  };
  const useStyles = makeStyles({
    "& .MuiTextField-root": {
      color: "white",
      border: "1px solid white",
      margin: 20,
    },
  });
  const classes = useStyles();
  return (
    <>
      <div className="formbody">
        {error ? <Alert severity="error">{error}</Alert> : ""}
        <div className="form">
          <input
            id="Name"
            label="Your Name"
            name="name"
            inputProps={{
              style: { color: "white" },
            }}
            autoFocus
            type="text"
            placeholder="Full Name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" onClick={submitHandler}>
            Register
          </button>
        </div>
      </div>
    </>
  );
};

export default Register;
