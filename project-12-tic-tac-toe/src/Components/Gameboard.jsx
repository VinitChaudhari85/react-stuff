const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function Gameboard({changePlayer, Logs}) {

    let gameBoard = initialGameBoard.map(row => [...row]);

    for(const log of Logs){
        const {square, player} = log
        const {row, col} = square

        gameBoard[row][col] = player
    }
 
  return (
    <ol className="border border-white min-w-96 p-2">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol className="flex gap-2 p-1 justify-center">
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex} className="border border-white flex flex-center items-center">
                <button
                  className="w-32 h-32 hover:bg-yellow-900 font-bold text-4xl"
                  onClick={()=>{
                    if(playerSymbol) return;
                    changePlayer(rowIndex, colIndex)
                  }}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
