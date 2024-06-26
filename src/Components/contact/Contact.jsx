import React from "react";
import "./contact.scss";
import github from "../../assets/Icons/gitHub.png";
import linkedIn from "../../assets/Icons/linkedIn.png";
import fileDoc from "../../assets/Icons/File.png";

const Contact = () => {
  const icons = [
    {
      id: 1,
      iconSrc: github,
      link: "https://github.com/JCBardellini",
      alt: "GitHub icon",
    },
    {
      id: 2,
      iconSrc: linkedIn,
      link: "https://www.linkedin.com/in/jcbardellini/",
      alt: "LinkedIn Icon",
    },
    {
      // need to add my resume, updated one
      id: 3,
      iconSrc: fileDoc,
      link: "",
      alt: "Resume Icon",
    },
  ];
  const onClickEmail = () => {
    window.open("mailto:jc.bardellini12@gmail.com");
  };
  const onClickIconLink = (link) => {
    if (link) {
      window.open(link, "_blank", "noopener noreferrer");
    } else {
      onClickEmail();
      window.alert("no link available, here is a email");
    }
  };
  return (
    <section id="contact">
      <div className="titleContainer">
        <h3 className="sectionNumber">0.4</h3>
        <span className="line"></span>
        <h3 className="sectionTitle">What Lies Ahead</h3>
        <span className="line"></span>
      </div>
      <div className="contactContainer">
        <h2 className="contactHeading heading">Get in Touch</h2>
        <p>
          I am currently exploring opportunities and welcome anyone to reach out
          to me through my socials or via email! Whether it’s discussing food,
          coffee, designs, or anything, feel free to connect. I’m always eager
          to make new connections and engage in meaningful conversations.
        </p>
        <button className="contactBtn btn" onClick={onClickEmail}>
          Lets Connect!
        </button>
        <div className="iconsContainer">
          {icons.map((icon) => (
            <img
              src={icon.iconSrc}
              alt={icon.alt}
              key={icon.id}
              onClick={() => onClickIconLink(icon.link)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
