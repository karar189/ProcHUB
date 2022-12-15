import {
  FETCH_ALL,
  CREATE,
  UPDATE,
  DELETE,
  UPDATEDETAILS,
  FETCH_ALL_REQUEST,
  FETCH_ALL_ERROR,
  FETCH_BY_ID
} from '../actionTypes/projectConstants';

const initialstate = {
  project: [],
  error: null,
  data: {},
  loading: false
};

const Project = (state = initialstate, action) => {
  switch (action.type) {
    case FETCH_ALL_REQUEST:
      return { loading: true, project: [], error: null };
    case FETCH_ALL:
      return { project: action.payload, loading: false, error: null };
    case FETCH_ALL_ERROR:
      return { error: action.payload, loading: false, project: [] };
    case CREATE:
      console.log(data);
      return { data: action.payload };
    case FETCH_BY_ID:
      console.log(data);
      return { data: action.payload };

    // case UPDATEDETAILS:
    //   return { project: action.payload };

    // case UPDATE:
    //   return {
    //     data: action.payload
    //   };

    // case DELETE:
    //   return {
    //     data: action.payload
    //   };

    default:
      // console.log(project);
      return state;
  }
};

export default Project;
