import React from 'react';
import './Header.css'
import MenuIcon from "@material-ui/icons/Menu"
import { IconButton } from '@material-ui/core';
import formimage from "./images/slogo.png"
import SearchIcon from '@material-ui/icons/Search';
import AppsIcon from '@material-ui/icons/Apps';
import Avatar from '@material-ui/core/Avatar';
import avatarImage from "./images/avimg.JPG"
function Header() {
  return (
    <div className = "header">
      <div className = "header_info">

          <IconButton>
          <MenuIcon />
          </IconButton>
          <img src = {formimage} style={{height: '50px',width: '40px'}} className = "form_image"/>
          <div className = "info">
            Digital Survey
          </div>

      </div>

      <div className = "header_search">
          <IconButton>
          <SearchIcon />
          </IconButton>
          <input type = "text" name = "search" placeholder = "Search" />
      </div>

      <div className = "header_right">
          
          <IconButton>
          <AppsIcon />
          </IconButton>

          <IconButton>
          <Avatar src={avatarImage}/>
          </IconButton>

      </div>

    </div>
  );
}

export default Header;
