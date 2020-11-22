import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
import Logo2 from "./logo.png";
import Logo1 from "./1.png";

function Header({ search, setSearch }) {
  return (
    <div>
      <div className="header">
        <div className="col-1">
          <Link to="/">
            <img className="header-image" src={Logo2} alt="logo marvel" />
          </Link>
          <nav className="navigation">
            <Link to="/characters">Characters</Link>
            <Link to="/comics">Comics</Link>
            <Link to="/favoris">Favoris</Link>
          </nav>

          <Link to="/">
            <img className="header-image" src={Logo1} alt="logo marvel" />
          </Link>
          <button className="button.header">LOGIN</button>
        </div>
      </div>
      <form className="search">
        <input
          type="text"
          placeholder="LOOKING FOR SOMETHING ?"
          value={search}
          onChange={(event) => {
            setSearch(event.target.value);
          }}
        />
      </form>
    </div>
  );
}

export default Header;
