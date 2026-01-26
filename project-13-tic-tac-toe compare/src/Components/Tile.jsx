export default function Tile({ value, onSelect, gameOver }) {
  return (
    <button
      className="w-24 h-24 border-2 border-black text-4xl font-bold hover:bg-yellow-300 text-black"
      onClick={onSelect}
      disabled={value !== null || gameOver}
    >
      {value}
    </button>
  );
}
