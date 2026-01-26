import Tile from "./Tile";

export default function Gameboard({ board, onTileClick, gameOver }) {
  return (
    <div className="grid grid-cols-3 gap-1 bg-white p-1 border-2 border-black">
      {board.map((row, rowIndex) =>
        row.map((symbol, colIndex) => (
          <Tile
            key={`${rowIndex}-${colIndex}`}
            value={symbol}
            gameOver={gameOver}
            onSelect={() => onTileClick(rowIndex, colIndex)}
          />
        ))
      )}
    </div>
  );
}
