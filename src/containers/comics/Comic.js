import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Comic() {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`http://localhost:3001/comic/${id}`);
      console.log(response.data);
      setData(response.data);
      setIsLoading(false);
      //   console.log(data);
    };
    fetchData();
  }, [id]);

  return (
    <div>
      {isLoading ? (
        <p> chargement en cours ....</p>
      ) : (
        <div>
          {data.results.map((character) => {
            return (
              <div>
                <div>
                  <h2>{character.title}</h2>
                  {character.creators.items.map((creator) => {
                    return (
                      <div>
                        <p>name : {creator.name}</p>
                        <p>Role : {creator.role}</p>
                      </div>
                    );
                  })}

                  <p>{character.description ? character.description : null}</p>
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
                <div>
                  {character.characters.items.map((charaItem) => {
                    return (
                      <div>
                        {/* <img src={} alt="" />
                        <p>{charaItem}</p> */}
                      </div>
                    );
                  })}
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
