
import React from "react";
import NavBar from "./component/NavBar";
import Home from "./component/Home";
import About from "./component/About";
import NavBottom from "./component/NavBottom";
// import Skill from "./component/Skill";

// App styling
import "./App.css"


function App() {
  return (
    <div className="App">
      <NavBar />
      
      <div className="container">
        <Home />
        <About />
        <NavBottom/>
        {/* <Skill /> */}
      </div>
      
    </div>
  );
}

export default App;
