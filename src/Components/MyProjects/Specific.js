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
        <div className='specific p-1'>
            <h2>{title}</h2>
            <div className="specific_image">
            <img src={view} alt="logo" />
            </div>
            <div className="projects_buttons mt-md-5">
            <button className='btn btn-primary mx-3' onClick={()=>handleURL()}>Live Demo</button>
            <button className='btn btn-light sourcebTN' onClick={()=>handleSource()}>Source Code</button>
            </div>
        </div>
    )
}

export default Specific
