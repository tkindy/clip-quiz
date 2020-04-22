import React from "react";
import { apiBaseUrl } from "../../app/http";

const startSpotifyLogin = () => {
  window.location.href = apiBaseUrl + "/spotify/login";
};

const SpotifyLogin = () => {
  return (
    <div>
      <h2>Connect to Spotify</h2>
      <p>This game requires a Spotify Premium account.</p>
      <button onClick={startSpotifyLogin}>Login</button>
    </div>
  );
};

export default SpotifyLogin;
