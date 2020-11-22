import React from "react";
import loader from "../../loader.gif";
function Loader() {
  return (
    <div className="loader">
      <img src={loader} alt="waiting" />
    </div>
  );
}

export default Loader;
