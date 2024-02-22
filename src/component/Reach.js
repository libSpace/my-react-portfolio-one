import React from 'react';
import Validation from './Validation';
import './Reach.css';
import contactForm from '../images/contact.png';
import ReCAPTCHA from "react-google-recaptcha";
// Icons from react icons
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { useState } from 'react';
// import emailjs from 'emailjs-com';



export default function Reach() {

  // function downloadCv() {
  //   const link = document.createElement('a');
  //   link.href = '../resume/Malik\'s Resume.pdf';
  //   link.download = 'Malik\'s_Resume.pdf'; // Specify the desired file name
  //   document.body.appendChild(link);
  //   link.click();
  //   document.body.removeChild(link);
  // }
// function gitHub() {
//     window.open('https://github.com/libSpace', '_blank');
//   }
  const gitHub = () => {
    window.open('https://github.com/libSpace', '_blank');
  };
  const linkedIn = () => {
    window.open('https://www.linkedin.com/in/malikmphomalope', '_blank');
  };
// function downloadCv() {
//     window.open('../resume/Malik\'s Resume.pdf', '_blank');
//   }


  // Validation
  const [values, setValues] = useState({
    name: '',
    email: '',
    message:''
  })

  const [errors,setErrors] = useState({})

  function handleInput(event){
    const newObj = {...values, [event.target.name]: event.target.value}
    setValues(newObj)

    
    
  }
  function handleValidation(event) {
    event.preventDefault();
    setErrors(Validation(values));
 
  }
  

  return (
    <>
      <div id='#contact' className='reach-container'>
        <div className='reach-left'>
          <h3 className='reach-heading'>Get in touch</h3>
          <p className='reach-text'>Contact me for any project or anyy oportunity you have for me</p>

          <form action='#contact' onSubmit={handleValidation}>
            <div className='inputBox'>
              <input  
                style={{
                  boxShadow: errors.name ? "0 0 1rem rgba(255, 0, 0, 0.5)" :"0 0 1rem rgba(0, 128, 0, 0.5)"
                  }} 
                type='text' 
                name='name' 
                className='name' 
                placeholder='Enter your name'
                onChange={handleInput}
               
                />
                {errors.name && <p style={{color:"red"}}>{errors.name}</p>}
            </div>
            <div className='inputBox'>
              <input 
                style={{
                  boxShadow: errors.email ? "0 0 1rem rgba(255, 0, 0, 0.5)" :"0 0 1rem rgba(0, 128, 0, 0.5)"
                  }} 
                type='text' 
                name='email' 
                className='email' 
                placeholder='Enter your email'
                onChange={handleInput}/>
                {errors.email && <p style={{color:"red"}}>{errors.email}</p>}
            </div>
            <div className='inputBox'>
              <textarea 
                style={{
                boxShadow: errors.message ? "0 0 1rem rgba(255, 0, 0, 0.5)" :"0 0 1rem rgba(0, 128, 0, 0.5)"
                }} 
                type='text' 
                name='message' 
                className='message' 
                
                onChange={handleInput}/>
                {errors.message && <p style={{color:"red"}}>{errors.message}</p>}
            </div>
            <button className='reach-btn'>Submit</button>
            <ReCAPTCHA className='capcha' sitekey="6Lcqn3opAAAAAA0jWrBAT0QnKBoKqTuAQEHPYlef"/>
              {/* onChange={handleCaptchaChange} */}
            
          </form>
        </div>

        <div className='reach-right'>
          <div className='illustration'>
            <img src={contactForm} alt='contact svg' className='reach-image' />
          </div>
          <div className='reach-socials'>
            <FaGithubSquare onClick={gitHub} className="reach-soc-icons" />
            <FaLinkedin     onClick={linkedIn} className="reach-soc-icons" />
          </div>
          <p>Copyright (c) 2024 Malik Malope. All rights reserved.</p>
        </div>
        
      </div>
    </>
  )
}
