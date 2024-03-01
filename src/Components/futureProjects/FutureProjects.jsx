import React from "react";
import css from "./FutureProjects.module.css";

const FutureProjects = () => {
  const projectsComing = [
    {
      client: true,
      title: "StandPat",
      description:
        "An e-commerce website for an author to showcase not only his book but also to express his artistic and writer side. The website serves as a platform to highlight the author’s literary works while providing a glimpse into his creative and artistic endeavors when writing.",
    },
    {
      client: true,
      title: "Per Scholas Resource Page",
      description:
        "An informational resource page for a coding bootcamp, designed to assist learners and alumni in finding any resources they may need during their program or after completion. The page serves as a helpful guide, offering an easier pathway for individuals.",
    },
  ];
  return (
    <section id="future-projects">
      <div className="titleContainer">
        <h3 className="sectionNumber">04.</h3>
        <span className="line"></span>
        <h3 className="sectionTitle">Projects in the Work</h3>
        <span className="line"></span>
      </div>
      <div id={css.futureProjectsContainer}>
        {projectsComing.map((project) => (
          <div key={project.title} className={css.eachProjectContainer}>
            <p className="clientTitle">
              {project.client ? "Client" : "Personal"} Project
            </p>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FutureProjects;
