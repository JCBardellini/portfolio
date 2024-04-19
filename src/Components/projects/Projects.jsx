import React, { useState } from "react";
import liveSiteIcon from "../../assets/Icons/liveSite.png";
import figmaIcon from "../../assets/Icons/figma.png";
import gitHub from "../../assets/Icons/gitHub.png";
import caseStudy from "../../assets/Icons/case-study.png";
import "./projects.scss";

const Projects = () => {
  const [showProject, setShowProject] = useState(3);
  const [expanded, setExpanded] = useState();

  const projectsCompleted = [
    {
      id: 11,
      client: true,
      title: "Standpat (MVP)",
      description:
        "An author portfolio to showcase and sell his book. The connections that he has made with the public as a educator, peer or anyone that he came across his life.",
      image: "",
      techStack: "React js, Express, Nodemailer, SCSS, etc",
      github: "",
      figma: "",
      liveSite: "",
      caseStudy: "",
    },
    {
      id: 1,
      client: true,
      title: "Sammi Nails Spa",
      description:
        "A service website for a nail salon located in Mill Creek, WA. The website embodies a minimalistic design approach with a modern layout and style. It offers guests the convenience of subscribing to promotions, ensuring they stay informed about any events or discounts the salon is currently offering.",
      image: "",
      techStack: "React.js, Mongodb, Express, Nodemailer, etc",
      gitHub: "https://github.com/JCBardellini/Sammi_Nails_Spa",
      liveSite: "https://samminailsspa.com/",
      figma:
        "https://www.figma.com/file/ba7cLeNvT4Jchu0YNLyNLg/Jc-lo-fi-wireframes?type=design&node-id=0%3A1&mode=design&t=2YwdNUfZgNraQMhd-1",
      caseStudy: "",
    },
    {
      id: 2,
      client: false,
      title: "Project Pulse",
      description:
        "A project management web app that enables users to seamlessly add projects, employees, and task with full CRUD ( Create, Read, Update, Delete ) capabilities. THe objective was to introduce a new version of a project tracking tool, integrating multiple factors for a comprehensive and effective project management experience.",
      image: "",
      techStack: "React.js, Mongodb, Express, User Auth, useContext, etc.",
      gitHub: "adasd",
      liveSite: "addas",
      caseStudy: "",
    },
    {
      id: 3,
      client: false,
      title: "Spotify Clone",
      description:
        "A Spotify Clone that retrieves information from Spotify, providing users with the ability to search for music and podcast. The clone allows users to listen to a preview of the selected song or podcast. To manage the incoming data, I utilized the useContext feature, ensuring a seamless experience when users request information. ",
      image: "",
      techStack: "React.js, Spotify API, useContext, Local Storage, etc.",
      gitHub: "ads",
      liveSite: "adsa",
      caseStudy: "",
    },
    {
      id: 4,
      client: false,
      title: "Weather App",
      description:
        "A weather app that presents real-time weather information for any city in the US. Utilizing the openweathermap API, the app gathers the necessary data to display accurate weather details. Additionally, the app employs local storage to save incoming data. It also features a task notepad, allowing users to add task based on the current weather conditions.",
      image: "",
      techStack: "HTML5, CSS3, JavaScript, Open Weather Map API, etc.",
      gitHub: "asdda",
      liveSite: "asdadsa",
      caseStudy: "",
    },
  ];
  const projectIcons = [
    {
      icon: gitHub,
      alt: "GitHub icon",
      linkKey: "gitHub",
    },
    {
      icon: liveSiteIcon,
      alt: "Live Site icon",
      linkKey: "liveSite",
    },
    {
      icon: figmaIcon,
      alt: "Figma icon",
      linkKey: "figma",
    },
    {
      icon: caseStudy,
      alt: "Case Study",
      linkKey: "caseStudy",
    },
  ];

  const handleShowMore = () => {
    setExpanded(!expanded);
    setShowProject(expanded ? 3 : projectsCompleted.length);
  };

  return (
    <section id="projects">
      <div className="titleContainer">
        <h3 className="sectionNumber">0.3</h3>
        <span className="line"></span>
        <h3 className="sectionTitle">Creations I've Built</h3>
        <span className="line"></span>
      </div>
      <div className="projectContainer">
        {projectsCompleted.slice(0, showProject).map((eachProject) => (
          <div key={eachProject.id} className="eachProjectContainer">
            <div>
              <p className="clientTitle">
                {eachProject.client ? "Client" : "Personal"} Project
              </p>
              <img src={eachProject.image} alt={eachProject.title} />
            </div>
            <div>
              <h3>{eachProject.title}</h3>
              <p>{eachProject.description}</p>
              <p>Tech Stack</p>
              <p>{eachProject.techStack}</p>
              <div className="iconsContainer">
                {projectIcons.map(
                  (icon) =>
                    eachProject[icon.linkKey] && (
                      <a
                        key={icon.alt}
                        href={eachProject[icon.linkKey]}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img src={icon.icon} alt={icon.alt} />
                      </a>
                    )
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      {/*Have a button, that will expand the projects but only show 3 so far */}
      <button className="btn projectBtn" onClick={handleShowMore}>
        {expanded ? "Show Less" : "See More Projects"}
      </button>
    </section>
  );
};

export default Projects;
