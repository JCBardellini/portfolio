import React from "react";
import "./about.scss";
import bulletPoint from "../../assets/Icons/optionsVector.svg";
import userImg from "../../assets/img/userImg.png";

const About = () => {
  const aboutMeContent = {
    paragraphOne:
      "A creative designer/developer previously worked as an interior designer crafting unique spaces reflecting my clients' personalities. I am now transitioning into software development, fueled by my passion for creativity, problem-solving, and creating meaningful experiences through technology.",
    paragraphThree:
      "Currently freelancing to gain experience, I’m reaching out to small businesses, revamping their websites. This not only enhances their online presence but also builds lasting memories and friendships, aligning with my goal of contributing meaningfully to the community through technology.",
  };

  const technologies = [
    "JavaScript",
    "React.js",
    "MongoDB",
    "Figma",
    "Express",
    "Java",
    "Render",
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
      <div id="aboutContainer">
        <div className="aboutMe">
          <p>{aboutMeContent.paragraphOne}</p>
          <p>{aboutMeContent.paragraphThree}</p>
          <p>Here is a few technologies that I've been working with:</p>
          <div className="technologyContainer">
            {[0, 2, 4, 6].map((startIndex) => (
              <ul key={startIndex} className="technologyList">
                {technologies
                  .slice(startIndex, startIndex + 2)
                  .map((tech, index) => (
                    <li key={index} className="eachTechnology">
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
        <div className="imgContainer">
          <div className="imgBorder"></div>
          {/* add a carousel of imgs */}
          <img className="responsiveImg" src={userImg} alt="Jc Bardellini" />
        </div>
      </div>
    </section>
  );
};

export default About;
