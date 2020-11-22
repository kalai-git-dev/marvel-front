import React, { useState, useEffect } from "react";
import axios from "axios";
import "./character.css";
import { useParams } from "react-router-dom";
import Loader from "../../componants/loader/Loader";

function Character() {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [dataComics, setDataComics] = useState([]);

  //   console.log(params);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://marvel-api-amine.herokuapp.com/character/${id}`
      );
      // console.log(response.data.results);
      setData(response.data);
      setIsLoading(false);
      const resComics = await axios.get(
        "https://marvel-api-amine.herokuapp.com/comics"
      );
      console.log(resComics.data);
      setDataComics(resComics.data);
      setIsLoading(false);
      console.log(dataComics);
    };
    fetchData();
  }, [id]);
  return (
    <div>
      <div>
        {isLoading ? (
          <Loader />
        ) : (
          <div className="main">
            {data.results.map((item) => {
              return (
                <div className="contenu" key={item.id}>
                  <img
                    src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                    alt={item.name}
                  />
                  <div className="col-rigth">
                    <h2>{item.name}</h2>
                    {item.comics.available > 1 ? (
                      <p>Number of Comics :{item.comics.available} </p>
                    ) : (
                      <p>Number of Comic : {item.comics.available}</p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
      {/* <div>
        {isLoading ? (
          <p> chargemnt</p>
        ) : (
          <div>
            {dataComics.data.results.images.map((comic) => {
              return (
                <div key={comic.name}>
                  <img
                    src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                    alt={comic.name}
                  />
                  <h4>{comic.name}</h4>
                </div>
              );
            })}
          </div>
        )}
      </div> */}
    </div>
  );
}

export default Character;
