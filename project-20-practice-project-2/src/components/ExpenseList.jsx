export default function ExpenseList({ persons, expenses, onRemoveExpense }) {
  return (
    <div className="mt-10">
      <h2 className="text-2xl font-semibold mb-4">Expenses</h2>

      {expenses.length === 0 ? (
        <div className="bg-stone-800/60 border border-stone-700 p-6 rounded-2xl text-center text-stone-400">
          No expenses added yet
        </div>
      ) : (
        <ul className="space-y-4">
          {expenses.map((expense) => {
            const payer = persons.find(
              (person) => person.id === expense.paidBy
            );

            const participantsName = expense.participants
              .map((id) => persons.find((person) => person.id === id)?.name)
              .join(", ");

            return (
              <li
                key={expense.id}
                className="bg-stone-800 border border-stone-700 p-5 rounded-2xl shadow-sm hover:shadow-md transition"
              >
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <p className="text-lg font-semibold">
                      {expense.description}
                    </p>
                    <span className="text-green-400 font-semibold">
                      ₹{expense.amount}
                    </span>

                    <div className="mt-3 text-sm text-stone-300 space-y-1">
                      <p>
                        Paid by:{" "}
                        <span className="text-white font-medium">
                          {payer ? payer.name : "Unknown"}
                        </span>
                      </p>

                      <p>
                        Split between:{" "}
                        <span className="text-white font-medium">
                          {participantsName}
                        </span>
                      </p>
                    </div>
                  </div>

                  {/* NEW: Delete button */}
                  <button
                    onClick={() => onRemoveExpense(expense.id)}
                    className="px-3 py-1 bg-red-600 rounded hover:bg-red-700 text-sm ml-4"
                  >
                    Delete
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}