import React from 'react';
import './Projects.css';
import project1 from './../images/proj1.png'
import project2 from './../images/proj2.png'
import project3 from './../images/proj3.png'
import project4 from './../images/proj4.png'

export default function Projects() {
  return (
    <div>
      <div className='pro-wrapper'>
        <div className='pro-container'>
            <div className='image-cube'>
                <div className='proj-front'>
                    <img src={project1} alt='cartalogue1'></img>
                </div>
                
                <div className='proj-right'>
                    <img src={project2} alt='cartalogue2'></img>
                </div>
                
                <div className='proj-back'>
                    <img src={project3} alt='cartalogue3'></img>
                </div>
                
                <div className='proj-left'>
                    <img src={project4} alt='cartalogue4'></img>
                </div>
            </div>
        </div>
      </div>
      <div className='proj-btns'>
        <button id='proj-prev'>
            
        </button>
        <button id='proj-next'>

        </button>
      </div>
    </div>
  )
}
