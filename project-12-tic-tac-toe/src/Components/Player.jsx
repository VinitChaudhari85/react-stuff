import { useState } from "react"

export default function Player({initialName, symbol, isActive}){
    
    const [playerName, setPlayerName] = useState(initialName)
    const [isEditing, setIsEditing] = useState(false);

    function handleClick(){
        setIsEditing(editing => !editing)
    }

    function handleChange(event){
        setPlayerName(event.target.value);       
    }

    let editablePlayerName = <span className="inline-block rounded text-center w-32 m-2">{playerName}</span>
    let buttonName ="Edit"

    if(isEditing){
        editablePlayerName = <input type="text" className="bg-yellow-900 w-32 m-2 text-center rounded" value={playerName} onChange={handleChange} required />
        buttonName="Save"
    }

    return(
        <li className={`flex gap-6 p-4 items-center w-xl ${isActive ? "border border-white" : ""}`}>
            <span>
                {editablePlayerName}
                <span className="m-2">{symbol}</span>
            </span>
            <button  className="border border-white w-14 rounded cursor-pointer" onClick={handleClick}>{buttonName}</button>
          </li>
    )
}
