import React from "react";
import "./Header.css";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import MessageOutlinedIcon from "@material-ui/icons/MessageOutlined";
import LibraryBooksOutlinedIcon from "@material-ui/icons/LibraryBooksOutlined";
import IconButton from "@material-ui/core/IconButton";
function Header() {
  return (
    <div className="header">
      <a href="#home_section">
        <IconButton>
          <HomeOutlinedIcon fontSize="large" className="header_icons active" />
        </IconButton>
      </a>
      <a href="#about_section">
        <IconButton>
          <AccountCircleOutlinedIcon
            fontSize="large"
            className="header_icons"
          />
        </IconButton>
      </a>

      <a href="#contact_section">
        <IconButton>
          <MessageOutlinedIcon fontSize="large" className="header_icons" />
        </IconButton>
      </a>
      <a href="#project_section">
        <IconButton>
          <LibraryBooksOutlinedIcon fontSize="large" className="header_icons" />
        </IconButton>
      </a>
    </div>
  );
}

export default Header;
