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
      <header className="portfolioHeader">
        <h1 className="headerName">JC Bardellini</h1>
        <p className="role">Designer & Developer</p>
        <nav>
          <Navbar />
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
};

export default MainContent;
