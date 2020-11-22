import React, { useState, useEffect } from "react";
import axios from "axios";
import "./characters.css";
import CardCharacters from "../../componants/card/CardCharacters";
import Loader from "../../componants/loader/Loader";

function Characters({ characters, setCharacters }) {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://marvel-api-amine.herokuapp.com/characters"
        );
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
        <div>
          <Loader />
        </div>
      ) : (
        <div className="characters">
          <h1> DISCOVER OUR CHARACTERS</h1>
          <div className="container">
            {/* data.data.results */}
            {data.data.results.map((character) => {
              //   console.log(character);
              return (
                <CardCharacters
                  character={character}
                  characters={characters}
                  setCharacters={setCharacters}
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default Characters;
