const initialGameboard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
]

export default function Gameboard() {
  return (
    <div className="grid grid-cols-3 gap-3">
      {initialGameboard.flat().map((playerSymbol, index) => (
        <button
          key={index}
          className="
            w-28 h-28
            border border-white
            flex items-center justify-center
            text-4xl font-bold
            hover:bg-gray-800
          "
        >
          {playerSymbol}
        </button>
      ))}
    </div>
  )
}