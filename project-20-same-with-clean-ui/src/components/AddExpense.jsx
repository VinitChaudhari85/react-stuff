import { useState } from "react";

export default function AddExpense({ persons, onAddExpense }) {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [paidBy, setPaidBy] = useState("");
  const [participants, setParticipants] = useState([]);

  function handleParticipantToggle(id) {
    setParticipants((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]
    );
  }

  function handleClick() {
    if (!description || !amount || !paidBy || participants.length === 0) {
      alert("Please fill in all fields and select at least one participant!");
      return;
    }

    onAddExpense({
      description,
      amount: Number(amount),
      paidBy: paidBy,
      participants: participants,
    });

    // Clear form
    setAmount("");
    setDescription("");
    setPaidBy("");
    setParticipants([]);
  }

  return (
    <div className="bg-stone-800/50 backdrop-blur border border-stone-700 p-6 rounded-2xl space-y-4">
      {/* Description */}
      <div>
        <label className="block text-sm font-medium text-stone-300 mb-2">
          Description
        </label>
        <input
          type="text"
          placeholder="e.g., Dinner, Movie tickets, Groceries"
          className="w-full px-4 py-2.5 bg-stone-900/50 border border-stone-600 rounded-xl text-white placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      {/* Amount */}
      <div>
        <label className="block text-sm font-medium text-stone-300 mb-2">
          Amount (₹)
        </label>
        <input
          type="number"
          placeholder="0.00"
          min="0"
          step="0.01"
          className="w-full px-4 py-2.5 bg-stone-900/50 border border-stone-600 rounded-xl text-white placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>

      {/* Paid by */}
      <div>
        <label className="block text-sm font-medium text-stone-300 mb-2">
          Who paid?
        </label>
        <select
          className="w-full px-4 py-2.5 bg-stone-900/50 border border-stone-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500"
          value={paidBy}
          onChange={(e) => setPaidBy(e.target.value)}
        >
          <option value="">Select person</option>
          {persons.map((person) => (
            <option key={person.id} value={person.id}>
              {person.name}
            </option>
          ))}
        </select>
      </div>

      {/* Participants */}
      <div>
        <label className="block text-sm font-medium text-stone-300 mb-3">
          Split between:
        </label>
        <div className="space-y-2 bg-stone-900/30 p-4 rounded-xl border border-stone-700">
          {persons.map((person) => (
            <label
              key={person.id}
              className="flex items-center gap-3 cursor-pointer hover:bg-stone-800/50 p-2 rounded-lg transition"
            >
              <input
                type="checkbox"
                checked={participants.includes(person.id)}
                onChange={() => handleParticipantToggle(person.id)}
                className="w-4 h-4 rounded border-stone-600 text-blue-600 focus:ring-2 focus:ring-blue-500/50"
              />
              <span className="text-white">{person.name}</span>
            </label>
          ))}
        </div>
        {participants.length > 0 && (
          <p className="text-xs text-stone-400 mt-2">
            {participants.length} {participants.length === 1 ? "person" : "people"} selected
          </p>
        )}
      </div>

      <button
        onClick={handleClick}
        className="w-full py-3 bg-gradient-to-r from-blue-600 to-blue-500 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-600 transition shadow-lg shadow-blue-500/20"
      >
        Add Expense
      </button>
    </div>
  );
}
