import React, { useState, useEffect } from "react";
import axios from "axios";
import CardComics from "../../componants/card/CardComics";
import Loader from "../../componants/loader/Loader";
import ReactPaginate from "react-paginate";

function Comics() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [offset, setOffset] = useState(0);
  const perPage = 12;
  const [pageCount, setPageCount] = useState(0);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://marvel-api-amine.herokuapp.com/comics"
      );
      // console.log(response.data);
      const data = response.data.data.results;
      const slice = data.slice(offset, offset + perPage);
      console.log(slice);
      const postData = slice.map((result) => <CardComics result={result} />);
      setData(postData);
      setPageCount(Math.ceil(data.length / perPage));
      setIsLoading(false);
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, [offset]);

  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    setOffset(selectedPage * perPage);
  };
  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="characters">
          <h1> DISCOVER OUR COMICS</h1>

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
        </div>
      )}
    </div>
  );
}

export default Comics;
