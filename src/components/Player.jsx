import { useState } from "react";

export const Player = ({
  initialName,
  symbol,
  isActive,
  onPlayerNameChange,
}) => {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing((editing) => !editing);

    if (isEditing) {
      onPlayerNameChange(symbol, playerName);
    }
  };

  const handleChange = (e) => {
    setPlayerName(e.target.value);
  };

  return (
    <li className={isActive ? "active" : ""}>
      <span className="player">
        {!isEditing ? (
          <span className="player-name">{playerName}</span>
        ) : (
          <input
            type="text"
            required
            value={playerName}
            onChange={handleChange}
          />
        )}

        <span className="player-symbol">{symbol}</span>
      </span>

      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
};
