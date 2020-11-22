import React from "react";

function Favoris({ characters }) {
  return (
    <div className="container-favoris">
      <div className="favoris">
        {characters.map((character, index) => {
          return (
            <div key={index}>
              <span>{character}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Favoris;
