import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
import Logo2 from "./logo.png";
import Logo1 from "./1.png";

function Header() {
  return (
    <div className="header">
      <img src={Logo1} alt="logo marvel" />

      <nav>
        <Link to="/characters">Characters</Link>
        <Link to="/comics">Comics</Link>
        <Link to="favoris">Favoris</Link>
      </nav>
      <img src={Logo2} alt="logo marvel" />
    </div>
  );
}

export default Header;
