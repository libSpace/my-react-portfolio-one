import React from "react";
import Malik from "./Malik";
import './Home.css'

function Home(){
    return (
        <section className="home-container">
            <div className="home-content" >
                <div className="intro-content">
                    <h1>Hi,</h1>
                    <h1>I am <span className="name">Malik</span> <span className="surname">Malope,</span></h1>
                    <Malik className="auto-text" />
                    {/* Horizontyal line element */}
                    <hr className="intro-line" />

                    <p>Java | Python | SQL | JavaScript | React | Node| Power BI | Node </p>
                </div>
                            
                <div className="skill-show">
                    Test Tex
                </div> 
            </div>
        </section>
    );
}


export default Home;