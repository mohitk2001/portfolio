import React from 'react'
import "./Social.css"
function Socials({icon,text,URL,type}) {
  return (
    <div className='social my-4'>
        {icon}
        <p>{text}</p>
        <p>{type}</p>
        <a href={URL} target="_blank">send a message</a>
    </div>
  )
}

export default Socials