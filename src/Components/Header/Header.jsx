import React from "react";
import "./header.scss";
import typingEffect from "../Hooks/Animation/typingEffect";

const Header = () => {
  const text = "C Bardellini!";
  const duration = 400;
  const textEffect = typingEffect(text, duration);
  return (
    <section id="header">
      <p>Hi, my name is</p>
      <h2 className="title">J{textEffect}</h2>
      <p className="description">
        I am a Designer and Developer dedicated to crafting digital experiences
        and solutions to your everyday web challenge. With a focus on expanding
        my knowledge in software development, I specialize in creating tailored
        solutions for your web needs. Let's build something amazing together!
      </p>
    </section>
  );
};

export default Header;
