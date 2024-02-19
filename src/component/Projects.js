import React, { useRef, useEffect } from 'react';
import './Projects.css';
import project1 from './../images/proj1.png';
import project2 from './../images/proj2.png';
import project3 from './../images/proj3.png';
import project4 from './../images/proj4.png';

import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";

export default function Projects() {
  const cubeRef = useRef(null);

  useEffect(() => {
    const cube = cubeRef.current;
    const btnNext = document.getElementById("proj-next");
    const btnPrev = document.getElementById("proj-prev");

    let pos = 0;

    const handleNextClick = () => {
      pos -= 90;
      cube.style.transform = `rotateY(${pos}deg)`;
    };

    const handlePrevClick = () => {
      pos += 90;
      cube.style.transform = `rotateY(${pos}deg)`;
    };

    btnNext.addEventListener("click", handleNextClick);
    btnPrev.addEventListener("click", handlePrevClick);

    // Cleanup event listeners when the component unmounts
    return () => {
      btnNext.removeEventListener("click", handleNextClick);
      btnPrev.removeEventListener("click", handlePrevClick);
    };
  }, []);

  return (
    <div className='proj-main-container'>
      <h1 className='proj-head'>Check out some of my projects</h1>
      <p className='proj-para'>I've had the opportunity to lead the development of various 
        projects from inception to completion, employing a full tech stack. 
        These experiences have not only enhanced my technical proficiency 
        but also ignited my enthusiasm for creating innovative and 
        robust solutions</p>
        <div className="slider-container">
          <div className="sliding-text"><h1><strong>PASSION</strong></h1></div>
         
        </div>
      <div className='pro-wrapper'>
        <div className='pro-container'>
          <div className='image-cube' ref={cubeRef}>
            <div id='proj-pic' className='proj-front'>
              <img className='proj-img' src={project1} alt='cartalogue1' />
            </div>

            <div id='proj-pic' className='proj-right'>
              <img className='proj-img' src={project2} alt='cartalogue2' />
            </div>

            <div id='proj-pic' className='proj-back'>
              <img className='proj-img' src={project3} alt='cartalogue3' />
            </div>

            <div id='proj-pic' className='proj-left'>
              <img className='proj-img' src={project4} alt='cartalogue4' />
            </div>
          </div>
        </div>
        <div className='proj-btns'>
          <button className='proj-buttons' id='proj-prev'>
            <CiCircleChevLeft className='proj-prev-icon' />
          </button>
          <button className='proj-buttons' id='proj-next'>
            <CiCircleChevRight className='proj-next-icon' />
          </button>
        </div>
      </div>
    </div>
  );
}
