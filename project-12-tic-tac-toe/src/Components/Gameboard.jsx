const initialGameboard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]
export default function Gameboard(){
    return <ol className="border border-white grid grid-cols-3 grid-rows-3 gap-3 p-5">
        {initialGameboard.map((row, rowIndex)=><li key={rowIndex}>
            <ol>
                {row.map((playerSymbol,colIndex)=><li key={colIndex}className="border border-white h-28" ><button>{playerSymbol}</button></li>)}
            </ol>
        </li>)}
    </ol>
}