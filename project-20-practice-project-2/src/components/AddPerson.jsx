import { useState } from "react";
import Button from "./Button.jsx";

export default function AddPerson({ addFunction }) {
  const [name, setName] = useState("");

  function handleClick() {
    if (name.trim() === "") return;  // Don't add empty names
    addFunction(name);  // Send name to parent
    setName("");  // Clear input
  }

  return (
    <div className="border border-white flex p-3 gap-3">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter person's name"
      />
      <Button onClick={handleClick}>Add Person</Button>
    </div>
  );
}