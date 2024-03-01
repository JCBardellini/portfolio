import React from "react";
import css from "./about.module.css";
import "./about.scss";
import bulletPoint from "../../assets/Icons/optionsVector.svg";
import userImg from "../../assets/img/userImg.png";

const About = () => {
  const aboutMeContent = {
    paragraphOne:
      "Hello! I’m JC, short for Jean Carlo Bardellini. In my previous life, I was an Interior Designer working in West Seattle, crafting unique spaces that reflected my clients’ personalities. However, when the pandemic hit, I started reflecting on my life and thought how I could give back to the community that shaped the person I am today. This contemplation ultimately steered me toward a career in software development.",
    paragraphTwo:
      "Reflecting on my journey, I recall starting with HTML and CSS, but it was the discovery of JavaScript that ignited a new passion. Recently completing a coding bootcamp, I’ve acquired the skills and knowledge to thrive in the development world. Now, I’m on the lookout for a development role while staying true to my commitment of assisting local businesses in enhancing their online visibility.",
    paragraphThree:
      "Currently freelancing to gain experience, I’m reaching out to small businesses, revamping their websites, and not just creating an online presence but also building lasting memories and friendships.",
  };
  const technologies = [
    "JavaScript",
    "React.js",
    "MongoDB",
    "Figma",
    "Express",
    "PostgreSQL",
    "Hostinger",
    "Node.js",
  ];
  return (
    <section id="about">
      <div className="titleContainer">
        <h3 className="sectionNumber">0.1</h3>
        <span className="line"></span>
        <h3 className="sectionTitle">About Me</h3>
        <span className="line"></span>
      </div>
      <div id={css.aboutSectionContainer}>
        <div className={css.aboutContentContainer}>
          <p>{aboutMeContent.paragraphOne}</p>
          <p>{aboutMeContent.paragraphTwo}</p>
          <p>{aboutMeContent.paragraphThree}</p>
          <p>Here is a few technologies that I've been working with:</p>
          <div className={css.technologyContainer}>
            {[0, 2, 4, 6].map((startIndex) => (
              <ul key={startIndex} className={css.technologyList}>
                {technologies
                  .slice(startIndex, startIndex + 2)
                  .map((tech, index) => (
                    <li key={index} className={css.eachTechnology}>
                      <img src={bulletPoint} alt="custom bullet point" />
                      {tech}
                    </li>
                  ))}
              </ul>
            ))}
          </div>

          <p>
            Excited about the future, I'm ready to bring my unique blend of
            design and development skills to any company seeking a dedicated and
            creative professional.
          </p>
        </div>
        <div className={css.imgContainer}>
          <div className={css.imgBorder}></div>
          {/* add a carousel of imgs */}
          <img
            className={css.responsiveImg}
            src={userImg}
            alt="Jc Bardellini"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
