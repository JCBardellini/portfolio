import React from "react";

const About = () => {
  const aboutMeContent = {
    paragraphOne:
      "Hello! I’m JC, short for Jean Carlo Bardellini. In my previous life, I was an Interior Designer working in West Seattle, crafting unique spaces that reflected my clients’ personalities. However, when the pandemic hit, I started reflecting on my life and thought how I could give back to the community that shaped the person I am today. This contemplation ultimately steered me toward a career in software development.",
    paragraphTwo:
      "Reflecting on my journey, I recall starting with HTML and CSS, but it was the discovery of JavaScript that ignited a new passion. Recently completing a coding bootcamp, I’ve acquired the skills and knowledge to thrive in the development world. Now, I’m on the lookout for a development role while staying true to my commitment of assisting local businesses in enhancing their online visibility.",
    paragraphThree:
      "Currently freelancing to gain experience, I’m reaching out to small businesses, revamping their websites, and not just creating an online presence but also building lasting memories and friendships.",
  };
  return (
    <section>
      <div className="titleContainer">
        <h3 className="sectionNumber">01.</h3>
        <span className="line"></span>
        <h3 className="sectionTitle">About Me</h3>
        <span className="line"></span>
      </div>
      <p>{aboutMeContent.paragraphOne}</p>
      <p>{aboutMeContent.paragraphTwo}</p>
      <p>{aboutMeContent.paragraphThree}</p>
      <p></p>
    </section>
  );
};

export default About;
