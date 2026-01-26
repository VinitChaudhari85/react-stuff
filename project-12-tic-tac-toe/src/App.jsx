import "./App.css";
import Header from "./Components/Header";
import Player from "./Components/Player";
import Gameboard from "./Components/Gameboard";
import { useState } from "react";
import Logs from "./Components/Logs";

function App() {

  const [gameLogs, setGameLogs]= useState([])
  const [activePlayer,setActivePlayer] = useState("X");

  function changePlayer( rowIndex,colIndex){
    setGameLogs((prevLogs)=>{
      const updatedLogs = [
        {square:{row:rowIndex,col: colIndex}, player : activePlayer},
        ...prevLogs
      ]
      return updatedLogs;
    })

    setActivePlayer((currentPlayer)=> (currentPlayer === "X") ? "O" : "X")
  }

  return (
    <main className="bg-amber-400 bg-[url(C:\Users\vinit\Desktop\react-stuff\project-12-tic-tac-toe\src\assets\bg-pattern.png)] bg-repeat min-h-screen flex flex-col justify-center items-center gap-16">
      <Header heading={"Tic-Tac-Toe"} />

      <div className="game-container bg-black text-white p-6 flex flex-col gap-4 rounded items-center drop-shadow-2xl min-w-2xl">
        {/* [PLAYER NAMES] */}
        <ol className="flex gap-20 justify-center w-2xl border border-white p-1">
          <Player initialName={"Player 1"} symbol={"X"} isActive={activePlayer === "X"}/>
          <Player initialName={"Player 2"} symbol={"O"} isActive={activePlayer  === "O"}/>
        </ol>

        {/* [GAME BOARD] */}
        <Gameboard changePlayer={changePlayer} Logs={gameLogs} />

        {/* [LOGS] */}
        <Logs logs={gameLogs}/>
      </div>
    </main>
  );
}

export default App;
