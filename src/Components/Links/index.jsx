import React from "react";
import "./index.css";

const OutsideLinks = () => {
  const links = [
    {
      name: "GitHub",
      url: "https://github.com/JCBardellini",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/jcbardellini/",
    },
    {
      // need to find a way to import my resume PDF into my react file
      name: "Resume",
      url: "",
    },
  ];
  return (
    <div id="linkContainer">
      {links.map((link) => {
        return (
          <p className="linkItems" key={link.name}>
            <a href={link.url} target="_blank" alt={link.name}>
              {link.name.toLocaleUpperCase()}
            </a>
          </p>
        );
      })}
    </div>
  );
};

export default OutsideLinks;
