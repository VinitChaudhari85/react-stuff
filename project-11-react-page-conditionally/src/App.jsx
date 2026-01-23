import React from "react";
import Header from "./Components/Header";
import SubHeader from "./Components/SubHeader";
import Middle from "./Components/Middle";
import { CONTENT_DATA } from "./Components/data";
import Button from "./Components/Button";
import { useState } from "react";

function App(){

  const [selected, setSelected] = useState();

  let tabContent = null;

  if(!selected){
    tabContent = <p>Please select a topic.</p>
  }
  else{
    tabContent = (
      <>let tabContent = (<h2 className="text-lg p-2">{selected.title}</h2>
        <div className="p-2">{selected.content}</div>
        <pre>
          <code className="p-2">
            {selected.code}
          </code>
        </pre>);</>
    )
  }
 
  return(
    <div className="min-h-screen bg-purple-950 p-6 flex flex-col gap-7">
      <Header heading={"React Essentials"}/>

      <div className="mx-auto"><SubHeader subHeading={"Fundamental React concepts that you will need for almost any app that you are going to build!"}/></div>

      <Middle/>

      <div className="mx-auto w-4xl"><SubHeader subHeading={"Examples"}/></div>

      <div className="flex gap-2 items-center text-purple-300 mx-auto w-4xl">
        <Button name={CONTENT_DATA.components.title} onClick={()=> setSelected(CONTENT_DATA.components)}/>
        <Button name={CONTENT_DATA.jsx.title} onClick={()=> setSelected(CONTENT_DATA.jsx)}/>
        <Button name={CONTENT_DATA.props.title} onClick={()=> setSelected(CONTENT_DATA.props)}/>
        <Button name={CONTENT_DATA.state.title} onClick={()=> setSelected(CONTENT_DATA.state)}/>
      </div>
      
      <div className="items-center bg-purple-900 w-4xl mx-auto p-6 rounded text-white shadow-2xl">
        {tabContent}
      </div>
      
    </div>
  )
}
export default App;