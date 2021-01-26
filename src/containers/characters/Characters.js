import React, { useState, useEffect } from "react";
import axios from "axios";
import "./characters.css";
import CardCharacters from "../../componants/card/CardCharacters";
import Loader from "../../componants/loader/Loader";

import ReactPaginate from "react-paginate";

function Characters({ characters, setCharacters, search }) {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [offset, setOffset] = useState(0);
  const perPage = 12;
  const [pageCount, setPageCount] = useState(0);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://marvel-api-amine.herokuapp.com/characters`
      );
      const data = response.data.data.results;
      setCharacters(data);
      // if (search) {
      //   const filtersItems = characters.filter((item) => {
      //     return item.name.toLowerCase().includes(search.toLowerCase());
      //   });
      //   console.log(filtersItems);
      //   filtersItems.map((character) => {
      //     <CardCharacters
      //       key={character.id}
      //       character={character}
      //       characters={characters}
      //       setCharacters={setCharacters}
      //     />;
      //   });
      // }
      // console.log(response.data);
      const slice = data.slice(offset, offset + perPage);
      // console.log(slice);

      const postData = slice.map((character) => (
        <CardCharacters
          key={character.id}
          character={character}
          characters={characters}
          setCharacters={setCharacters}
        />
      ));
      setData(postData);

      setPageCount(Math.ceil(data.length / perPage));
      setIsLoading(false);
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, [offset, search]);

  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    setOffset(selectedPage * perPage);
  };

  return (
    <div>
      {isLoading ? (
        <div>
          <Loader />
        </div>
      ) : (
        <>
          <div className="characters">
            <h1> DISCOVER OUR CHARACTERS</h1>
          </div>
          <div className="container">
            {data}
            <ReactPaginate
              previousLabel={"prev"}
              nextLabel={"next"}
              breakLabel={"..."}
              breakClassName={"break-me"}
              pageCount={pageCount}
              marginPagesDisplayed={2}
              pageRangeDisplayed={4}
              onPageChange={handlePageClick}
              containerClassName={"pagination"}
              subContainerClassName={"pages pagination"}
              activeClassName={"active"}
            />
          </div>
        </>
      )}
    </div>
  );
}

export default Characters;
