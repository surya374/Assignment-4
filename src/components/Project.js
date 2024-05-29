import React from "react";
import "./comp.css";
import formImg from "../Assests/form.png";
import expensive from "../Assests/expensive.png";

export default function Project() {
  return (
    <section className="projects">
      <h2 className="projects-title">Some Recent Projects</h2>
      <div className="projects-container">
        <div className="project-card">
          <img src={formImg} alt="form" className="project-image" />
          <h3 className="project-title">
            <a
              href="https://github.com/surya374/FORM-WEB-APP.git"
              className="project-links"
            >
              FORM FILLING WEB APPLICATION
            </a>
          </h3>
          <p className="project-details">
            This Web Application used to fill the form of Employee and stores in
            a database. Whereas we can delete the employee details or we can
            edit the details of employee.
          </p>
        </div>

        <div className="project-card">
          <img src={expensive} alt="expensive" className="project-image" />
          <h3 className="project-title">
            <a href="https://github.com/surya374/Training-Assignment-3.git">
              EXPENSIVE TRACKER
            </a>
          </h3>
          <p className="project-details">
            This web Application is used to track the expenses of of candidate.
          </p>
        </div>
      </div>
    </section>
  );
}
