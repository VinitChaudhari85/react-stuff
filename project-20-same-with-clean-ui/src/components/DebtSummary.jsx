export default function DebtSummary({ persons, debts }) {
  const debtList = [];

  // Loop through each person who owes money
  for (const debtorId in debts) {
    for (const creditorId in debts[debtorId]) {
      const amount = debts[debtorId][creditorId];

      // Find the actual person objects
      const debtor = persons.find((p) => p.id === debtorId);
      const creditor = persons.find((p) => p.id === creditorId);

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
    <section>
      <h2 className="text-2xl font-bold mb-4 text-white">
        💸 Who Owes Whom
      </h2>

      {debtList.length === 0 ? (
        <div className="bg-stone-800/30 border border-stone-700 p-8 rounded-2xl text-center">
          <p className="text-stone-400">All settled up! 🎉</p>
          <p className="text-stone-500 text-sm mt-1">
            No outstanding debts
          </p>
        </div>
      ) : (
        <ul className="space-y-3">
          {debtList.map((debt, index) => (
            <li
              key={index}
              className="bg-gradient-to-r from-stone-800/50 to-stone-800/30 backdrop-blur border border-stone-700 p-5 rounded-2xl hover:border-stone-600 transition"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="bg-orange-500/10 text-orange-400 border border-orange-500/20 px-3 py-1.5 rounded-lg font-semibold">
                    {debt.debtor}
                  </span>
                  <span className="text-stone-500">→</span>
                  <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-3 py-1.5 rounded-lg font-semibold">
                    {debt.creditor}
                  </span>
                </div>
                <span className="text-2xl font-bold text-emerald-400">
                  ₹{debt.amount.toFixed(2)}
                </span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
