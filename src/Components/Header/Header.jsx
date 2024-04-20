import React from "react";
import "./header.scss";
import typingEffect from "../utils/Animation/typingEffect";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const text = "c Bardellini!";
  const duration = 175;
  const textEffect = typingEffect(text, duration);
  const navigate = useNavigate();

  const handleClick = () => {
    const projectsSection = document.getElementById("projects");
    navigate("/projects");
    if (projectsSection) {
      const yOffset =
        projectsSection.getBoundingClientRect().top + window.scrollY - 100;

      window.scrollTo({
        top: yOffset,
        behavior: "smooth",
        duration: 5000,
      });
    }
  };

  return (
    <section id="header">
      <p>Hi, my name is</p>
      <h1 className="title">J{textEffect}</h1>
      <p className="description">
        I am a Designer and Developer dedicated to crafting digital experiences
        and solutions to your everyday challenge. With a focus on expanding my
        knowledge in software development, I specialize in creating tailored
        solutions for your software needs. Let's build something amazing
        together!
      </p>
      {/*  */}
      <button className="btn homeBtn" onClick={handleClick}>
        Check out my work!
      </button>
    </section>
  );
};

export default Header;
