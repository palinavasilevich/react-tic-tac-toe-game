const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export const GameBoard = ({ turns, onSelectSquare }) => {
  let gameBoard = initialGameBoard;

  for (const turn of turns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }

  //   const [gameBoard, setGameBoard] = useState(initialGameBoard);

  //   const handleSelectSquare = (selectedRowIndex, selectedColIndex) => {
  //     setGameBoard((prevGameBoard) => {
  //       const updatedGameBoard = [
  //         ...prevGameBoard.map((innerArray) => [...innerArray]),
  //       ];
  //       updatedGameBoard[selectedRowIndex][selectedColIndex] =
  //         currentPlayerSymbol;

  //       return updatedGameBoard;
  //     });

  //     onSelectSquare();
  //   };

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((col, colIndex) => (
              <li key={colIndex}>
                <button
                  disabled={col}
                  onClick={() => onSelectSquare(rowIndex, colIndex)}
                >
                  {col}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
};
