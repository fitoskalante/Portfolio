import React from "react";

import Navibar from "./components/Navibar";
import Landing from "./components/Landing";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Footerr from "./components/Footerr";

import "animate.css/animate.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <>
      <Landing />
      <Navibar />
      <Projects />
      <About />
      <Contact />
      <Footerr />
    </>
  );
}

export default App;
