import React from 'react'
import "./Social.css"
function Socials({icon,text,URL,type}) {
  return (
    <div className='social my-4'>
        {icon}
        <h4>{text}</h4>
        <h4>{type}</h4>
        <a href={URL} target="_blank">send a message</a>
    </div>
  )
}

export default Socials