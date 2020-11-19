import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function Character() {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  //   console.log(params);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`http://localhost:3001/character/${id}`);
      // console.log(response.data.results);
      setData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, [id]);
  return (
    <div>
      {isLoading ? (
        <p> chargement</p>
      ) : (
        <div>
          {data.results.map((item) => {
            return (
              <div key={item.id}>
                <img
                  src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                  alt={item.name}
                />
                <div>
                  <h2>{item.name}</h2>
                  {item.comics.available > 1 ? (
                    <p>Number of Comics :{item.comics.available} </p>
                  ) : (
                    <p>Number of Comic : {item.comics.available}</p>
                  )}
                  {item.comics.items.map((comic) => {
                    return (
                      <div key={comic.name}>
                        <img
                          src={comic.resourceURI + ".jpg"}
                          alt={comic.name}
                        />
                        <h4>{comic.name}</h4>
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

export default Character;
