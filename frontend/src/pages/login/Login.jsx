import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Alert from '@mui/material/Alert';
import './login.css';
//Redux
import { userLogin } from '../../redux/actions/userAction';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // REDUX
  const dispatch = useDispatch();
  const { userInfo, isAuthenticated, serverError, serverData } = useSelector(
    state => state.userLogin
  );
  // redirect to home page if logged in
  useEffect(() => {
    if (userInfo || serverData) {
      navigate('/');
    }
  }, [userInfo, serverData]);

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
        navigate('/');
      }
    } else {
      setError('Please Provide Your Credentials Properly!');
    }
    //console.log(email);
    //console.log(password);
    //console.log(isAuthenticated);
    //console.log(serverError);
    //console.log(userInfo);
  };

  return (
    <>
      <div className="formbody">
        {error ? <Alert severity="error">{error}</Alert> : ''}
        {/* if error true then toast error using toastify */}
        {/* {error ?? toast.error} */}
        {/* {error ? toast.error(error) : ''} */}

        <div className="form">
          <h2 style={{ color: 'white' }}>Login</h2>
          <input
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <div className="button-class">
            <button type="submit" onClick={submitHandler}>
              Login
            </button>
            <Link to="/register">
              <button type="submit">Register</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
