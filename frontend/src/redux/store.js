import { combineReducers, applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

// import { userLoginReducer, userRegisterReducer } from "./reducers/userReducer";
import { userLoginReducer, userRegisterReducer } from './reducers/userReducer';
import Project from './reducers/projectReducer';

const reducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userProject: Project
});

//GET user info from localstorage
const userInfoFromLocalstorage = JSON.parse(localStorage.getItem('userInfo'));

const initialState = {
  userLogin: { userInfo: userInfoFromLocalstorage }
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
