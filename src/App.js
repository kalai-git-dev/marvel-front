import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./componants/header/Header";
import Characters from "./containers/characters/Characters";
import Character from "./containers/character/Character";
import Comics from "./containers/comics/Comics";
import Home from "./containers/home/Home";
import Comic from "./containers/comics/Comic";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/characters">
          <Characters />
        </Route>
        <Route path="/character/:id">
          <Character />
        </Route>
        <Route path="/comics">
          <Comics />
        </Route>
        <Route path="/comic/:id">
          <Comic />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
