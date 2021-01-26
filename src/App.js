import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./componants/header/Header";
import Characters from "./containers/characters/Characters";
import { useState } from "react";
import Character from "./containers/character/Character";
import Comics from "./containers/comics/Comics";
import Home from "./containers/home/Home";
import Favoris from "./containers/favoris/Favoris";
import Comic from "./containers/comics/Comic";
import Signup from "./containers/signup/Signup";
// ---------font-awsome-----------
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
library.add(faHeart);

//  -------- les etats------------

function App() {
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState("");
  // const [comics, setComics] = useState([]);

  return (
    <Router>
      <Header
        search={search}
        setSearch={setSearch}
        // filtersItems={filtersItems}
      />
      <Switch>
        <Route path="/character/:id">
          <Character />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/comics">
          <Comics />
        </Route>
        <Route path="/comic/:id">
          <Comic />
        </Route>
        <Route path="/characters">
          <Characters
            characters={characters}
            setCharacters={setCharacters}
            search={search}
          />
        </Route>
        <Route path="/favoris">
          <Favoris characters={characters} />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
