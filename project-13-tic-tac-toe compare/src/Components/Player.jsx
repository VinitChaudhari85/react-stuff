import { useState } from "react";

export default function Player({ initialName, symbol }) {
  const [name, setName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleToggle() {
    setIsEditing((prev) => !prev);
  }

  function handleChange(e) {
    setName(e.target.value);
  }

  return (
    <li className="flex items-center gap-4">
      {isEditing ? (
        <input
          className="bg-yellow-900 w-28 text-center text-black"
          value={name}
          onChange={handleChange}
        />
      ) : (
        <span className="w-28 text-center">{name}</span>
      )}

      <span className="font-bold">{symbol}</span>

      <button
        onClick={handleToggle}
        className="border px-2 rounded cursor-pointer"
      >
        {isEditing ? "Save" : "Edit"}
      </button>
    </li>
  );
}
