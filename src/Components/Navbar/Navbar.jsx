import React, { useState } from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import "./navbar.scss";
import logo from "../../assets/Logo/JCTransparent.svg";
import resume from "../../assets/Resume/Bardellini_Resume.pdf";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isMobileView, setIsMobileView] = useState(false);
  const [currentPath, setCurrentPath] = useState("");
  const navigate = useNavigate();

  const navLink = [
    { name: "0.1 About", route: "/about" },
    { name: "0.2 Work Experience", route: "/work-experience" },
    { name: "0.3 Projects", route: "/projects" },
    { name: "0.4 Contact", route: "/contact" },
  ];

  const handleDownload = () => {
    window.open(resume, "_blank");
  };

  const handleClickMenu = () => {
    setIsMobileView(!isMobileView);
  };

  const handleScrollToTop = () => {
    scroll.scrollToTop({
      duration: 2000,
    });
    navigate("/");
  };

  const handleNavLinkClick = (route) => () => {
    // setCurrentPath(route);
    navigate(`${route}`);
    // console.log("Current Path:", route);
  };

  return (
    <nav id="navLayout">
      <img src={logo} alt="logo" className="logo" onClick={handleScrollToTop} />
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
                to={nav.route.substring(1)}
                spy={true}
                smooth={true}
                offset={-150}
                duration={1000}
                onClick={handleNavLinkClick(nav.route)}
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
