import { CARD_DATA } from "./data";
import Card from "./Card";
function Middle(){

    return(
        <div className="flex flex-col items-center bg-gray-900 max-w-full mx-auto p-6 rounded gap-3 shadow-2xl">
            <h2 className="text-white text-xl">Core Concepts</h2>
            <div className="flex gap-4 justify-center">
                {CARD_DATA.map((element,index)=>(
                    <Card key={index} title={element.title} image={element.image} description={element.description}/>
                ))}
            </div>
        </div>
    )
}
export default Middle;