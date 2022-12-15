import React from 'react';

import './projectpage.css';
import ProjectCard from '../../components/ProjectCard/ProjectCard';

import projectimg from '../../assets/projectimg.svg';

import projectlogo from '../../assets/Projectlogo.svg';
import facebooksmall from '../../assets/Facebooksmall.svg';
import twittersmall from '../../assets/Twittersmall.svg';
import githubsmall from '../../assets/Githubsmall.svg';
import browsersmall from '../../assets/Browser.svg';
import likes from '../../assets/like.svg';
import comments from '../../assets/comment.svg';
import graphs from '../../assets/Line chart.svg';
import email from '../../assets/email.svg';
import coffee from '../../assets/starbucks.svg';
import { Container } from '@mui/material';

import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

//Actions
import { getPostById, getPosts } from '../../redux/actions/projectAction';
import { useParams } from 'react-router-dom';

const ProjectPage = () => {
  let { data: project, error, loading } = useSelector(state => state.userSingleProject);
  const dispatch = useDispatch();

  console.log(project, error, loading);

  // useEffect(() => {
  //   dispatch(getPosts());
  // }, [dispatch]);

  // get the id from the url using useParams
  const { id } = useParams();

  useEffect(() => {
    dispatch(getPostById(id));
  }, [dispatch]);

  return (
    <>
      <section className="heroic">
        <div className="project-intro">
          <div className="project-logo">
            <img src={projectlogo} alt="" className="pro-logo" />
          </div>

          <div className="project-name">
            <a> {project.title} </a>

            <p>{project.body}</p>
          </div>

          <div className="social-links2">
            <a href="">
              {' '}
              <img src={twittersmall} alt="twitter" className="socials" />{' '}
            </a>
            <a href="">
              {' '}
              <img src={githubsmall} alt="github" className="socials" />{' '}
            </a>
            <a href="">
              {' '}
              <img src={facebooksmall} alt="" className="socials" />{' '}
            </a>
            <a href="">
              {' '}
              <img src={browsersmall} alt="browser" className="socials" />{' '}
            </a>
          </div>
        </div>
      </section>

      <div className="project-interactions">
        <div className="buttons">
          <button className="boxes">NFT</button>
          <button className="boxes">Marketplace</button>
          <button className="boxes">Tag1#</button>
          <button className="boxes">Tag2#</button>
        </div>

        <div className="interactions">
          <button className="boxes2">
            <img src={likes} alt="likes" className="icons" />
            <p>6.2k</p>
          </button>

          <button className="boxes3">
            <img src={comments} alt="comments" className="icons" />
          </button>
        </div>
      </div>
      <br />
      <Container>
        <div className="project-details">
          <div className="project-texts">
            <h1>About project</h1>
            <h3>{project.body}</h3>
          </div>

          <div className="project-img">
            <img src={projectimg} alt="image" className="pimage" />
          </div>
        </div>
        <br />
        <div className="milestones">
          <div className="mile-head">Milestones</div>

          <div className="mile-contents">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et
            velit interdum ,ac aliquet <br /> odio mattis Class aptent taciti sociosqu ad litora
            torquent per conubia nostra, per inceptos himenaeos.
          </div>

          <div className="chart">
            <img src={graphs} alt="graphs" className="graphs" />
          </div>
        </div>
        <br />
        <div className="showcase">
          <div className="show-header">Showcase</div>

          <div className="show-contents">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et
            velit interdum, ac aliquet <br /> odio mattis Class aptent taciti sociosqu ad litora
            torquent per conubia nostra, per inceptos himenaeos.
          </div>

          <div className="video">
            <iframe
              width="720"
              height="360"
              src="https://www.youtube.com/embed/h7MYJghRWt0"
              frameborder="0"
              allowfullscreen
            ></iframe>
          </div>
        </div>

        {/* <section className="cards">
        <div className="feature">
          <div className="feat"> We were featured on</div>

          <div className="feat2">See all</div>
        </div>

        <div className="card-section">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </section> */}

        <section className="team-section">
          <div>
            <h1>The Team</h1>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et
              velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora
              torquent per conubia nostra, per inceptos himenaeos.
            </p>
          </div>

          <div className="team-images">
            <div className="ind-image">
              <img src="" alt="" className="timg" />
            </div>

            <div className="ind-image">
              <img src="" alt="" className="timg" />
            </div>

            <div className="ind-image">
              <img src="" alt="" className="timg" />
            </div>

            <div className="ind-image">
              <img src="" alt="" className="timg" />
            </div>
          </div>

          <div className="contact">
            <h1>Get in touch</h1>

            <div className="contact-us">
              <div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero
                  et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad
                  litora torquent per conubia nostra, per inceptos himenaeos.
                </p>
              </div>

              <div className="contact-buttons">
                <button className="contact-btn">
                  <div className="hachu">
                    {' '}
                    <span>
                      {' '}
                      <img src={email} alt="email" className="puku" />{' '}
                    </span>
                    Send us an email{' '}
                  </div>
                </button>

                <button className="contact-btn">
                  <div className="hachu">
                    <span>
                      {' '}
                      <img src={coffee} alt="coffee" className="puku" />{' '}
                    </span>
                    Buy us a coffee{' '}
                  </div>
                </button>
              </div>
            </div>
          </div>
        </section>
      </Container>

      <hr className="line"></hr>
    </>
  );
};

export default ProjectPage;

// const ProjectPage = () => {
//   return (
//     <>
//       <section className="heroic">
//         <div className="project-intro">
//           <div className="project-logo">
//             <img src={projectlogo} alt="" className="pro-logo" />
//           </div>

//           <div className="project-name">
//             <a> Project Name </a>

//             <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
//           </div>

//           <div className="social-links2">
//             <a href="">
//               {' '}
//               <img src={twittersmall} alt="twitter" className="socials" />{' '}
//             </a>
//             <a href="">
//               {' '}
//               <img src={githubsmall} alt="github" className="socials" />{' '}
//             </a>
//             <a href="">
//               {' '}
//               <img src={facebooksmall} alt="" className="socials" />{' '}
//             </a>
//             <a href="">
//               {' '}
//               <img src={browsersmall} alt="browser" className="socials" />{' '}
//             </a>
//           </div>
//         </div>
//       </section>

//       <div className="project-interactions">
//         <div className="buttons">
//           <button className="boxes">NFT</button>
//           <button className="boxes">Marketplace</button>
//           <button className="boxes">Tag1#</button>
//           <button className="boxes">Tag2#</button>
//         </div>

//         <div className="interactions">
//           <button className="boxes2">
//             <img src={likes} alt="likes" className="icons" />
//             <p>6.2k</p>
//           </button>

//           <button className="boxes3">
//             <img src={comments} alt="comments" className="icons" />
//           </button>
//         </div>
//       </div>

//       <div className="project-details">
//         <div className="project-texts">
//           <h1>About project</h1>
//           <h3>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et
//             velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora
//             torquent per conubia nostra, per inceptos himenaeos.
//             <br />
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et
//             velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora
//             torquent per conubia nostra, per inceptos himenaeos.
//           </h3>
//         </div>

//         <div className="project-img">
//           <img src={projectimg} alt="image" className="pimage" />
//         </div>
//       </div>

//       <div className="milestones">
//         <div className="mile-head">Milestones</div>

//         <div className="mile-contents">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et
//           velit interdum ,ac aliquet <br /> odio mattis Class aptent taciti sociosqu ad litora
//           torquent per conubia nostra, per inceptos himenaeos.
//         </div>

//         <div className="chart">
//           <img src={graphs} alt="graphs" className="graphs" />
//         </div>
//       </div>

//       <div className="showcase">
//         <div className="show-header">Showcase</div>

//         <div className="show-contents">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et
//           velit interdum, ac aliquet <br /> odio mattis Class aptent taciti sociosqu ad litora
//           torquent per conubia nostra, per inceptos himenaeos.
//         </div>

//         <div className="video">
//           <iframe
//             width="720"
//             height="360"
//             src="https://www.youtube.com/embed/h7MYJghRWt0"
//             frameborder="0"
//             allowfullscreen
//           ></iframe>
//         </div>
//       </div>

//       <section className="cards">
//         <div className="feature">
//           <div className="feat"> We were featured on</div>

//           <div className="feat2">See all</div>
//         </div>

//         {/* <div className="card-section">
//           <ProjectCard />
//           <ProjectCard />
//           <ProjectCard />
//         </div> */}
//       </section>

//       <section className="team-section">
//         <div>
//           <h1>The Team</h1>

//           <p>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et
//             velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora
//             torquent per conubia nostra, per inceptos himenaeos.
//           </p>
//         </div>

//         <div className="team-images">
//           <div className="ind-image">
//             <img src="" alt="" className="timg" />
//           </div>

//           <div className="ind-image">
//             <img src="" alt="" className="timg" />
//           </div>

//           <div className="ind-image">
//             <img src="" alt="" className="timg" />
//           </div>

//           <div className="ind-image">
//             <img src="" alt="" className="timg" />
//           </div>
//         </div>

//         <div className="contact">
//           <h1>Get in touch</h1>

//           <div className="contact-us">
//             <div>
//               <p>
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero
//                 et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad
//                 litora torquent per conubia nostra, per inceptos himenaeos.
//               </p>
//             </div>

//             <div className="contact-buttons">
//               <button className="contact-btn">
//                 <div className="hachu">
//                   {' '}
//                   <span>
//                     {' '}
//                     <img src={email} alt="email" className="puku" />{' '}
//                   </span>
//                   Send us an email{' '}
//                 </div>
//               </button>

//               <button className="contact-btn">
//                 <div className="hachu">
//                   <span>
//                     {' '}
//                     <img src={coffee} alt="coffee" className="puku" />{' '}
//                   </span>
//                   Buy us a coffee{' '}
//                 </div>
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>

//       <hr className="line"></hr>
//     </>
//   );
// };

// export default ProjectPage;
