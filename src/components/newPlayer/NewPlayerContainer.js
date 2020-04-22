import React, { useState } from "react";
import NewPlayer from "./NewPlayer";
import http from "../../app/http";
import { Redirect } from "react-router-dom";

const NewPlayerContainer = () => {
  const [playerCreated, setPlayerCreated] = useState(false);

  const createPlayer = (name) => {
    http
      .post("players", { name })
      .then(() => setPlayerCreated(true))
      .catch(console.error);
  };

  return playerCreated ? (
    <Redirect to="/rooms" />
  ) : (
    <div>
      <h2>Home</h2>
      <NewPlayer onSubmitPlayer={createPlayer} />
    </div>
  );
};

export default NewPlayerContainer;
