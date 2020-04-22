import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SpotifyLogin from "./home/SpotifyLogin";
import NewPlayerContainer from "./newPlayer/NewPlayerContainer";
import Rooms from "./rooms/Rooms";

const App = () => {
  return (
    <Router>
      <div>
        <h1>Spotify Clip Quiz Game</h1>

        <Switch>
          <Route exact path="/">
            <SpotifyLogin />
          </Route>
          <Route path="/new-player">
            <NewPlayerContainer />
          </Route>
          <Route path="/rooms">
            <Rooms />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
