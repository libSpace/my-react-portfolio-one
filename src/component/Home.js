import React from "react";
import Malik from "./Malik";

function Home(){
    return (
        <section className="home-container">
            <div className="home-content" >
                <h1>Hi,</h1>
                <h1>I am <span className="name">Malik</span> <span className="surname">Malope,</span></h1>
                <Malik className="auto-text" />
                <p>JavScript Css</p>
            </div>
     

            <div className="skill-show"></div>

        </section>
    );
}


export default Home;