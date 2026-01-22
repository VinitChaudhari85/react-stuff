function Card({title, image, description}){
    return(
        <div className="text-white flex flex-col items-center w-52 p-2 gap-2">
            <div><img className="object-cover rounded h-36" src={image}/></div>
            <div>{title}</div>
            <div className="text-center">{description}</div>
        </div>
    )
}
export default Card;