// src/App.js
import React from "react";
import NavBar from "./component/NavBar";
import NavBottom from "./component/NavBottom";
import Home from "./component/Home";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <NavBottom/>
    </div>
  );
}

export default App;
