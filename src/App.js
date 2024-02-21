
import React from "react";
import NavBar from "./component/NavBar";
import Home from "./component/Home";
import About from "./component/About";
import Education from "./component/Education";
import Projects from "./component/Projects";
import Reach from "./component/Reach";
import NavBottom from "./component/NavBottom";
// 
import { BrowserRouter as Router,Route, Switch } from "react-router-dom/cjs/react-router-dom.min";



// import Skill from "./component/Skill";

// App styling
import "./App.css"


function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="container">
          <Switch>
            <Route exact path="/">
              <Home       />
            </Route >

            <Route path="/About">
              <About      />
            </Route>

            <Route path="/Education">
              <Education      />
            </Route>

            <Route path="/Projects">
              <Projects   />
            </Route>

            <Route path="/Reach">
              <Reach  />
            </Route>

          </Switch>
        </div>
        <NavBottom  />
      </div>
    </Router>
  );
}

export default App;
