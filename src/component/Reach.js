import React from 'react';
import './Reach.css';
import reachSvg from './../images/phone-call.svg';
import ReCAPTCHA from "react-google-recaptcha";
// Icons from react icons
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Reach() {
  const form = document.querySelector("form");

  form.addEventListener("submit", (e) => {
    e.preventDefault(); // Fix: add parentheses
    // do nothing if form not validated
    if (!validateForm(form)) return;
  });

  const validateForm = (form) => {
    let valid = true;
    // check for empty fields
    let name = form.querySelector(".name");
    let message = form.querySelector(".message");
    let email = form.querySelector(".email");

    if (name.value.trim() === "") { // Fix: check for empty string using trim()
      giveError(name, "please enter your name");
      valid = false;
    }
    if (message.value.trim() === "") { // Fix: check for empty string using trim()
      giveError(message, "please enter a message");
      valid = false;
    }
    // email validation
    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let emailValue = email.value;
    if (!emailRegex.test(emailValue)) {
      giveError(email, "Please enter a valid email");
      valid = false;
    }

    return valid;
  };

  const giveError = (field, message) => {
    let parentElement = field.parentElement;
    parentElement.classList.add("error");
    // if error msg already exists, remove it
    let existingError = parentElement.querySelector(".err-msg");
    if (existingError) {
      existingError.remove();
    }

    let error = document.createElement("span");
    error.textContent = message;
    error.classList.add("err-msg");
    parentElement.appendChild(error);
  };

  return (
    <>
      <div className='reach-container'>
        <div className='reach-left'>
          <h3 className='reach-heading'>Get in touch</h3>
          <p className='reach-text'>Contact me for any project or any opportunity you have for me</p>

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
                className='message' // Fix: Correct className
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
  );
}
