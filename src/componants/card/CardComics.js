import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./cardCharacters.css";

function CardComics({ result }) {
  return (
    <div className="card">
      <Link to={`/comic/${result.id}`} key={result.id} className="character">
        <div className="bloc-img">
          <img
            className="image-character"
            src={`${result.thumbnail.path}.${result.thumbnail.extension}`}
            alt={result.name}
          />
          <div>
            {result.description ? (
              <p className="description">{result.description} </p>
            ) : null}

            <h2 className="title">{result.title}</h2>
          </div>
        </div>
      </Link>
      <div className="bloc-favoris">
        <FontAwesomeIcon icon="heart" className="icon-heart" />
      </div>
    </div>
  );
}

export default CardComics;
