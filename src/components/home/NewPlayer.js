import React, { useState } from "react";
import { submitForm, extractInputValue } from "../../app/util";

const NewPlayer = ({ onSubmitPlayer }) => {
  const [name, setName] = useState("");

  return (
    <form onSubmit={submitForm(() => onSubmitPlayer(name))}>
      <label>
        Name:
        <input type="text" value={name} onChange={extractInputValue(setName)} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default NewPlayer;
