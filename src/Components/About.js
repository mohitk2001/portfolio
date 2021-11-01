import React from "react";
import "./About.css";
import frontEnd from "../Image/frontEnd.webp";
import backEnd from "../Image/backEnd.webp";
function About() {
  return (
    <div className="about">
      <div className="about_content">
        <h2>About Me</h2>
       
        <div className="about_skills">
          <dl className="skills_list">
            <dt>Front-End skills</dt>
            <dd> -{">"} ReactJS </dd>
            <dd> -{">"} HTML / CSS </dd>
            <dd>-{">"} Bootstrap</dd>
            <dd> -{">"} JavaScript </dd>
            <dd> -{">"} Redux </dd>
          </dl>
          <img src={frontEnd} alt="frontEnd" className="frontEnd_image" />
        </div>
        <div className="backendskills">
            <img src={backEnd} alt="backEnd" className="backEnd_image" />
            <dl className="backend_skills_list">
                <dt>Back-End skills</dt>
                <dd>-{">"} NodeJs / ExpressJS</dd>
                <dd>-{">"} MySQL</dd>
                <dd>-{">"} MongoDB</dd>
                <dd>-{">"} REST</dd>
            </dl>
        </div>
      </div>
    </div>
  );
}

export default About;
