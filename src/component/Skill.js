import React from "react";
import img from '../images/MALIK-removebg-preview.png';
import './Skill.css';

function Skill(){
    return (
        <div className="cont">
        <div className="logo-skill">
            <div className="main-img">
                <span className="circle" ></span>   
                <span className="circle" ></span>   
                <span className="circle" ></span>   
                <span className="circle" ></span>   
                <span className="circle" ></span>   
                <span className="circle" ></span>   
                <span className="circle" ></span>   
                <span className="circle" ></span>   
            </div>
            <img className="skill-image" src={img} alt="My self" /> 
        </div>
        </div>
    );
}

export default Skill;