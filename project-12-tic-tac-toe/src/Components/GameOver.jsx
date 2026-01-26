export default function GameOver({ winner, onRestart }) {
  return (
    <div className="absolute inset-6 bg-black bg-opacity-90 p-6 flex flex-col justify-center items-center gap-4 text-white rounded">
      <h2 className="text-4xl font-bold">
        {winner ? `${winner} Wins!` : "It's a Draw!"}
      </h2>

      <button
        className="border border-white px-6 py-2 rounded hover:bg-yellow-900"
        onClick={onRestart}
      >
        Restart Game
      </button>
    </div>
  );
}
