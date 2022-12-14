import React, { useEffect, useState } from 'react';
import './catalogue.css';
import { Container } from '@mui/system';
import { useDispatch, useSelector } from 'react-redux';
import ProjectCard from '../../components/ProjectCard/ProjectCard';

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
              {/* code for a mui accordion filter dark themed */}
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
