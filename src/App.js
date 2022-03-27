import React from "react";
import Copyright from "./Components/copyright";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Projects from "./Components/MyProjects/Projects";
import "./App.css";
import AboutMe from "./Components/AboutMe";
import Contact from "./Components/Contact";
function App() {
  return (
    <div className="app">
      <Header/>
      <Home />
      <AboutMe />
      <Projects/>
      <Contact/>
      <Copyright/>
    </div>
  );
}

export default App;
