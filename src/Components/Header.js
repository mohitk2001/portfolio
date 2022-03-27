import React,{useState} from "react";
import "./Header.css";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import MessageOutlinedIcon from "@material-ui/icons/MessageOutlined";
import LibraryBooksOutlinedIcon from "@material-ui/icons/LibraryBooksOutlined";
import IconButton from "@material-ui/core/IconButton";
function Header() {
  const [active, setActive] = useState("#")
  return (
    <div className="header">
      <a href="#home_section">
        <IconButton onClick={()=>{setActive("#")}}>
          <HomeOutlinedIcon fontSize="large" className="header_icons" id={active==="#" ?"active":"" } />
        </IconButton>
      </a>
      <a href="#about_section">
        <IconButton onClick={()=>{setActive("#about")}}>
          <AccountCircleOutlinedIcon
            fontSize="large"
            className="header_icons"
            id={active==="#about" ?"active":"" }
          />
        </IconButton>
      </a>

      <a href="#contact_section">
        <IconButton onClick={()=>{setActive("#contact")}}>
          <MessageOutlinedIcon fontSize="large" className="header_icons" id={active==="#contact" ?"active":"" } />
        </IconButton>
      </a>
      <a href="#project_section">
        <IconButton onClick={()=>{setActive("#project")}}>
          <LibraryBooksOutlinedIcon fontSize="large" className="header_icons" id={active==="#project" ?"active":"" } />
        </IconButton>
      </a>
    </div>
  );
}

export default Header;
