import React from "react";
import Button from "./components/Button";
import Content from "./components/Content";
import img from "./assets/kb-img.png"
import { useState } from "react";

function App(){

  const [type, setType] = useState("MK")

  return(
    <div className="min-h-screen bg-[#030712] pt-6 flex flex-col gap-4 items-center text-white ">
      <div><h1 className="text-2xl text-center">Info page for keyboards!</h1></div>
      <div className="bg-[#151e2e] w-3xl p-7 rounded-lg flex flex-col gap-3">
        <h2 className="text-lg text-center">There are mainly two types of keyboards:</h2>
        <div className="flex justify-center gap-3">
          <Button name="Mechanical Keyboards" onClick={()=>setType("MK")}/>
          <Button name="HE Keyboards" onClick={()=>setType("HE")}/>
        </div>
        <div><img src={img} className="rounded"/></div>
        <Content type={type}/>
      </div>
    </div>
  )
}
export default App;