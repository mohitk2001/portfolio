import React from 'react'
import "./Contact.css"
import MailOutlineOutlinedIcon from '@material-ui/icons/MailOutlineOutlined';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import Socials from './Socials';
function Contact() {
    const formSubmit=(e)=>{
        e.preventDefault();

    }
  return (
    <div className='contact my-md-5' id='contact_section'>
        <div className="contact_container my-md-5">
            <small>Get in touch</small>
            <h3>Contact Me</h3>
            <div className="contact_details">
                <div className="contact_from_social">
                    <Socials icon={<MailOutlineOutlinedIcon/>} URL="mailto:mohit725045.mk@gmail.com" text="mohit725045.mk@gmai l.com" type="Email"/>
                    <Socials icon={<WhatsAppIcon/>} URL="https://api.whatsapp.com/send?phone=9905017902" text="+91 9905017902" type="WhatsApp"/>
                </div>
                <div className="contact_Email">
                    <form onSubmit={formSubmit} className="contact_form">
                        <input type="text" placeholder='Your Name' />
                        <input type="email" placeholder='Your Email' />
                        <textarea placeholder='Your Message' id="" cols="30" rows="6"></textarea>
                        <button type="submit" className='btn btn-primary'>Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact