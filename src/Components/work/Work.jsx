import React, { useState } from "react";
import css from "./work.module.css";
import customBullet from "../../assets/Icons/optionsVector.svg";

const Work = () => {
  // managing state to display the selected role
  const [displayCompany, setDisplayCompany] = useState(null);
  // work experience array of objects
  const workExperience = [
    {
      company: "Innovis Solution",
      role: "Co-Founder",
      date: "Nov 2023 - present",
      description: [
        "Leading a dynamic team of creative professionals in designing, developing, and maintaining web applications.",
        "Maintain high-level of communications with clients to understand their visions and expectations and collaborating with the team to meet and exceed those expectations.",
        "Developing and maintaining web applications, stating current with the latest technologies to ensure the delivery of the best practices and experience. ",
      ],
    },
    {
      company: "Flo Sushi Bar",
      role: "Server",
      date: "December 2022 - Present",
      description: [
        "Maintain a clean and organized server station.",
        "Assist customers in their dining experience by taking orders, providing table service, and ensuring that all customer needs are met.",
        "Assist customers with their orders, ensuring they receive the correct items.",
      ],
    },
    {
      company: "California Closets",
      role: "Designer",
      date: "",
      description: ["", "", ""],
    },
  ];
  // need to create "toggleDisplayCompany" to show the description for the company i worked for
  const toggleDisplayCompany = (company) => {
    setDisplayCompany((prevCompany) => {
      if (prevCompany === company) return null;
      else return company;
    });
  };
  return (
    <section id="experienceSection">
      <div className="titleContainer">
        <h3 className="sectionNumber">02.</h3>
        <span className="line"></span>
        <h3 className="sectionTitle">Places I've Worked</h3>
        <span className="line"></span>
      </div>
      <div className={css.experienceContainer}>
        {/* Contain company name */}
        <ul className={css.companyContainer}>
          {workExperience.map((company) => (
            <li
              key={company.company}
              className={css.company}
              onClick={() => toggleDisplayCompany(company.company)}
            >
              {company.company}
            </li>
          ))}
        </ul>
        {/* Contains the description */}
        <div className={css.descriptionContainer}>
          {workExperience.map((work) => (
            <div key={work.company}>
              {displayCompany === work.company && (
                <div>
                  <h3>{`${work.role} @ ${work.company}`}</h3>
                  <p>{work.date}</p>
                  <ul>
                    {work.description.map((item, index) => (
                      <li key={index} className={css.descriotionBulletPoint}>
                        <img src={customBullet} alt="bullet point" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
