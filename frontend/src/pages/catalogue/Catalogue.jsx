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
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { makeStyles } from '@mui/styles';

import { getPosts } from '../../redux/actions/projectAction';

const Catalogue = () => {
  let { project, error, loading } = useSelector(state => state.userProject);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  // useEffect(() => {
  //   dispatch(getPostById());
  // }, [dispatch]);

  //console.log(project, error, loading);
  return (
    <>
      <div className="main-box">
        <Container>
          <div className="inner-box">
            <div className="left-filter">
              <Accordion
                sx={{ background: 'transparent', color: '#ffff' }}
                //expandicon
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>All</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>Lorem ipsum dolor</Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion sx={{ background: 'transparent', color: '#ffff' }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>Infrastrusture</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>Project name 1#</Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>Project name 1#</Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>Project name 1#</Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>Project name 1#</Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion sx={{ background: 'transparent', color: '#ffff' }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>DAPPs</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>Lorem ipsum dolor</Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion sx={{ background: 'transparent', color: '#ffff' }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>NFT</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>Lorem ipsum dolor</Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion sx={{ background: 'transparent', color: '#ffff' }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>Gaming</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>Lorem ipsum dolor</Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion sx={{ background: 'transparent', color: '#ffff' }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>Ecosystem</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>Lorem ipsum dolor</Typography>
                </AccordionDetails>
              </Accordion>
            </div>
            <div className="right-content">
              <div className="inner-right">
                {project &&
                  project.map((project, index) => {
                    return <ProjectCard project={project} />;
                  })}
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Catalogue;
