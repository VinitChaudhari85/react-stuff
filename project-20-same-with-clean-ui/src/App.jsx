import { useState, useEffect } from "react";
import Header from "./components/Header";
import AddPerson from "./components/AddPerson";
import AddExpense from "./components/AddExpense";
import ExpenseList from "./components/ExpenseList";
import DebtSummary from "./components/DebtSummary";
import { calculateDebts } from "./utils/calculations";

export default function App() {
  // Initialize state WITH data from localStorage (lazy initialization)
  const [persons, setPersons] = useState(() => {
    const saved = localStorage.getItem("persons");
    return saved ? JSON.parse(saved) : [];
  });

  const [expenses, setExpenses] = useState(() => {
    const saved = localStorage.getItem("expenses");
    return saved ? JSON.parse(saved) : [];
  });

  // Save persons whenever they change
  useEffect(() => {
    localStorage.setItem("persons", JSON.stringify(persons));
  }, [persons]);

  // Save expenses whenever they change
  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  // Make a function for adding people
  function handleAddperson(name) {
    const newPerson = {
      id: crypto.randomUUID(),
      name: name,
    };
    setPersons((prevPersons) => [...prevPersons, newPerson]);
  }

  // Make a function to remove a person
  function handleRemovePerson(id) {
    // Check if this person is in any expense
    const hasExpenses = expenses.some(
      (expense) =>
        expense.paidBy === id || expense.participants.includes(id)
    );

    if (hasExpenses) {
      alert(
        "Cannot remove this person - they are part of existing expenses!\n\nDelete their expenses first."
      );
      return;
    }

    // Only remove if no expenses
    setPersons((prevPersons) =>
      prevPersons.filter((person) => person.id !== id)
    );
  }

  // Make a function to add an expense
  function handleAddExpense(expenseData) {
    const newExpense = {
      id: crypto.randomUUID(),
      ...expenseData,
    };

    setExpenses((prevExpenses) => [...prevExpenses, newExpense]);
  }

  // Make a function to remove an expense
  function handleRemoveExpense(id) {
    setExpenses((prevExpenses) =>
      prevExpenses.filter((expense) => expense.id !== id)
    );
  }

  // Calculate debts from all expenses
  const debts = calculateDebts(expenses);

  return (
    <div className="min-h-screen bg-linear-to-br from-stone-900 via-stone-800 to-stone-900 text-white pt-8 pb-16">
      <Header heading="Expense Splitter"/>
      
      <div className="max-w-4xl mx-auto px-6 space-y-8">
        {/* Add Person Section */}
        <section>
          <h2 className="text-lg font-semibold mb-3 text-stone-300">
            👥 Add People
          </h2>
          <AddPerson onAddPerson={handleAddperson} />
        </section>

        {/* People List */}
        {persons.length > 0 && (
          <section>
            <h2 className="text-lg font-semibold mb-3 text-stone-300">
              Group Members ({persons.length})
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {persons.map((person) => (
                <li
                  key={person.id}
                  className="bg-stone-800/50 backdrop-blur border border-stone-700 p-3 rounded-xl flex justify-between items-center hover:bg-stone-800 transition"
                >
                  <span className="font-medium">{person.name}</span>
                  <button
                    onClick={() => handleRemovePerson(person.id)}
                    className="px-3 py-1 bg-red-600/20 text-red-400 border border-red-600/30 rounded-lg hover:bg-red-600/30 transition text-sm"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Add Expense Section */}
        {persons.length > 0 && (
          <section>
            <h2 className="text-lg font-semibold mb-3 text-stone-300">
              💰 Add Expense
            </h2>
            <AddExpense persons={persons} onAddExpense={handleAddExpense} />
          </section>
        )}

        {/* Show message if no people added */}
        {persons.length === 0 && (
          <div className="bg-stone-800/30 border border-stone-700 p-8 rounded-2xl text-center">
            <p className="text-stone-400 text-lg mb-2">
              👋 Get started by adding people to your group
            </p>
            <p className="text-stone-500 text-sm">
              Add at least 2 people to start tracking expenses
            </p>
          </div>
        )}

        {/* Debt Summary */}
        {expenses.length > 0 && (
          <DebtSummary persons={persons} debts={debts} />
        )}

        {/* Expense List */}
        {expenses.length > 0 && (
          <ExpenseList
            persons={persons}
            expenses={expenses}
            onRemoveExpense={handleRemoveExpense}
          />
        )}
      </div>
    </div>
  );
}
