
import React from "react";
import NavBar from "./component/NavBar";
import Home from "./component/Home";
import About from "./component/About";
import Education from "./component/Education";
import Projects from "./component/Projects";
import NavBottom from "./component/NavBottom";
// import Skill from "./component/Skill";

// App styling
import "./App.css"


function App() {
  return (
    <div className="App">
      <NavBar />
      
      <div className="container">
        <Home       />
        <About      />
        <Education  />
        <Projects   />
        <NavBottom  />
        {/* <Skill /> */}
      </div>
      
    </div>
  );
}

export default App;
