import { useState } from "react"

export default function Player({ initialName, symbol }) {
  const [playerName, setPlayerName] = useState(initialName)
  const [isEditing, setIsEditing] = useState(false)

  function handleClick() {
    setIsEditing(editing => !editing)
  }

  function handleChange(event) {
    setPlayerName(event.target.value)
  }

  let nameField = (
    <span className="w-28 text-center font-medium">
      {playerName}
    </span>
  )

  if (isEditing) {
    nameField = (
      <input
        className="w-28 text-center bg-gray-800 rounded outline-none"
        value={playerName}
        onChange={handleChange}
      />
    )
  }

  return (
    <li className="flex items-center gap-4">
      <div className="flex items-center gap-2 border border-gray-600 px-3 py-2 rounded">
        {nameField}
        <span className="text-xl font-bold">{symbol}</span>
      </div>
      <button
        onClick={handleClick}
        className="text-sm px-3 py-1 border border-gray-600 rounded hover:bg-gray-700"
      >
        {isEditing ? "Save" : "Edit"}
      </button>
    </li>
  )
}
