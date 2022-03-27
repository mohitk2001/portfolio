import React from "react";
import "./Home.css";
import pdf from "../assets/1911981296-MohitKumar.pdf"
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import photo from "../assets/Pass.png";
function Home() {
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
    <div className="Home" id="home_section">
      <div className="home_content mb-md-5 mt-md-5">
        <div className="home_short_details">
          <small>Helllo, I'm </small>
          <h1>Mohit Kumar</h1>
          <small>Full Stack Developer</small>
          <div className="mt-3 home_button">
          <a href={pdf}download className="btn btn-primary mx-4 ">Download CV</a>
          <a href="#contact_section" className="btn btn-light talk_button">Let's Talk</a>
          </div>
        </div>
        <div className="socialIcons mt-5">
          <div className="Icons">
            <LinkedInIcon fontSize="large" className="social_icons my-3" onClick={handleLL}/>
            <GitHubIcon fontSize="large" className="social_icons my-3" onClick={handleGit}/>
            <InstagramIcon fontSize="large" className="social_icons my-3" onClick={handleInsta}/>
          </div>
          <div className="home_image">
            <img src={photo} alt="No details" />
          </div>
          <a href="#copy_section"><strong>Slide Down</strong></a>
        </div>
      </div>
    </div>
  );
}

export default Home;
// //  Student @ Chitkata University, Himachal Pradesh,India. I love coding,
// and I aspire to become a great developer. I currently code every day,
// and try to build something//