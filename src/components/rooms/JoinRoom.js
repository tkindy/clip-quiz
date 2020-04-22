import React, { useState } from "react";
import { submitForm, extractInputValue } from "../../app/util";

const JoinRoom = ({ onSubmit }) => {
  const [roomCode, setRoomCode] = useState("");

  return (
    <div>
      <form onSubmit={submitForm(() => onSubmit(roomCode))}>
        <label>
          Room code:
          <input
            type="text"
            value={roomCode}
            onChange={extractInputValue(setRoomCode)}
          />
        </label>
        <input type="submit" value="Join" />
      </form>
    </div>
  );
};

export default JoinRoom;
