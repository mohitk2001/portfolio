import React from "react";
import "./Projects.css";
import Specific from "./Specific";
import instalogo from "../../assets/Image/instalogo.jpg";
import swiggyy from "../../assets/Image/swiggyy.png";
import weather from "../../assets/Image/weather.jpg";
import sudoku from "../../assets/Image/sudoku.png";
import vote from "../../assets/Image/vote.jpg";
import realtime from "../../assets/Image/realtime.jpg"
import netflix from "../../assets/Image/netflix.png";
function Projects() {
  return (
    <div className="projects" id="project_section">
      <div className="projects_content">
        <h1>My Projects</h1>
        <div className="projects_box">
          <Specific
            title="Instagram clone"
            view={instalogo}
            Url={"https://instagram-mern-dc69a.web.app/login"}
            source={"https://github.com/mohitk2001/insta-client"}
          />
           <Specific
            title="Realtime Chat App"
            view={realtime}
            Url={"https://keen-hawking-0162b7.netlify.app/"}
            source={"https://github.com/mohitk2001/realtime-chat-app"}
          />
          <Specific
            title="Swiggy Landing Page"
            view={swiggyy}
            Url={"https://gallant-pare-cf3f37.netlify.app/"}
            source={"https://github.com/mohitk2001/swiggy-landing"}
          />
          <Specific
            title="Weather App"
            view={weather}
            Url={"https://youthful-wozniak-00ffb6.netlify.app/"}
            source={"https://github.com/mohitk2001/weather-check"}
          />
          <Specific
            title="Suduko "
            view={sudoku}
            Url={"https://epic-khorana-5197fc.netlify.app/"}
            source={"https://github.com/mohitk2001/suduko-with-javascript"}
          />
          <Specific
            title="Voting Machine"
            view={vote}
            Url={"https://mohitk2001.github.io/Voting-Machine/"}
            source={"https://github.com/mohitk2001/Voting-Machine"}
          />
          <Specific
            title="Netflix Clone"
            view={netflix}
            Url={"https://netflix-clone-2efbd.web.app/"}
            source={"https://github.com/mohitk2001/netflix-clone"}
          />
        </div>
      </div>
    </div>
  );
}

export default Projects;
