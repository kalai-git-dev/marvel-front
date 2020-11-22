import React, { useState, useEffect } from "react";
import axios from "axios";
import CardComics from "../../componants/card/CardComics";
import Loader from "../../componants/loader/Loader";

function Comics() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://marvel-api-amine.herokuapp.com/comics"
        );
        // console.log(response.data.data);
        setData(response.data.data);
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
        <Loader />
      ) : (
        <div className="characters">
          <h1> DISCOVER OUR COMICS</h1>

          <div className="container">
            {data.results.map((result) => {
              return <CardComics result={result} />;
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default Comics;
