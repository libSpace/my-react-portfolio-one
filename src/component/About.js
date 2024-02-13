import React from 'react'
import img from '../images/malik2-bg.png'
import './About.css'


export default function About() {
  return (
    <div className='about-container'>
      <div className='about'>
        <div className='abt-head'>
            <h1>Who am I</h1>
            <hr className='abt-line'></hr>
        </div>

        <div className='abt-content'>
            <div className='pic-left'>
                {/* my self picture */}
                <img className='abt-img' src={img} alt='my pic' width={'350rem'}  />
                <div class="fade-bottom"></div>
            </div>
            <div className='text-right'>
              <p className='text'>
                Hello, curious minds! 
              </p>
              <p className='text'>
              I'm Malik Malope,
              </p>
              <p className='text'>
              a perpetual learner on a quest for personal and professional growth. Beyond the resume, my story is shaped by a love for challenges, a commitment to adaptability, and an unwavering belief in the transformative power of continuous learning.  
              Let's explore the boundless possibilities together!
          
              </p>            
            </div>
        </div>
        <div className='box'>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  )
}
