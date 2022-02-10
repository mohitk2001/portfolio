import React from "react";
import { useState } from "react";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import Project from "./MyProjects/Projects";
import Contact from "./Contact";
import About from "./About";
import $ from "jquery";
function Header() {
  $(window).resize(() => {
    //console.log(typeof($(window).width()));
    if ($(window).width() < 500) {
      console.log($(window).width());
      $(".header_con").slideUp();
    }
  });
  return (
    <div className="header">
      <div className="header_con">
        <a href="#projectsScroll">
          <h2>Projects</h2>
        </a>
        <a href="#aboutScroll">
          <h2>About Me</h2>
        </a>
        <a href="#contactScroll">
          <h2>Contact</h2>
        </a>{" "}
      </div>
    </div>
  );
}

export default Header;
