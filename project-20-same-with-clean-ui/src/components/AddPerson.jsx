import { useState } from "react";

export default function AddPerson({ onAddPerson }) {
  const [name, setName] = useState("");

  function handleClick() {
    if (name.trim() === "") return;
    onAddPerson(name);
    setName("");
  }

  function handleKeyPress(e) {
    if (e.key === "Enter") {
      handleClick();
    }
  }

  return (
    <div className="bg-stone-800/50 backdrop-blur border border-stone-700 p-4 flex gap-3 rounded-2xl">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Enter person's name"
        className="flex-1 px-4 py-2.5 bg-stone-900/50 border border-stone-600 rounded-xl text-white placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500"
      />
      <button
        onClick={handleClick}
        className="px-6 py-2.5 bg-linear-to-r from-blue-600 to-blue-500 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-600 transition shadow-lg shadow-blue-500/20 whitespace-nowrap"
      >
        Add Person
      </button>
    </div>
  );
}
