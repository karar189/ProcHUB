import {
  USER_LOGIN_FAILED,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_FAILED,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS
} from '../actionTypes/userConstants';

import axios from 'axios';

// user register action
export const userRegister = (username, email, password) => async dispatch => {
  try {
    dispatch({
      type: USER_REGISTER_REQUEST
    });

    const config = {
      'Content-Type': 'application/json'
    };
    const baseUrl = 'http://localhost:5000';
    const { data } = await axios.post(
      baseUrl + '/users/signup',
      { email, password, username },
      config
    );
    dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: data
    });

    // localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAILED,
      payload: error.response && error.response.data.message
      ? error.response.data.message
      : error.message
    });
  }
};

//user Login action
export const userLogin = (email, password) => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST
    });
    const baseUrl = 'http://localhost:5000';
    const config = {
      'Content-Type': 'application/json'
    };

    const { data } = await axios.post(baseUrl + '/users/login', { email, password }, config);
    //console.log(data);

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data
    });

    localStorage.setItem('userInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAILED,
      payload: error.message
    });
  }
};

// logout action
export const userLogout = () => dispatch => {
  localStorage.removeItem('userInfo');
  dispatch({
    type: USER_LOGOUT
  });
};
