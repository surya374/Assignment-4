import React from "react";
import "./comp.css";
import linkedinImg from "../Assests/linkedin.png";
import githubImg from "../Assests/github.png";
import gmailImg from "../Assests/gmail.png";
import contactImg from "../Assests/phone.png";

export default function Contact() {
  return (
    <div className="contact-container">
      <div>
        <h2 className="contact-heading">CONTACT DETAILS</h2>

        <div className="contact-details">
          <div>
            <a href="https://www.linkedin.com/in/suryatejaragula/">
              <img src={linkedinImg} alt="linkedin" className="icon" />
            </a>
          </div>
          <div>
            <a href="https://www.linkedin.com/in/suryatejaragula/">
              <img src={githubImg} alt="github" className="icon" />
            </a>
          </div>
          <div>
            <a href="ragulasuryateja@gmail.com">
              <img src={gmailImg} alt="gmail" className="icon" />
            </a>
          </div>
          <div>
            <a href="7396690780">
              <img src={contactImg} alt="contact" className="icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
