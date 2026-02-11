import { useState } from "react"

export default function AddPerson({onAddPerson}) {
    
    //make a name variable to return to adding function
    const [name, setName] = useState("");

    function handleClick(){
        if(name.trim()==="") return;
        onAddPerson(name)
        setName("")
    }

    return <div className="bg-stone-800 p-3 flex gap-3 rounded-2xl">
        <input 
        type="text" 
        value={name} 
        onChange={(e)=> setName(e.target.value)} 
        placeholder="Enter person's name"
        className="flex-1 px-3 py-2 bg-stone-700 rounded text-white"
        />
        <button
        onClick={handleClick}
        className="px-2 py-1 bg-stone-600 rounded hover:bg-stone-700"
        >Add Person
        </button>
    </div>
};
