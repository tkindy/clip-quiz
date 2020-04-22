import React from "react";
import NewPlayer from "./NewPlayer";
import http from "../../app/http";

const createPlayer = (name) => {
  http
    .post("players", { name })
    .then(() => console.log("Player created"))
    .catch(console.error);
};

const Home = () => {
  return (
    <div>
      <h2>Home</h2>
      <NewPlayer onSubmitPlayer={createPlayer} />
    </div>
  );
};

export default Home;
