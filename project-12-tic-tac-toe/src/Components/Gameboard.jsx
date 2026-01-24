const initialGameboard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
]

export default function Gameboard() {
  return (
    <ol className="grid grid-cols-3 gap-3">
      {initialGameboard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li
                key={colIndex}
                className="w-28 h-28 border border-white"
              >
                <button
                  className="
                    w-full h-full
                    flex items-center justify-center
                    text-4xl font-bold
                    hover:bg-gray-800
                  "
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  )
}