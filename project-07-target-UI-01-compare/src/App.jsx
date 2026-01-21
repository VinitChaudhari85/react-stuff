import React from "react";
import Header from "./components/Header";
import MainSec from "./components/MainSec";

function App() {
  return (
    <div className="min-h-screen bg-gray-800 flex flex-col">
      <Header />

      <main className="flex-1 flex items-center justify-center pt-20">
        <MainSec />
      </main>
    </div>
  )
}

export default App;