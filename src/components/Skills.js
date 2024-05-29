import React from "react";
import "./comp.css";
import reactImg from "../Assests/React.png";
import htmlImg from "../Assests/html.png";
import cssImg from "../Assests/css3.png";
import jsImg from "../Assests/js.png";

export default function Skills() {
  return (
    <section className="skills">
      <h2 className="skill-header">SKILLS</h2>

      <div className="skill-icons">
        <div className="animated">
          <img src={htmlImg} alt="html" className="icon-card" />
          <img src={cssImg} alt="css" className="icon-card" />
          <img src={jsImg} alt="js" className="icon-card2" />
          <img src={reactImg} alt="react" className="icon-cards" />
        </div>
      </div>
    </section>
  );
}
