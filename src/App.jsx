import React from "react";

import "./App.css";
import NavBar from "./features/navbar/NavBar";
import Home from "./features/home/Home";
import About from "./features/about/About";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Home />
      <About />
    </React.Fragment>
  );
}

export default App;
