import React from 'react';
import Validation from './Validation';
import './Reach.css';
import reachSvg from './../images/phone-call.svg';
import ReCAPTCHA from "react-google-recaptcha";
// Icons from react icons
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { useState } from 'react';
// import emailjs from 'emailjs-com';



export default function Reach() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    message:''
  })

  const [errors,setErrors] = useState({})

  function handleInput(event){
    const newObj = {...values, [event.target.name]: event.target.value}
    setValues(newObj)

    // // Email ks serviceID , templateID, and public key
    // const serviceID = "service_8h7egp3";
    // const templateID = "template_yjjp0mr";
    // const publicKey = "9uh1U_4h3RWE2rxUd";
  
    // // creating a new object that contains dynamic template parameters
    // const tempParams = {
    //   name: values.name,
    //   email: values.email,
    //   message: values.message,
    // };
  
    // emailjs.send(serviceID, templateID, tempParams, publicKey)
    // .then((response) => {
    //   console.log("Email sent successfully!", response);
    //   setValues({
    //     name: '',
    //     email: '',
    //     message: '',
    //   });
    // });
    
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
                // onSubmit={}
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
