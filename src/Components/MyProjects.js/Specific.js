import React from 'react'
import "./Projects.css"
function Specific({title,view,source}) {
    const handleSource=()=>{
        //window.open(`${source}`)
        console.log("her")
    }
    return (
        <div className='specific'>
            <h2>{title}</h2>
            <img src={view} alt="logo" />
            <h3 onClick={()=>handleSource}>Source Code </h3>
            
        </div>
    )
}

export default Specific
