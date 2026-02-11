export default function AddExpense() {
  return (
    <div className="bg-stone-800 p-4 rounded-2xl space-y-4">
      
      <h2 className="text-lg font-semibold">Add Expense</h2>

      {/* description */}
      <input
        type="text"
        placeholder="Expense description"
        className="w-full px-3 py-2 bg-stone-700 rounded"
      />

      {/* amount */}
      <input
        type="number"
        placeholder="Amount"
        className="w-full px-3 py-2 bg-stone-700 rounded"
      />

      {/* paid by */}
      <select className="w-full px-3 py-2 bg-stone-700 rounded">
        <option>Select who paid</option>
      </select>

      {/* participants */}
      <div>
        <p className="mb-2">Split between:</p>
        {/* checkboxes will go here */}
      </div>

      <button className="px-4 py-2 bg-blue-600 rounded">
        Add Expense
      </button>
    </div>
  );
}
