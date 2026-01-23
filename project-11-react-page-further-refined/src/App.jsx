import React from "react";
import Header from "./Components/Header";
import SubHeader from "./Components/SubHeader";
import Middle from "./Components/Middle";
import Examples from "./Components/Examples"

function App() {

  return (
    <div className="min-h-screen bg-purple-950 p-6 flex flex-col gap-7">
      <Header heading={"React Essentials"} />

      <div className="mx-auto">
        <SubHeader
          subHeading={
            "Fundamental React concepts that you will need for almost any app that you are going to build!"
          }
        />
      </div>

      <Middle />

      <div className="mx-auto w-4xl">
        <SubHeader subHeading={"Examples"} />
      </div>
      
      <Examples/>

    </div>
  );
}
export default App;