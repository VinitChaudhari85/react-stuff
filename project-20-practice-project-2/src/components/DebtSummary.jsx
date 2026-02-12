export default function DebtSummary({ persons, debts }) {
  const debtList = [];

  // debts structure example:
  // {
  //   "uuid-person-A": { "uuid-person-B": 300 }
  // }

  // Loop through each debtor
  for (const debtorId in debts) {
    for (const creditorId in debts[debtorId]) {
      const amount = debts[debtorId][creditorId];

      // 🔧 FIX: IDs are now UUID strings → DO NOT use Number()
      const debtor = persons.find(p => p.id === debtorId);
      const creditor = persons.find(p => p.id === creditorId);

      if (debtor && creditor && amount > 0) {
        debtList.push({
          debtor: debtor.name,
          creditor: creditor.name,
          amount: amount,
        });
      }
    }
  }

  return (
    <div className="mt-10">
      <h2 className="text-2xl font-semibold mb-4">Who Owes Whom</h2>

      {debtList.length === 0 ? (
        <div className="bg-stone-800/60 border border-stone-700 p-6 rounded-2xl text-center text-stone-400">
          No debts yet
        </div>
      ) : (
        <ul className="space-y-3">
          {debtList.map((debt, index) => (
            <li
              key={index}
              className="bg-stone-800 border border-stone-700 p-4 rounded-2xl flex justify-between items-center"
            >
              <div>
                <span className="text-white font-medium">{debt.debtor}</span>
                <span className="text-stone-400"> owes </span>
                <span className="text-white font-medium">{debt.creditor}</span>
              </div>

              <span className="text-green-400 font-semibold">
                ₹{debt.amount.toFixed(2)}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
