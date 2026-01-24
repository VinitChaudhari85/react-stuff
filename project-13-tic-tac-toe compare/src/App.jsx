import "./App.css";
import Header from "./Components/Header";
import Player from "./Components/Player";
import Gameboard from "./Components/Gameboard";

function App() {
  return (
    <main className="min-h-screen bg-amber-400 flex flex-col items-center justify-center gap-12">
      <Header heading="Tic-Tac-Toe" />

      <div className="bg-black text-white p-8 rounded-xl flex flex-col gap-8 shadow-2xl">
        {/* Players */}
        <ol className="flex justify-between gap-12">
          <Player initialName="Player 1" symbol="X" />
          <Player initialName="Player 2" symbol="O" />
        </ol>

        {/* Board */}
        <div className=" flex justify-center">
          <Gameboard />
        </div>
      </div>
    </main>
  );
}

export default App;
