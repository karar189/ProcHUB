import React, { useEffect, useState } from 'react';
import './catalogue.css';
// import ScriptTag from 'react-script-tag';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { color, Container } from '@mui/system';
import { useDispatch, useSelector } from 'react-redux';
import ProjectCard from '../../components/ProjectCard/ProjectCard';

import { makeStyles } from '@mui/styles';

import { getPosts } from '../../redux/actions/projectAction';

const Catalogue = () => {
  let { project, error, loading } = useSelector(state => state.userProject);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  console.log(project, error, loading);
  return (
    <>
      <div className="main-box">
        <Container>
          <div className="inner-box">
            <div className="left-filter">
              <Accordion sx={{ background: 'transparent', color: '#ffff' }}>
                <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
                  <Typography>Filter 1</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>Lorem ipsum dolor</Typography>
                </AccordionDetails>
              </Accordion>
              <br />
              <Accordion sx={{ background: 'transparent', color: '#ffff' }}>
                <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
                  <Typography>Filter 2</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>Lorem ipsum dolor</Typography>
                </AccordionDetails>
              </Accordion>
              <br />
              <Accordion sx={{ background: 'transparent', color: '#ffff' }}>
                <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
                  <Typography>Filter 3</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>Lorem ipsum dolor</Typography>
                </AccordionDetails>
              </Accordion>

              {/* <script src="./logic.js"></script> */}
            </div>
            <div className="right-content">
              {project &&
                project.map((project, index) => {
                  return <ProjectCard project={project} />;
                })}
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Catalogue;
