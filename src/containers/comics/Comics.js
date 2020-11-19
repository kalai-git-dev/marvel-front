import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Comics() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/comics");
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
        <p> en chargement....</p>
      ) : (
        <div>
          <div>
            <h1> DISCOVER OUR COMICS</h1>
          </div>
          {data.results.map((result) => {
            return (
              <Link to={`/comic/${result.id}`} key={result.id}>
                <div>
                  <img
                    src={`${result.thumbnail.path}.${result.thumbnail.extension}`}
                    alt={result.name}
                  />
                  <p>{result.description ? result.description : null}</p>
                </div>
                <h2>{result.title}</h2>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Comics;
