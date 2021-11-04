import React from 'react'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import EmailIcon from '@material-ui/icons/Email';
import "./Contact.css"
function Contact() {
    return (
        <div className="contact">
            <h2 className="contact_head">Contact Me </h2>
            <div className="contact_container">
                <div className="contact_social">
                    <h2 className="social_head">Socials</h2>
                    <GitHubIcon fontSize="large" className="icons"/>
                    <LinkedInIcon fontSize="large" className="icons" />
                    <InstagramIcon fontSize="large" className="icons" />
                    <EmailIcon fontSize="large" className="icons" />
                </div>
                <div className="conatct_address">
                <h2 className="email_add">mohit725045.mk@gmail.com</h2>
                <h2 className="email_add">New Delhi,India</h2>
                </div>
            </div>
        </div>
    )
}

export default Contact
