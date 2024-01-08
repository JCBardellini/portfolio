import React from "react";
import css from "./navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  // the links on the navbar
  const navLink = [
    { name: "0.1 About", route: "/about" },
    { name: "0.2 Work Experience", route: "/work-experience" },
    { name: "0.3 Projects", route: "/projects" },
    { name: "0.4 Future Projects", route: "/future-projects" },
    { name: "0.5 Contact", route: "/contact" },
  ];
  return (
    <nav id={css.navLayout}>
      <h1>JC</h1>
      <ul className={css.nav}>
        {/* map through the array of objects and create a list item for each object */}
        {navLink.map((nav) => (
          <li key={nav.name}>
            <Link to={nav.route}>{nav.name}</Link>
          </li>
        ))}
      </ul>
      <button className="btn">Resume</button>
    </nav>
  );
};

export default Navbar;
