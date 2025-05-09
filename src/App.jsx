import { useState } from "react";
import { GameBoard } from "./components/GameBoard";
import { Player } from "./components/Player";

function App() {
  const [currentPlayer, setCurrentPlayer] = useState("X");

  const handleSelectSquare = () => {
    setCurrentPlayer((prevCurrentPlayer) =>
      prevCurrentPlayer === "X" ? "O" : "X"
    );
  };

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="Player 1"
            symbol="X"
            isActive={currentPlayer === "X"}
          />
          <Player
            initialName="Player 2"
            symbol="O"
            isActive={currentPlayer === "O"}
          />
        </ol>
        <GameBoard
          onSelectSquare={handleSelectSquare}
          currentPlayerSymbol={currentPlayer}
        />
      </div>
    </main>
  );
}

export default App;
