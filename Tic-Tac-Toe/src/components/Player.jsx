import React, { useState } from "react";

function Player({ name, symbol, isActive, onChangeName }) {
  const [isEditing, setIsEditing] = useState(false);
  const [nameState, setNameState] = useState(name);

  const handleEditMode = () => {
    setIsEditing(editing => !editing);
    if (isEditing) {
      onChangeName(symbol, nameState);
    }
  };

  const handleNameChange = event => {
    setNameState(event.target.value);
  };

  const playerName = isEditing ? (
    <input type="text" required value={nameState} onChange={handleNameChange} />
  ) : (
    <span className="player-name">{nameState}</span>
  );
  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditMode}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}

export default Player;
