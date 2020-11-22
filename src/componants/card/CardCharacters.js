import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./cardCharacters.css";

function cardCharacters({ character, characters, setCharacters }) {
  return (
    <div className="card">
      <Link
        to={`/character/${character.id}`}
        className="character"
        key={character.id}
      >
        <div className="bloc-img">
          <img
            className="image-character"
            src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
            alt={character.name}
          />
          <div>
            {character.description ? (
              <p classNmae="description"> {character.description}</p>
            ) : null}
            <h2 className="title">{character.name}</h2>
          </div>
        </div>
      </Link>
      <div
        className="bloc-favoris"
        onClick={() => {
          const newCharacters = [...characters];
          newCharacters.push(
            <div className="card">
              <Link
                to={`/character/${character.id}`}
                className="character"
                key={character.id}
              >
                <div className="bloc-img">
                  <img
                    className="image-character"
                    src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                    alt={character.name}
                  />
                  <div>
                    {character.description ? (
                      <p classNmae="description"> {character.description}</p>
                    ) : null}
                    <h2 className="title">{character.name}</h2>
                  </div>
                </div>
              </Link>
            </div>
          );
          setCharacters(newCharacters);
        }}
      >
        <FontAwesomeIcon icon="heart" />
      </div>
    </div>
  );
}

export default cardCharacters;
