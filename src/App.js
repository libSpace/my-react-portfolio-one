
import React from "react";
import NavBar from "./component/NavBar";
import NavBottom from "./component/NavBottom";
import Home from "./component/Home";
import "./App.css"

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="container">
        <Home />
      </div>
      <NavBottom/>
    </div>
  );
}

export default App;
