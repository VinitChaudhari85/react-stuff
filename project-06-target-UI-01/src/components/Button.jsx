function Button({name}){
    return(
        <button className="p-1 text-white w-30 bg-cyan-500 rounded-lg hover:bg-cyan-600 hover:scale-105 transition cursor-pointer">{name}</button>
    )
}
export default Button;