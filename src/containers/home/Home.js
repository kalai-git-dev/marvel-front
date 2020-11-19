import React from "react";
import img from "./Acceuil.jpg";
import { Link } from "react-router-dom";
import "./home.css";

function Home() {
  return (
    <div className="home">
      <img src={img} alt="avengers marvel" />
      <div className="col-2">
        <h1>
          Welcome to <span>MARVEL</span>!
        </h1>
        <p>
          Marvel Studios est une société de production cinématographique
          américaine en prises de vue réelles et en animation assurant les
          adaptations cinématographiques des productions de Marvel
          Entertainment, essentiellement issues des Marvel Comics. Depuis le
          rachat de Marvel Entertainment par la Walt Disney Company fin 2009, le
          studio est rattaché au Walt Disney Motion Pictures Group mais jouit de
          la même liberté artistique que Pixar1. Dans les années 1990 et 2000,
          les studios de Marvel étaient situés au 1600 Rosecrans Avenue à
          Manhattan Beach en Californie, au sein du complexe Manhattan Beach
          Studios géré par Raleigh Studios. Depuis le rachat par Disney, le
          siège social est celui de la Walt Disney Company dans les Walt Disney
          Studios de Burbank.
        </p>
        <Link to="/characters" className="icon-rigth">
          <i class="fas fa-arrow-circle-right"></i>
        </Link>
      </div>
    </div>
  );
}

export default Home;
