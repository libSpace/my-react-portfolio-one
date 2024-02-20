import React from 'react';
import './Reach.css';
import reachSvg from './../images/phone-call.svg';
import ReCAPTCHA from "react-google-recaptcha";
// Icons from react icons
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";




export default function Reach() {
  return (
    <>
      <div className='reach-container'>
        <div className='reach-left'>
          <h3 className='reach-heading'>Get in touch</h3>
          <p className='reach-text'>Contact me for any project or anyy oportunity you have for me</p>

          <form action='#'>
            <div className='inputBox'>
              <input 
                type='text' 
                name='name' 
                className='name' 
                placeholder='Enter your name'/>
            </div>
            <div className='inputBox'>
              <input 
                type='text' 
                name='email' 
                className='email' 
                placeholder='Enter your email'/>
            </div>
            <div className='inputBox'>
              <textarea 
                type='text' 
                name='message' 
                className='nmessage' 
                placeholder='Enter your message...'/>
            </div>
            {/* <button class="g-recaptcha"
              data-sitekey="6LfCCngpAAAAAIY6K5cKTjHj-JNE3GmYbQrD0Ewo"
              data-callback='onSubmit'
              data-action='submit'>
              Submit
            </button> */}
            <ReCAPTCHA className='capcha' sitekey="6Lc0zXcpAAAAACZhNyaHzJ-xqBg_QdQ_m93TZKA8"/>
              {/* onChange={handleCaptchaChange} */}
            <button className='reach-btn'>Submit</button>
          </form>
        </div>

        <div className='reach-right'>
          <div className='illustration'>
            <img src={reachSvg} alt='contact svg' className='reach-image' />
          </div>
          <div className='reach-socials'>
            <FaGithubSquare className="reach-soc-icons" />
            <FaLinkedin     className="reach-soc-icons" />
          </div>
        </div>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
      </div>
    </>
  )
}
