import React from "react";
import "./comp.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
  return (
    <div id="contact">
      <div className="contact-container">
        <div className="row">
          <div className="contact-details">
            <h1 className="contact-heading">Contact Me</h1>
            <p>
              <FontAwesomeIcon icon={faEnvelope} className="icon" />
              ragulasuryateja@gamil.com
            </p>
            <p>
              <FontAwesomeIcon icon={faPhone} className="icon" /> +91 7396690780
            </p>
            <div className="social-icons">
              <a href="https://github.com/surya374">
                <FontAwesomeIcon icon={faGithub} className="icons" />
              </a>
              <a href="https://www.linkedin.com/in/suryatejaragula/">
                <FontAwesomeIcon icon={faLinkedin} className="icons" />
              </a>
            </div>
            <a
              href="https://drive.google.com/file/d/1Izuv1gxD6Uu4HcQLA6zV0xZB23FGjrQ7/view"
              className="btn"
            >
              <p> View Resume</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
