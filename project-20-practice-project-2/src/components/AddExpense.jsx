import { useState } from "react";

export default function AddExpense({ persons, onAddExpense }) {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [paidBy, setPaidBy] = useState("");
  const [participants, setParticipants] = useState([]);

  function handleParticipantToggle(id) {
    setParticipants((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id],
    );
  }

  function handleClick() {
    if (!description || !amount || !paidBy || participants.length === 0) {
      return;
    }

    onAddExpense({
      description,
      amount: Number(amount),
      paidBy: Number(paidBy),
      participants: participants.map(Number),
    });

    setAmount("");
    setDescription("");
    setPaidBy("");
    setParticipants([]);
  }

  return (
    <div className="bg-stone-800 border border-stone-700 p-5 rounded-2xl space-y-4">
      <h2 className="text-lg font-semibold">Add Expense</h2>

      {/* description */}
      <input
        type="text"
        placeholder="Expense description"
        className="w-full px-3 py-2 bg-stone-700 rounded"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      {/* amount */}
      <input
        type="number"
        placeholder="Amount"
        className="w-full px-3 py-2 bg-stone-700 rounded"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      {/* paid by */}
      <select
        className="w-full px-3 py-2 bg-stone-700 rounded"
        value={paidBy}
        onChange={(e) => setPaidBy(e.target.value)}
      >
        <option value="">Select who paid</option>
        {persons.map((person) => (
          <option key={person.id} value={person.id}>
            {person.name}
          </option>
        ))}
      </select>

      {/* participants */}
      <div>
        <p className="mb-2">Split between:</p>
        {/* checkboxes will go here */}
        {persons.map((person) => (
          <label key={person.id} className="block">
            <input
              type="checkbox"
              onChange={() => handleParticipantToggle(person.id)}
            />
            {person.name}
          </label>
        ))}
      </div>

      <button
        onClick={handleClick}
        className="w-full py-2 bg-blue-600 rounded-lg font-medium hover:bg-blue-700 transition"
      >
        Add Expense
      </button>
    </div>
  );
}
