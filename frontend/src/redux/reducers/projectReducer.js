import {
  FETCH_ALL,
  CREATE,
  UPDATE,
  DELETE,
  UPDATEDETAILS
} from '../actionTypes/projectConstants';

const initialstate = {
  project: [],
  data: {}
};

const Project = (state = initialstate, action) => {
  switch (action.type) {
    case FETCH_ALL:
      return { project: action.payload };
    case CREATE:
      //console.log(data);
      return { data: action.payload };

    case UPDATEDETAILS:
      return { project: action.payload };

    case UPDATE:
      return {
        data: action.payload
      };

    case DELETE:
      return {
        data: action.payload
      };

    default:
      // console.log(project);
      return state;
  }
};

export default Project;
