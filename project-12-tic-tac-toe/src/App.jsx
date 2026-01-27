import "./App.css";
import Header from "./Components/Header";
import Player from "./Components/Player";
import Gameboard from "./Components/Gameboard";
import Logs from "./Components/Logs";
import GameOver from "./Components/GameOver";
import { WINNING_COMBINATIONS } from "./Components/winningConditions";
import { useState } from "react";

function App() {

  const [gameLogs, setGameLogs]= useState([])
  const [activePlayer,setActivePlayer] = useState("X");
  const [hasWinner, setHasWinner] = useState(null);
  const [hasDraw, setHasDraw] = useState(false);

  function checkWinner(updatedLogs){
    const board = [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ];

    for(const log of updatedLogs){
      board[log.square.row][log.square.col] = log.player;
    }

    for(const combination of WINNING_COMBINATIONS){
      const first = board[combination[0].row][combination[0].column];
      const second = board[combination[1].row][combination[1].column];
      const third = board[combination[2].row][combination[2].column];

      if(first && first === second && first === third){
        return first;
      }
    }

    return null;
  }

  function changePlayer(rowIndex,colIndex){
  if(hasWinner || hasDraw) return;

  setGameLogs((prevLogs)=>{
    const updatedLogs = [
      {square:{row:rowIndex,col: colIndex}, player : activePlayer},
      ...prevLogs
    ];

    const winner = checkWinner(updatedLogs);
    if(winner){
      setHasWinner(winner);
    } else if (updatedLogs.length === 9) {
      setHasDraw(true);
    }

    return updatedLogs;
  });

  setActivePlayer((currentPlayer)=> (currentPlayer === "X") ? "O" : "X")
}


  function restartGame(){
  setGameLogs([]);
  setActivePlayer("X");
  setHasWinner(null);
  setHasDraw(false);
}

  return (
    <main className="bg-amber-400 bg-[url(C:\Users\vinit\Desktop\react-stuff\project-12-tic-tac-toe\src\assets\bg-pattern.png)] bg-repeat min-h-screen flex flex-col justify-center items-center gap-16 py-16">
    <Header heading={"Tic-Tac-Toe"} />

      <div className="relative game-container bg-black text-white p-6 flex flex-col gap-4 rounded items-center drop-shadow-2xl min-w-2xl">
        {/* [PLAYER NAMES] */}
        <ol className="flex gap-20 justify-center w-2xl border border-white p-1">
          <Player initialName={"Player 1"} symbol={"X"} isActive={activePlayer === "X"}/>
          <Player initialName={"Player 2"} symbol={"O"} isActive={activePlayer  === "O"}/>
        </ol>

        {/* [GAME BOARD] */}
        <Gameboard changePlayer={changePlayer} Logs={gameLogs} />

        {/* [LOGS] */}
        <Logs logs={gameLogs}/>

        {(hasWinner || hasDraw) && (
  <GameOver
    winner={hasWinner}
    onRestart={restartGame}
  />
)}

      </div>
    </main>
  );
}

export default App;