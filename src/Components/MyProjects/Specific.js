import React from 'react'
import "./Projects.css"
function Specific({title,view,Url,source}) {
    const handleSource=()=>{
        window.open(`${source}`)
        
    }
    const handleURL=()=>{
        window.open(`${Url}`)
    }
    return (
        <div className='specific p-3'>
            <h2>{title}</h2>
            <div className="specific_image">
            <img src={view} alt="logo" />
            </div>
            <div className="projects_buttons mt-md-5 mt-sm-3 mt-2">
            <button className='btn btn-primary mx-3 my-sm-3 my-1' onClick={()=>handleURL()}>Live Demo</button>
            <button className='btn btn-light sourcebTN my-sm-3 my-1' onClick={()=>handleSource()}>Source Code</button>
            </div>
        </div>
    )
}

export default Specific
