import React from "react";
import "./comp.css";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="navbar-container">
      <div>
        <h1>PORTFOLIO</h1>
      </div>

      <div className="catageory">
        <Link to={"/"} className="link">
          HOME
        </Link>
        <Link to={"/About"} className="link">
          ABOUT
        </Link>
        <Link to={"/Education"} className="link">
          EDUCATION
        </Link>
        <Link to={"/Skills"} className="link">
          SKILLS
        </Link>
        <Link to={"/Projects"} className="link">
          PROJECTS
        </Link>
        <Link to={"/Contact"} className="link">
          CONTACT
        </Link>
      </div>
    </div>
  );
}
