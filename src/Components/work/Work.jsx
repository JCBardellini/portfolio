import React, { useState } from "react";
import css from "./work.module.css";
import customBullet from "../../assets/Icons/optionsVector.svg";

const Work = () => {
  // managing state to display the selected role
  const [displayCompany, setDisplayCompany] = useState("Innovis Solution");
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
        "Provide outstanding customer service by ensuring effective communication skills and accessing solutions to their problems.",
        "Maintain a high level of order accuracy and attention to detail, resulting in fewer errors and 95% satisfaction customer rate.",
        "Assist customers with their orders, ensuring they receive the correct items.",
      ],
    },
    {
      company: "California Closets",
      role: "Designer",
      date: " January 2023 - May 2023",
      description: [
        "Collaborated with 20+ clients on a monthly basis to brainstorm and strategize design concepts, resulting in successful execution of 80% client projects on budget.",
        "Created 2D plans, 3D models and renderings to visually showcase the proposed design for clients, leading to a client satisfaction rate of 95%.",
        "Managed and executed projects ranging from $2,000 to $30,000 in budget, ensuring timely completion and achieving an average project profitability increase of 15%.",
      ],
    },
    {
      company: "All Custom Design LLC",
      role: "Designer",
      date: "March 2022 - November 2022",
      description: [
        "Oversaw the end-to-end design process, from sketches to final drawings to build product, while maintaining a keen eye for detail and upholding design best practices.",
        "Responsible for bringing in 100k+ sales, which increased the company’s revenue by 20%.",
        "Collaborated with clients to grasp their vision, collect feedback, and refine designs, ensuring client satisfaction.",
      ],
    },
    {
      company: "The Home Depot",
      role: "Design Specialist",
      date: "June 2020 - November 2021",
      description: [
        "Analyzed floor plans and collaborated with contractors to accurately determine the number of cabinets, doors, and windows needed for each project, resulting in a 15% reduction in material waste and increased cost savings.",
        "Developed innovative design concepts in collaboration with clients, resulting in a 20% increase in customer satisfaction rating and positive feedback.",
        "Managed the entire process of designing and ordering customer-specific products, overseeing shipment and delivery to ensure timely arrival, resulting in a 10% decrease in delivery times and improved customer experience.",
      ],
    },
  ];
  // need to create "toggleDisplayCompany" to show the description for the company i worked for
  const toggleDisplayCompany = (company) => {
    setDisplayCompany(company);
  };
  return (
    <section id="work-experience">
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
                      <li key={index} className={css.descriptionBulletPoint}>
                        <span>
                          <img src={customBullet} alt="bullet point" />
                        </span>
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
