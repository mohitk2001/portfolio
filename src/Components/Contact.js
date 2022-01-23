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
  return (
    <div className="contact">
      <h2 className="contact_head">Contact Me </h2>
      <div className="contact_container">
        <div className="contact_social">
          <h2 className="social_head">Socials</h2>
          <GitHubIcon fontSize="large" className="icons" />
          <LinkedInIcon fontSize="large" className="icons" />
          <InstagramIcon fontSize="large" className="icons" />
          <EmailIcon fontSize="large" className="icons" />
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
