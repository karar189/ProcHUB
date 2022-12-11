import React from 'react';
import './project.css';
import facebook from '../../assets/facebook2.svg';
import github from '../../assets/Github.svg';
import twitter from '../../assets/twitter2.svg';
import linkedn from '../../assets/linkedn.svg';

import proc1 from '../../assets/img-proc.png';

const ProjectCard = () => {
  return (
    <>
      <div className="box-card">
        <div className="img-proc">
          <img src={proc1} alt="background-img" srcset="" />
        </div>
        <div className="content">
          <h1>Project Name</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>

          <div className="tag">
            <div className="tags">
              <span>React</span>
            </div>
            <div className="tags">
              <span>React</span>
            </div>
            <div className="tags">
              <span>React</span>
            </div>
          </div>

          <div className="about">
            <h2>About</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
          </div>
        </div>
        <div className="footer-card">
          <div className="footer-card-left">
            <a href="">
              {' '}
              <img src={facebook} alt={facebook} className="" />{' '}
            </a>
            <a href="">
              {' '}
              <img src={github} alt={github} className="" />{' '}
            </a>
            <a href="">
              {' '}
              <img src={twitter} alt={twitter} className="" />{' '}
            </a>
            {/* <a href="">
              {" "}
              <img src={linkedn} alt={linkedn} className="" />{" "}
            </a> */}
          </div>
          <div className="footer-card-right">
            <a type="button">View</a>
          </div>
        </div>
      </div>

      <div />
    </>
  );
};

export default ProjectCard;
