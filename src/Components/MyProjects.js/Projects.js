import React from 'react'
import "./Projects.css"
import Specific from './Specific'
import instalogo from  "../../Image/instalogo.jpg"
import swiggyy from "../../Image/swiggyy.png";
import weather from  "../../Image/weather.jpg"
import sudoku from "../../Image/sudoku.png";
import vote from "../../Image/vote.jpg";
import netflix from "../../Image/netflix.png";
function Projects() {
    return (
        <div className='projects'>
          <div className="projects_content">
             <h1>My Projects</h1>
             <div className="projects_box">
              <Specific  title="Instagram clone" view={instalogo} source={"https://github.com/mohitk2001/insta-client"}/>
              <Specific  title="Swiggy Landing Page" view={swiggyy} source={"https://github.com/mohitk2001/swiggy-landing"}/>
              <Specific  title="Weather App" view={weather} source={"https://github.com/mohitk2001/weather-check"}/>
              <Specific title="Suduko " view={sudoku} source={"https://github.com/mohitk2001/suduko-with-javascript"}/>
              <Specific title="Voting Machine" view={vote} source={"https://github.com/mohitk2001/Voting-Machine"}/>
              <Specific title="Netflix Clone" view={netflix} source={"https://github.com/mohitk2001/netflix-clone"}/>
             
             </div>
          </div>
        </div>
    )
}

export default Projects