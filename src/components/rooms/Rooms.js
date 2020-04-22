import React from "react";
import JoinRoom from "./JoinRoom";
import NewRoom from "./NewRoom";

const Rooms = () => {
  return (
    <div>
      <h2>Rooms</h2>
      <h3>Join an existing room</h3>
      <JoinRoom onSubmit={(roomCode) => console.log(`Join room ${roomCode}`)} />

      <h3>Create a new room</h3>
      <NewRoom
        onSubmit={(playlistUrl) => console.log(`New room ${playlistUrl}`)}
      />
    </div>
  );
};

export default Rooms;
