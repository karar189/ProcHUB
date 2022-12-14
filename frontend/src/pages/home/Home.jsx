import React, { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { userLogin } from '../../redux/actions/userAction';
import { userLogout } from '../../redux/actions/userAction';
import { useDispatch, useSelector } from 'react-redux';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import { Link } from 'react-router-dom';
import './home.css';
import illustration from '../../assets/Decentralised.svg';
import { makeStyles } from '@mui/styles';
// import makeStyles from "@mui/styles/makeStyles";

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

import { getPosts } from '../../redux/actions/projectAction';

const Home = () => {
  const [counter, setCounter] = useState(true);
  let { project, error, loading } = useSelector(state => state.userProject);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  useEffect(() => {}, [dispatch]);

  if (counter) {
    dispatch(getPosts());
    console.log('dispatched');
    setCounter(false);
  }

  console.log(project, error, loading);

  const useStyles = makeStyles({
    tabs: {
      '& .MuiTab.root': {
        color: 'white'
      },
      '& .MuiTabs-indicator': {
        backgroundColor: 'transparent'
        // height: 3,
        // border: "1px solid red",
      },
      '& .MuiTab-root.Mui-selected': {
        color: '#eaaeff'
      },
      '& button': {
        color: 'white',
        border: '1px solid white',
        borderRadius: '25px',
        margin: '7px'
      },

      '& .button:active': {
        outline: 'pink',
        backgroundColor: 'blue'
      }
      // style to show focused button coloured
    }
  });

  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const classes = useStyles();

  const [toggle, setToggle] = useState(false);

  const { userInfo } = useSelector(state => state.userLogin);
  console.log(userInfo);
  const handleAlert = () => {
    alert('Please login first');
  };

  return (
    <>
      <div className="hero">
        <div className="herotext ">
          <h1 className="heading">
            <span>Showcase your Web3 Projects to the world</span>
          </h1>
          <h3>A platform to document your development journey</h3>
        </div>

        <div className="button-div">
          {userInfo ? (
            <Link to="/upload">
              <button type="button">Upload project</button>
            </Link>
          ) : (
            <Link onClick={handleAlert}>
              <button type="button">Upload project</button>
            </Link>
          )}

          <Link to="/register">
            <button type="button"> Register today</button>
          </Link>
        </div>

        <div className="banner">
          <div className="box">
            <h1>1500+</h1>
            <p>Curated projects</p>
          </div>
          <div className=" box">
            <h1>10k+</h1>
            <p>Careers Upskilled</p>
          </div>
          <div className="box">
            <h1>$150k</h1>
            <p>Raised in revenue</p>
          </div>
        </div>
      </div>
      <div className="featured">
        <div className="header">
          <h1 className="heading ">Featured Projects</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        <br />
        <br />
        <div className="slider">
          {' '}
          <Box
            sx={{
              maxWidth: { xs: 320, sm: 980 },
              bgcolor: 'transparent',
              color: 'white'
            }}
          >
            <Tabs
              value={value}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons
              allowScrollButtonsMobile
              aria-label="scrollable force tabs example"
              className={classes.tabs}
            >
              <Tab sx={{ color: 'secondary' }} label="Item One" />
              <Tab label="Item Two" className={classes.tab} />
              <Tab label="Item Three" />
              <Tab label="Item Four" />
              <Tab label="Item Five" />
              <Tab label="Item Six" />
              <Tab label="Item Seven" />
              <Tab label="Item One" />
              <Tab label="Item Two" />
              <Tab label="Item Three" />
              <Tab label="Item Four" />
              <Tab label="Item Five" />
              <Tab label="Item Six" />
              <Tab label="Item Seven" />
              <Tab label="Item One" />
              <Tab label="Item Two" />
              <Tab label="Item Three" />
              <Tab label="Item Four" />
              <Tab label="Item Five" />
              <Tab label="Item Six" />
              <Tab label="Item Seven" />
            </Tabs>
          </Box>
        </div>

        <br />
        <br />
        <div className="title">
          <div className="left ">
            <p>
              <span className="herotext">
                <h3 style={{ width: '75px' }}>Top 3</h3>
              </span>{' '}
              of{' '}
              <span className="herotext">
                <h3 style={{ width: '50px' }}> 109 </h3>
              </span>{' '}
              NFT Projects
            </p>
          </div>
          <div className="right">
            <p>View all</p>
          </div>
        </div>
        <br />
        <div className="card-section">
          {project &&
            project.map((project, index) => {
              if (index > 2) return;
              return <ProjectCard project={project} />;
            })}
        </div>
        <br />
        <br />
        <div className="upload-btn">
          <a href="">Upload Your Project Today</a>
        </div>
      </div>
      <div className="about-main about section 1">
        <div className="about1">
          <div className="about1-left">
            <h1>We are a decentralized platform</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada, nunc vel
              tincidunt lacinia, nisl nisl aliquam nunc, nec aliquam nisl nisl sit
            </p>
            <br />
            <div className="button">
              <a href="">Read More</a>
            </div>
          </div>
          <div className="about1-right">
            <img src={illustration} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
