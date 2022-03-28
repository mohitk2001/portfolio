import React,{useRef} from 'react'
import "./Contact.css"
import MailOutlineOutlinedIcon from '@material-ui/icons/MailOutlineOutlined';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import Socials from './Socials';
import emailjs from "emailjs-com"
function Contact() {
    const form =useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_hbu7ub8', 'template_xi997s6', form.current, '-jn4gLdm3x6S5y5Gs')
          .then((result) => {
              console.log(result.text);
              alert("Mohit will see your message very soon. Thank You ")
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
      };
    
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
                    <form ref={form} onSubmit={sendEmail} className="contact_form">
                        <input type="text" name='name' placeholder='Your Name' />
                        <input type="email" name='email' placeholder='Your Email' />
                        <textarea placeholder='Your Message' name="message" id="" cols="30" rows="6"></textarea>
                        <button type="submit" className='btn btn-primary my-sm-2 my-1'>Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact