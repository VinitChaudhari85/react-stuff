import React from "react";

function Card({ image, title, content }) {
  return (
    // Main card container
    // bg-gray-800      → card background
    // w-48             → fixed width for uniform cards
    // rounded-2xl      → smooth rounded corners
    // p-4              → padding inside card (VERY important for UI)
    // shadow-lg        → gives depth (card effect)
    // hover:scale-105  → small zoom animation on hover
    // transition       → smooth animation
    <div className="bg-gray-800 text-white w-48 rounded-2xl p-4 flex flex-col items-center gap-3 shadow-lg hover:scale-105 transition">

      {/* Image section */}
      {/* w-32 h-32        → fixed image size so all cards look same */}
      {/* object-cover    → prevents image stretching */}
      {/* rounded-xl      → rounded image corners */}
      <img 
        src={image} 
        alt={title}
        className="w-32 h-32 object-cover rounded-xl"
      />

      {/* Card title */}
      {/* font-semibold   → makes title bold */}
      {/* text-lg         → slightly larger font */}
      <h2 className="font-semibold text-lg">
        {title}
      </h2>

      {/* Card content */}
      {/* text-sm         → smaller text for description */}
      {/* text-gray-300   → lighter color for better hierarchy */}
      {/* text-center     → center align text */}
      <p className="text-sm text-gray-300 text-center">
        {content}
      </p>

    </div>
  );
}

export default Card;
