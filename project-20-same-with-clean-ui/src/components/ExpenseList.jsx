export default function ExpenseList({ persons, expenses, onRemoveExpense }) {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4 text-white">
        📝 Expenses ({expenses.length})
      </h2>

      {expenses.length === 0 ? (
        <div className="bg-stone-800/30 border border-stone-700 p-8 rounded-2xl text-center">
          <p className="text-stone-400">No expenses added yet</p>
          <p className="text-stone-500 text-sm mt-1">
            Add your first expense above to get started
          </p>
        </div>
      ) : (
        <ul className="space-y-3">
          {expenses.map((expense) => {
            const payer = persons.find(
              (person) => person.id === expense.paidBy
            );

            const participantsNames = expense.participants
              .map((id) => persons.find((person) => person.id === id)?.name)
              .filter(Boolean)
              .join(", ");

            const sharePerPerson = expense.amount / expense.participants.length;

            return (
              <li
                key={expense.id}
                className="bg-stone-800/50 backdrop-blur border border-stone-700 p-5 rounded-2xl shadow-sm hover:shadow-md transition group"
              >
                <div className="flex justify-between items-start gap-4">
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-lg font-semibold text-white">
                        {expense.description}
                      </h3>
                      <div className="text-right">
                        <span className="text-2xl font-bold text-emerald-400">
                          ₹{expense.amount.toFixed(2)}
                        </span>
                        <p className="text-xs text-stone-500 mt-1">
                          ₹{sharePerPerson.toFixed(2)} per person
                        </p>
                      </div>
                    </div>

                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <span className="text-stone-400">Paid by:</span>
                        <span className="text-white font-medium bg-stone-700/50 px-2 py-1 rounded">
                          {payer ? payer.name : "Unknown"}
                        </span>
                      </div>

                      <div className="flex items-start gap-2">
                        <span className="text-stone-400 whitespace-nowrap">
                          Split between:
                        </span>
                        <span className="text-white font-medium">
                          {participantsNames || "Unknown"}
                        </span>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => onRemoveExpense(expense.id)}
                    className="opacity-0 group-hover:opacity-100 px-3 py-1.5 bg-red-600/20 text-red-400 border border-red-600/30 rounded-lg hover:bg-red-600/30 transition text-sm"
                  >
                    Delete
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}
