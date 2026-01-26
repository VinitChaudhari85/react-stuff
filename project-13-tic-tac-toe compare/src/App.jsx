import { useState, useEffect } from "react";
import Header from "./Components/Header";
import Player from "./Components/Player";
import Gameboard from "./Components/Gameboard";

const INITIAL_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

// pure JS function
function checkWinner(board) {
  const winningLines = [
    // rows
    [
      [0, 0],
      [0, 1],
      [0, 2],
    ],
    [
      [1, 0],
      [1, 1],
      [1, 2],
    ],
    [
      [2, 0],
      [2, 1],
      [2, 2],
    ],
    // columns
    [
      [0, 0],
      [1, 0],
      [2, 0],
    ],
    [
      [0, 1],
      [1, 1],
      [2, 1],
    ],
    [
      [0, 2],
      [1, 2],
      [2, 2],
    ],
    // diagonals
    [
      [0, 0],
      [1, 1],
      [2, 2],
    ],
    [
      [0, 2],
      [1, 1],
      [2, 0],
    ],
  ];

  for (const line of winningLines) {
    const [[r1, c1], [r2, c2], [r3, c3]] = line;
    const first = board[r1][c1];

    if (first && first === board[r2][c2] && first === board[r3][c3]) {
      return first;
    }
  }

  return null;
}

function App() {
  const [activePlayer, setActivePlayer] = useState("X");
  const [gameBoard, setGameBoard] = useState(INITIAL_BOARD);
  const [winner, setWinner] = useState(null);

  function handleTileClick(rowIndex, colIndex) {
    if (winner) return;

    setGameBoard((prevBoard) => {
      const updatedBoard = prevBoard.map((row) => [...row]);

      if (updatedBoard[rowIndex][colIndex] !== null) {
        return prevBoard;
      }

      updatedBoard[rowIndex][colIndex] = activePlayer;
      return updatedBoard;
    });

    setActivePlayer((prev) => (prev === "X" ? "O" : "X"));
  }

  // ✅ winner detection happens AFTER board updates
  useEffect(() => {
    const gameWinner = checkWinner(gameBoard);
    if (gameWinner) {
      setWinner(gameWinner);
    }
  }, [gameBoard]);

  return (
    <main
      className="min-h-screen flex flex-col justify-center items-center gap-16 bg-amber-400 bg-repeat"
      style={{
        backgroundImage: "url('/src/assets/bg-pattern.png')",
      }}
    >
      <Header heading="Tic-Tac-Toe" />

      <div className="bg-black text-white p-6 rounded flex flex-col gap-6 items-center">
        <ol className="flex gap-16">
          <Player initialName="Player 1" symbol="X" />
          <Player initialName="Player 2" symbol="O" />
        </ol>

        {winner ? (
          <p className="text-xl font-bold text-green-400">Winner: {winner}</p>
        ) : (
          <p className="text-lg">Turn: {activePlayer}</p>
        )}

        <Gameboard
          board={gameBoard}
          onTileClick={handleTileClick}
          gameOver={Boolean(winner)}
        />
      </div>
    </main>
  );
}

export default App;
