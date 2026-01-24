import "./App.css";
import Header from "./Components/Header";
import Player from "./Components/Player";
import Gameboard from "./Components/Gameboard";
function App() {
  return (
    <main className="bg-amber-400 bg-[url(C:\Users\vinit\Desktop\react-stuff\project-12-tic-tac-toe\src\assets\bg-pattern.png)] bg-repeat min-h-screen flex flex-col justify-center items-center gap-16">
      <Header heading={"Tic-Tac-Toe"} />

      <div className="game-container bg-black text-white p-6 flex flex-col gap-4 rounded drop-shadow-2xl  w-1/2">
        {/* [PLAYER NAMES] */}
        <ol className="flex gap-20 justify-center">
          <Player initialName={"Player 1"} symbol={"X"}/>
          <Player initialName={"Player 2"} symbol={"O"}/>
        </ol>
        {/* [GAME BOARD] */}
          <Gameboard/>
      </div>
      {/* [LOGS] */}
    </main>
  );
}

export default App;
