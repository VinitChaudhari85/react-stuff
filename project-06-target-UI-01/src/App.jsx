import React from "react";
import Header from "./components/Header";
import MainSec from "./components/MainSec";

function App(){
    return(
        <div className="min-h-screen min-w-screen bg-gray-800 flex flex-col">
            <div className=" pt-3"><Header/></div>
            <div className="mx-auto my-auto"><MainSec/></div>
            
        </div>
    )
}
export default App;