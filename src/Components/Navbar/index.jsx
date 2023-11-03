import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const nav = [
    {
      name: "Home",
      route: "/",
    },
    {
      name: "About",
      route: "/about",
    },
    {
      name: "Projects",
      route: "/projects",
    },
  ];

  const navbar = nav.map((item) => {
    return (
      <li key={item.name}>
        <Link to={item.route}>{item.name}</Link>
      </li>
    );
  });
  return <ul>{navbar}</ul>;
};

export default Navbar;
