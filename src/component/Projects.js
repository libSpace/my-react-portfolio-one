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
      <div className='pro-wrapper'>
        <div className='pro-container'>
          <div className='image-cube' ref={cubeRef}>
            <div className='proj-front'>
              <img src={project1} alt='cartalogue1' />
            </div>

            <div className='proj-right'>
              <img src={project2} alt='cartalogue2' />
            </div>

            <div className='proj-back'>
              <img src={project3} alt='cartalogue3' />
            </div>

            <div className='proj-left'>
              <img src={project4} alt='cartalogue4' />
            </div>
          </div>
        </div>
        <div className='proj-btns'>
          <button id='proj-prev'>
            <CiCircleChevLeft className='proj-prev-icon' />
          </button>
          <button id='proj-next'>
            <CiCircleChevRight className='proj-next-icon' />
          </button>
        </div>
      </div>
    </div>
  );
}
