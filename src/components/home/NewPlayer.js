import React, { useState } from "react";

const NewPlayer = ({ onSubmitPlayer }) => {
  const [name, setName] = useState("");
  const onNameChange = (e) => setName(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    onSubmitPlayer(name);
  };

  return (
    <form onSubmit={onSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={onNameChange} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default NewPlayer;
