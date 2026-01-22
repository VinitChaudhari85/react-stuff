import React from "react";

function Button({name, onClick}){
    return(
        <button className="bg-[#344152] hover:bg-gray-600 p-1" onClick={onClick}>
            {name}
        </button>
    )
}

export default Button;