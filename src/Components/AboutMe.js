import React from "react";
import "./AboutMe.css";
import CheckCircleOutlineOutlinedIcon from '@material-ui/icons/CheckCircleOutlineOutlined';
function AboutMe() {
  return (
    <div className="about" id="about_section">
      <div className="aboutMe_section mt-md-4">
        <small>Get to know</small>
        <h4>About Me</h4>
        <div className="_about_me_intro">
          <p>
            Hi, I am Mohit Kumar. I am a full-stack-developer. Currently I am in
            pre-final year of Computer Science Engineering from Chitkara
            University, Himachal Pradesh,India. I aspire to become developer. I
            code every day and build projects.
          </p>
        </div>
        <div className="Skills mt-md-5 ">
          <small>What skills I have</small>
          <h4>My Experiences</h4>
          <div className="skill_details mt-md-5 mb-md-5">
            <div className="front_skills">
              <dl className="skills_list">
                <dt>Front-End skills</dt>
                <dd> <CheckCircleOutlineOutlinedIcon className="skills_check"/> ReactJS </dd>
                <dd> <CheckCircleOutlineOutlinedIcon className="skills_check"/> HTML / CSS </dd>
                <dd><CheckCircleOutlineOutlinedIcon className="skills_check"/> Bootstrap</dd>
                <dd> <CheckCircleOutlineOutlinedIcon className="skills_check"/> JavaScript </dd>
                <dd> <CheckCircleOutlineOutlinedIcon className="skills_check"/> Redux </dd>
              </dl>
            </div>
            <div className="backendskills">
              <dl className="backend_skills_list">
                <dt>Back-End skills</dt>
                <dd><CheckCircleOutlineOutlinedIcon className="skills_check"/> NodeJs / ExpressJS</dd>
                <dd><CheckCircleOutlineOutlinedIcon className="skills_check"/> MySQL</dd>
                <dd><CheckCircleOutlineOutlinedIcon className="skills_check"/> MongoDB</dd>
                <dd><CheckCircleOutlineOutlinedIcon className="skills_check"/> REST</dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
