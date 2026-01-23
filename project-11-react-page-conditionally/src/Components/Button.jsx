function Button({name, onClick}){
    return(
        <button className="bg-transparent p-2 hover:bg-purple-800 rounded" onClick={onClick}>
            {name}
        </button>
    )
}
export default Button;