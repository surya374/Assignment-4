import React from "react";
import "./comp.css";

export default function Education() {
  return (
    <div className="Education-container">
      <section className="col">
        <header className="title">
          <h2>EDUCATION</h2>
        </header>

        <div className="content">
          <div className="box">
            <h2>2020-2023</h2>
            <h4>BACHELOR'S</h4>
            <h3>CMR ENGINEERING COLLEGE</h3>
            <h9>Mechanical Engineering</h9>
            <p>CGPA: 6.54</p>
          </div>

          <div className="box">
            <h2>2017-2020</h2>
            <h4>DIPLOMA</h4>
            <h3>VIJAY RURAL ENGINEEERING COLLEGE</h3>
            <h9>Mechanical Engineering</h9>
            <p>Percentage: 73.11</p>
          </div>

          <div className="box">
            <h2>2016-2017</h2>
            <h4>S.S.C</h4>
            <h3>LITTLE FLOWER HIGH SCHOOL</h3>
            <p>CGPA: 9.0</p>
          </div>
        </div>
      </section>
    </div>
  );
}
