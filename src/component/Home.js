import React from "react";
import Malik from "./Malik";
import './Home.css'
import Skill from "./Skill";

// Icons from react icons
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";



function Home(){
    return (
        // Main section
        <>
            <section id="h" className="home-container">
                {/* Main content */}
                <div className="main-content">

                    {/* Intoduction text  */}
                    <div className="intro">
                    <h1>
                        <strong>
                        Welcome to a worlds of innovation and creativity!
                        </strong>
                    </h1>
                    </div>

                    {/* intro to my role on the left and my tech stack on the right */}
                    <div className="intro-content" >
                        {/* left content */}
                        <div className="left">
                            <div className="left-content">
                                {/* Welcome to a world of innovation and creativity! My name is Malik, and I'm */}
                                <h1>My name is <span className="name">Malik</span> <span className="surname">Malope,</span></h1>
                                
                                {/* An instance of my auto typed role titles */}
                                <Malik className="auto-text" />

                                {/* Horizontyal line element */}
                                <hr className="intro-line" />
                            </div>
                            {/* Horizontyal line element
                            <hr className="intro-line" /> */}

                            <div className="intro-para">
                                <p >Java | Python | SQL | JavaScript | React | Node| Power BI | Node </p>
                            </div>

                            {/* Socials and a button for desktop screen */}
                            <div className="btn-icon1">
                                <FaGithubSquare className="soc-icons" />
                                <FaLinkedin     className="soc-icons" />
                                <button className="my-btn1" ><a href="../resume/Malik's Resume.pdf">Download cv</a></button>
                            </div>
                        </div>
                        
                        {/* Skills : right section */}
                        <div className="right">
                            <Skill  className="skill-object" />

                            {/* Socials and a button for mobile screen */}
                            <div className="btn-icon2">
                                <FaGithubSquare className="soc-icons" />
                                <FaLinkedin     className="soc-icons" />
                                <button className="my-btn1"> Download cv</button>
                            </div>
                        </div>
                            
                    </div>

                    
                </div>
            </section>
        
        </>
    );
}


export default Home;