import { useState } from "react"

export default function Player({initialName, symbol}){
    
    const [playerName, setPlayerName] = useState(initialName)
    const [isEditing, setIsEditing] = useState(false);

    function handleClick(){
        setIsEditing(editing => !editing)
    }

    function handleChange(event){
        setPlayerName(event.target.value);       
    }

    let editablePlayerName = <span className="text-center w-28">{playerName}</span>
    let buttonName ="Edit"

    if(isEditing){
        editablePlayerName = <input type="text" className="bg-gray-800 w-28 text-center rounded" value={playerName} onChange={handleChange} required />
        buttonName="Save"
    }

    return(
        <li className="flex gap-6 justify-center">
            <span className="flex gap-7">
                {editablePlayerName}
                <span>{symbol}</span>
              {/* <span>{name}</span>
              <span>{symbol}</span> */}
            </span>
            <button onClick={handleClick}>{buttonName}</button>
          </li>
    )
}