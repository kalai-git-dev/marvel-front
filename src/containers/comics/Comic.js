import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./comics.css";

function Comic() {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  // const [dataCharacters, setDataCharacters] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://marvel-api-amine.herokuapp.com/comic/${id}`
      );
      console.log(response.data);
      setData(response.data);
      setIsLoading(false);
      //   console.log(data);
      // const resCharacters = await axios.get("http://localhost:3001/characters");
      // // console.log(response.data);
      // setData(resCharacters.data);
      // setDataCharacters(false);
      // console.log(dataCharacters);
    };
    fetchData();
  }, []);

  return (
    <div>
      {isLoading ? (
        <p> chargement en cours ....</p>
      ) : (
        <div className="main">
          {data.results.map((character) => {
            return (
              <div className="contenu">
                <div className="col-left">
                  <h2>{character.title}</h2>
                  <div>
                    <h3>Creators :</h3>
                    {character.creators.items.map((creator) => {
                      return (
                        <div>
                          <div className="creators">
                            <p>Name : {creator.name}</p>
                            <p>Role : {creator.role}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <p>
                    <div className="description">Description :</div>
                    {character.description ? character.description : null}
                  </p>
                  {character.prices.map((price) => {
                    return (
                      <p>
                        {price.price === 0
                          ? null
                          : `Price print : ${price.price}`}{" "}
                      </p>
                    );
                  })}
                </div>
                <div>
                  <img
                    src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                    alt={character.title}
                  />
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Comic;
