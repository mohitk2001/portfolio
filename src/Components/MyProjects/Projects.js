import React from "react";
import "./Projects.css";
import Specific from "./Specific";
import instalogo from "../../Image/instalogo.jpg";
import swiggyy from "../../Image/swiggyy.png";
import weather from "../../Image/weather.jpg";
import sudoku from "../../Image/sudoku.png";
import vote from "../../Image/vote.jpg";
import netflix from "../../Image/netflix.png";
function Projects() {
  return (
    <div className="projects" id="projectsScroll">
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
