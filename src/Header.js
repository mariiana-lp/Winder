import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import "./Header.css";
import { IconButton } from "@mui/material";
import {Link} from 'react-router-dom'

function Header() {
  return (
    <div className="header">
      <Link to="/profile">
        <IconButton>
          <PersonIcon className="header__icon" fontSize="large" />
        </IconButton>
      </Link>

      <Link to='/'>
        <img
          src="https://acortar.link/LcLSSj"
          className="header__logo"
          alt="logo"
        />
      </Link>

      <Link to="/chats">
        <IconButton>
          <QuestionAnswerIcon className="header__icon" fontSize="large" />
        </IconButton>
      </Link>
    </div>
  );
}

export default Header;
