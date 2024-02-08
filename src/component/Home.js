import React from "react";
import Malik from "./Malik";
import './Home.css'

function Home(){
    return (
        <section className="home-container">
            <div className="home-content-left" >
                <div className="intro-content">
                    <div className="intro-text">
                        <h1>Hi,</h1>
                        <h1>I am <span className="name">Malik</span> <span className="surname">Malope,</span></h1>
                        <Malik className="auto-text" />
                    </div>
                    {/* Horizontyal line element */}
                    <hr className="intro-line" />

                    <p className="intro-para">Java | Python | SQL | JavaScript | React | Node| Power BI | Node </p>
                </div>
                            
                <div className="socials-content">
                    Socials content
                </div> 
            </div>
        </section>
    );
}


export default Home;