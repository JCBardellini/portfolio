import React from "react";
import "./index.css";
import Navbar from "../Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "../../Pages/Home";
import About from "../../Pages/About";
import Projects from "../../Pages/Projects";

const MainContent = () => {
  return (
    <div id="mainContentContainer">
      <div>
        <header>
          <h1>Jean Carlo (JC) Bardellini</h1>
          <p>Developer & Designer</p>
        </header>
        <nav>
          <Navbar />
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
};

export default MainContent;
