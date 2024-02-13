
import React from "react";
import NavBar from "./component/NavBar";
import NavBottom from "./component/NavBottom";
import About from "./component/About";
import Home from "./component/Home";
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
        {/* <Skill /> */}
      </div>
      <NavBottom/>
    </div>
  );
}

export default App;
