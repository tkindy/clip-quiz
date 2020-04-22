import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./home/Home";

const App = () => {
  return (
    <Router>
      <div>
        <h1>Spotify Clip Quiz Game</h1>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
