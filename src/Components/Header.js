import React from "react";
import { useState } from "react";
import "./Header.css";
import MenuIcon from '@material-ui/icons/Menu';
import $ from "jquery";
function Header() {
  
  $(window).resize(()=>{
     //console.log(typeof($(window).width()));
    if($(window).width()<500){
        console.log($(window).width());
        $(".header_con").slideUp()
    }
    

  })
  return (
    <div className="header">
      <div className="header_con">
        <h2>Projects</h2>
        <h2>About Me</h2>
        <h2>Contact</h2>
      </div>
    </div>
  );
}

export default Header;
