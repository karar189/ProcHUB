import { FETCH_BY_ID, FETCH_BY_ID_ERROR, FETCH_BY_ID_REQUEST } from "../actionTypes/projectConstants";

const initialState = {
  loading: false,
  data: {},
  error: null
};

const SingleProjectReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BY_ID_REQUEST:
      return {
        ...state,
        loading: true,
        data: {},
        error: null
      };
    case FETCH_BY_ID:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: null
      };
    case FETCH_BY_ID_ERROR:
      return {
        ...state,
        loading: false,
        data: {},
        error: action.payload
      };
    default:
      return state;
  }
};


export default SingleProjectReducer;