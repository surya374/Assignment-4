import React from "react";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <>
      <Router>
        <div>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/About" element={<About />} />
            <Route path="/Education" element={<Education />} />
            <Route path="/Skills" element={<Skills />} />
            <Route path="/Projects" element={<Project />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}
