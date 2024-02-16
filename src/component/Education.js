import React from 'react';
import './Education.css';
import younglings from './../images/younglings_va_logo.jpg';
import capaciti from './../images/capacitiza_logo.jpg';
import makata from './../images/school.png';
import uj from './../images/university-of-johannesburg-logo.png';

export default function Education() {
  return (
    <div className='main-ed-cont'>
        <h1 className='journey'>My journey</h1>
      <div className='timeline'>
        <div className='timeline-container left-container'>
          <img src={younglings}  alt='younglings logo'/>
          <div className='text-box'>
              <h2>Younglings Africa</h2>
              <h4>Junior Software Developer</h4>
              <small>2024 - current</small>
              <ul className='text-resp'>
                <li>Continuous Learning</li>
                <li>Troubleshooting and Debugging</li>
                <li>Quality Assurance</li>
                <li>Collaboration</li>
                <li>Coding and Development</li>
              </ul>
              <span className='left-cont-arrow'></span>
          </div>
        </div>        
        
        <div className='timeline-container right-container'>
        <img src={capaciti}  alt='capacity logo'/>
            <div className='text-box'>
              <h2>CapacitiZA</h2>
              <h4>Software Developer Intern</h4>
              <small>2023 - 2024</small>
              <ul className='text-resp'>
                <li>Learn Continuously</li>
                <li>Troubleshoot Issues</li>
                <li>Ensure Quality</li>
                <li>Team Collaboration</li>
                <li>Code Development</li>
              </ul>
              <span className='right-cont-arrow'></span>
            </div>
        </div> 
        
        <div className='timeline-container left-container'>
        <img src={makata}  alt='makata logo'/>
          <div className='text-box'>
            <h2>Makata Secondary School</h2>
            <h4>Teaching Assistant</h4>
            <small>2022 - 2023</small>
            <ul className='text-resp'>
                <li>Assisting in Mathematics classes</li>
                <li>Providing support to student</li>
                <li>Creating and implementing activities</li>
                <li>Collaborating with lead teachers</li>
                <li>Evaluating student progress</li>
            </ul>
            <span className='left-cont-arrow'></span>
          </div>
        </div> 
        
        <div className='timeline-container right-container'>
          <img src={uj}  alt='uj logo'/>
          <div className='text-box'>
            <h2>University of Johannesburg</h2>
            <h4>BSc in Mathematics and Mathematical Statistics</h4>
            <small>2016 - 2021</small>
            <ul className='text-resp'>
              <li>Engaged in coursework and research projects related to Mathematics and Mathematical Statistics</li>
              <li>Participated in academic and extracurricular activities</li>
              <li>Developed a solid foundation in mathematical principles and statistical analysis</li>
              <li>Collaborated with peers on group projects and assignments</li>
              <li>Acquired analytical and problem-solving skills through the study of mathematical concepts</li>
            </ul>
            <span className='right-cont-arrow'></span>
          </div>
        </div> 

      </div>
    </div>
  )
}
