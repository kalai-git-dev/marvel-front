import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./characters.css";
function Characters() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/characters");
        // console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        alert(error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {isLoading ? (
        <p>chargemnt</p>
      ) : (
        <div className="characters">
          <h1> DISCOVER OUR CHARACTERS</h1>
          <div className="container">
            {data.data.results.map((character) => {
              //   console.log(character);
              return (
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
                    {character.description ? (
                      <p> {character.description}</p>
                    ) : null}
                  </div>
                  <p>{character.name}</p>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default Characters;
// <div>
// {isLoading ? (
//     <p>en chargement.....</p>
//   ) : (
//     <div>
// {data.data.results.map((character) => {

// return
// })
//     </div>

//   )
// </div>
