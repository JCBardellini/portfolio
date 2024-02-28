import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import "./navbar.scss";
import logo from "../../assets/Logo/JCTransparent.svg";
import resume from "../../assets/Resume/Bardellini_Resume.pdf";

const Navbar = () => {
  //  State for the dropdown menu
  const [isMobileView, setIsMobileView] = useState(false);

  // the links on the navbar
  const navLink = [
    { name: "0.1 About", route: "/about" },
    { name: "0.2 Work Experience", route: "/work-experience" },
    { name: "0.3 Projects", route: "/projects" },
    { name: "0.4 Future Projects", route: "/future-projects" },
    { name: "0.5 Contact", route: "/contact" },
  ];
  const handleDownload = () => {
    window.open(resume, "_blank");
  };
  const handleClickMenu = () => {
    setIsMobileView(!isMobileView);
  };

  return (
    <nav id="navLayout">
      <img src={logo} alt="logo" className="logo" />
      <div className="menu" onClick={handleClickMenu}>
        <span className="one"></span>
        <span className="two"></span>
        <span className="three"></span>
      </div>
      <div className={`navbar ${isMobileView ? "open" : ""}`}>
        <ul className="navLinks">
          {navLink.map((nav) => (
            <li key={nav.name} className="navItem">
              <ScrollLink
                to={nav.route.substring(1)} // Remove the leading slash to match the element's ID
                spy={true}
                smooth={true}
                offset={-150}
                duration={1000}
              >
                {nav.name}
              </ScrollLink>
            </li>
          ))}
        </ul>
        <button className="btn" onClick={handleDownload}>
          Resume
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
