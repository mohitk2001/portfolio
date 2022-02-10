import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import EmailIcon from "@material-ui/icons/Email";
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import "./Contact.css";
function Contact() {
    const handlePDF=()=>{
        window.open("https://drive.google.com/file/d/1CDOWVGhUh_ClIhLgMS71GFp4c6Vs6w6P/view?usp=sharing");
    }
    const handleGit=()=>{
      window.open("https://github.com/mohitk2001");
    }
    const handleLL=()=>{
      window.open("https://www.linkedin.com/in/mohit-kumar-41b85a1b3/");
    }
    const handleInsta=()=>{
      window.open("https://www.instagram.com/001_mohit_/");
    }
  return (
    <div className="contact" id="contactScroll">
      <h2 className="contact_head">Contact Me </h2>
      <div className="contact_container">
        <div className="contact_social">
          <h2 className="social_head">Socials</h2>
          <GitHubIcon fontSize="large" className="icons" onClick={handleGit} />
          <LinkedInIcon fontSize="large" className="icons" onClick={handleLL} />
          <InstagramIcon fontSize="large" className="icons" onClick={handleInsta} />
        </div>
        <div className="conatct_address">
          <h2 className="email_add">mohit725045.mk@gmail.com</h2>
          <h2 className="email_add">New Delhi,India</h2>
        </div>
      </div>
      <div className="contact_resume">
        <h1>My Resume</h1>
        <PictureAsPdfIcon className="resume_" onClick={handlePDF}/>
      </div>
    </div>
  );
}

export default Contact;
