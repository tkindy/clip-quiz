import React, { useState } from "react";
import { submitForm, extractInputValue } from "../../app/util";

const NewRoom = ({ onSubmit }) => {
  const [playlistUrl, setPlaylistUrl] = useState("");

  return (
    <div>
      <form onSubmit={submitForm(() => onSubmit(playlistUrl))}>
        <label>
          Spotify Playlist URI
          <input
            type="text"
            value={playlistUrl}
            onChange={extractInputValue(setPlaylistUrl)}
          />
        </label>
        <input type="submit" value="Create" />
      </form>
    </div>
  );
};

export default NewRoom;
