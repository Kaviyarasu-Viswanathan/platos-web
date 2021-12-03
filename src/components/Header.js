import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <Link to="/">
          <img
            src="https://platos.in/assets/images/enachanced-platos-white-216x216.png"
            alt="platos"
            height="50"
            width="50"
          />
        </Link>

        <h4>PLATOS</h4>
      </div>
      <div className="header__right">
        <Link to="/page_two"> News</Link>
        <Link to="/page_one">Movies</Link>
      </div>
    </div>
  );
}

export default Header;
