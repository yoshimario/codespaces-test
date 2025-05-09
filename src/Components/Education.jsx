import React from "react";
import PropTypes from "prop-types";

// Icon URLs
const schoolIcon = "https://cdn-icons-png.flaticon.com/512/3135/3135768.png";
const workIcon = "https://cdn-icons-png.flaticon.com/512/1077/1077063.png";

// Main component
const Education = ({ education, work }) => {
  return (
    <section id="education">
      <h2>Education</h2>
      <div className="education-container">
        {Array.isArray(education) &&
          education.map((item, index) => (
            <div key={index} className="education-item">
              <img src={schoolIcon} alt="School" />
              <h3>{item.degree}</h3>
              <p>{item.institution}</p>
              <p>{item.year}</p>
            </div>
          ))}
      </div>

      <h2>Work Experience</h2>
      <div className="work-container">
        {Array.isArray(work) &&
          work.map((item, index) => (
            <div key={index} className="work-item">
              <img src={workIcon} alt="Work" />
              <h3>{item.position}</h3>
              <p>{item.company}</p>
              <p>{item.location}</p>
              <p>{item.year}</p>
            </div>
          ))}
      </div>
    </section>
  );
};

// Props and defaults
Education.propTypes = {
  education: PropTypes.array,
  work: PropTypes.array,
};

Education.defaultProps = {
  education: [],
  work: [],
};

// ✅ Sample usage at the bottom of the same file
const sampleEducation = [
  {
    degree: "BBA in Information Technology",
    institution: "Laurea University of Applied Sciences",
    year: "Expected 2027",
  },
  {
    degree: "AAS in IT & Cybersecurity",
    institution: "Tacoma Community College",
    year: "2020",
  },
  {
    degree: "BA Film Production",
    institution: "DePaul University",
    year: "2017",
  },
];

const sampleWork = [
  {
    position: "Customer Success Team (Offline) Group Lead",
    company: "Slush",
    location: "Helsinki, Finland",
    year: "Sep 2023 – Dec 2023",
  },
  {
    position: "Food Service Worker",
    company: "McDonald's",
    location: "Oulu, Finland",
    year: "Nov 2022 – May 2023",
  },
  {
    position: "Video Game Tester",
    company: "Flexasoft",
    location: "Redmond, WA, USA",
    year: "Jul 2016 – May 2017",
    
  },
];

// ✅ Export a wrapper that renders the component with sample data
const EducationWithSample = () => (
  <Education education={sampleEducation} work={sampleWork} />
);

export default EducationWithSample;