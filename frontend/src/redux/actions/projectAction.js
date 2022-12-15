import axios from 'axios';

import {
  FETCH_ALL,
  CREATE,
  UPDATE,
  DELETE,
  UPDATEDETAILS,
  FETCH_ALL_REQUEST,
  FETCH_ALL_ERROR,
  FETCH_BY_ID,
  FETCH_BY_ID_REQUEST,
  FETCH_BY_ID_ERROR
} from '../actionTypes/projectConstants';

const url = 'http://localhost:5000';

export const getPosts = () => async dispatch => {
  let config = {
    'Content-Type': 'application/json'
  };
  let url = 'http://localhost:5000' + '/users/project';
  try {
    dispatch({
      type: FETCH_ALL_REQUEST
    });
    const { data } = await axios.get(url, config);
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    //console.log(error);
    dispatch({
      type: FETCH_ALL_ERROR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
};

export const getPostById = id => async dispatch => {
  let config = {
    'Content-Type': 'application/json'
  };
  let url = 'http://localhost:5000' + '/users/project/' + id;
  try {
    dispatch({
      type: FETCH_BY_ID_REQUEST
    });
    const { data } = await axios.get(url, config);
    dispatch({ type: FETCH_BY_ID, payload: data });
  } catch (error) {
    //console.log(error);
    dispatch({
      type: FETCH_BY_ID_ERROR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
};

export const createPost = (title, body, image, desc, yt) => async (dispatch, getState) => {
  try {
    const {
      userLogin: { userInfo }
    } = getState();

    const config = {
      'Content-Type': 'application/json',
      headers: {
        Authorization: `Bearer ${userInfo.token}`
      }
    };
    const { data } = await axios.post(
      url + '/users/project',
      { title, body, image, desc, yt },
      config
    );
    //console.log(data);
    const action = { type: CREATE, payload: data };
    dispatch(action);
  } catch (error) {
    console.log(error);
  }
};

// export const getUpdates = id => async (dispatch, getState) => {
//   try {
//     const {
//       userLogin: { userInfo }
//     } = getState();

//     const config = {
//       'Content-Type': 'application/json',
//       headers: {
//         Authorization: `Bearer ${userInfo.token}`
//       }
//     };
//     const { data } = await axios.get(`${url}/${id}`, config);
//     // //console.log("ACTION:", data);

//     const action = { type: UPDATEDETAILS, payload: data };
//     dispatch(action);
//   } catch (error) {
//     // //console.log(error);
//   }
// };

// export const updatePost = (id, title, body) => async (dispatch, getState) => {
//   try {
//     const {
//       userLogin: { userInfo }
//     } = getState();

//     const config = {
//       'Content-Type': 'application/json',
//       headers: {
//         Authorization: `Bearer ${userInfo.token}`
//       }
//     };
//     // //console.log(userInfo);

//     const { data } = await axios.put(`${url}/${id}`, { title, body }, config);
//     const action = { type: UPDATE, payload: data };
//     dispatch(action);
//   } catch (error) {
//     // //console.log("error");
//   }
// };

// export const deletePost = id => async (dispatch, getState) => {
//   try {
//     const {
//       userLogin: { userInfo }
//     } = getState();

//     const config = {
//       'Content-Type': 'application/json',
//       headers: {
//         Authorization: `Bearer ${userInfo.token}`
//       }
//     };
//     await axios.delete(`${url}/${id}`, config);
//     const action = { type: DELETE, payload: id };
//     dispatch(action);
//   } catch (error) {
//     // //console.log(error);
//   }
// };
