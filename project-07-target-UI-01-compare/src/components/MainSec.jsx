import Button from "./Button";

function MainSec(){
    let buttons = ["Get Started","Learn More"];
    return(
        <main className="flex flex-col text-white gap-10 items-center">
            <div className="text-3xl">
                 Build products faster
            </div>
            <div className="text-3xl">
                Modern UI with Tailwind + React
            </div>
            <div className="flex gap-8">
               {/* <Button name="Get Started"/>
               <Button name="Learn More"/>  */}
               {buttons.map((button,index)=>{return <Button key={index} name={button}/>})}
            </div>
        </main>
    )
}
export default MainSec;