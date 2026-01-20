import React from "react";
import Card from "./components/Card";
import { CARD_OBJECTS } from "./data";

function App() {
  return (
    // Page wrapper
    // min-h-screen   → full height of screen
    // flex flex-col  → vertical layout
    // items-center  → center horizontally
    // gap-5         → spacing between all children (CLEAN method)
    // pt-7          → top padding to move content slightly down
    <div className="min-h-screen min-w-screen bg-purple-950 flex flex-col items-center gap-5 pt-7">

      {/* Main page heading */}
      <h1 className="text-4xl text-purple-300">
        Some Title
      </h1>
      
      {/* Subtitle / description */}
      <p className="text-purple-200">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
      </p>

      {/* Main box container */}
      {/* max-w-6xl   → limits width on large screens (VERY professional) */}
      {/* w-full      → full width on small screens */}
      {/* rounded-2xl → smooth corners */}
      <div className="bg-gray-900 text-white w-full max-w-6xl flex flex-col items-center rounded-2xl pt-5">

        {/* Section heading */}
        <h2 className="text-xl font-semibold mb-4">
          Some Heading
        </h2>

        {/* Cards grid */}
        {/* grid-cols-1            → mobile: 1 card per row */}
        {/* sm:grid-cols-2        → small screens: 2 cards */}
        {/* md:grid-cols-3        → medium: 3 cards */}
        {/* lg:grid-cols-4        → large: 4 cards */}
        {/* gap-6                 → space between cards */}
        {/* p-6                   → padding inside grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">

          {/* Dynamically render cards using map (VERY IMPORTANT IN REACT) */}
          {CARD_OBJECTS.map((card, index) => (
            <Card
              key={index}              // Key is required when rendering lists
              image={card.image}
              title={card.title}
              content={card.content}
            />
          ))}

        </div>
      </div>
    </div>
  );
}

export default App;
