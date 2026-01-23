function Button({name, isActive, onClick}){
    return(
        <button className={`p-2 hover:bg-purple-800 rounded ${isActive ? "bg-purple-700" : "bg-transparent"}`} onClick={onClick}>
            {name}
        </button>
    )
}
export default Button;