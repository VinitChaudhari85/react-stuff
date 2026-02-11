import { useState } from "react";
import Header from "./components/Header";
import AddPerson from "./components/AddPerson";
import AddExpense from "./components/AddExpense";

export default function App() {
  //create a state first for the people
  const [persons, setPersons] = useState([]);

  //create a state for keeping the expenses
  const [expenses, setExpenses] = useState([]);

  //make a function for adding the people
  function handleAddperson(name) {
    const newPerson = {
      id: Math.random(),
      name: name,
    };
    setPersons((prevPersons) => [...prevPersons, newPerson]);
  }

  //make a function to remove a person
  function handleRemovePerson(id) {
    setPersons((prevPersons) =>
      prevPersons.filter((person) => person.id !== id),
    );
  }

  //make a function to add an expense
  function handleAddExpense(expenseData) {
    const newExpense = {
      id: Math.random(),
      ...expenseData,
    };

    setExpenses((prevExpenses) => [...prevExpenses, newExpense]);
  }

  return (
    <div className="min-h-screen bg-stone-900 text-white pt-6">
      <Header heading="Expense Splitter" />
      <div className="max-w-2xl mx-auto p-6">
        <AddPerson onAddPerson={handleAddperson} />

        <div className="mt-6">
          <AddExpense />
        </div>

        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-3">People:</h2>
          {persons.length === 0 ? (
            <p className="text-stone-400">No people added yet</p>
          ) : (
            <ul className="space-y-2">
              {persons.map((person) => (
                <li
                  key={person.id}
                  className="bg-stone-800 p-3 rounded-2xl flex gap-2 items-center"
                >
                  <span>{person.name}</span>
                  <button
                    onClick={() => handleRemovePerson(person.id)}
                    className="px-2 py-1 bg-stone-600 rounded hover:bg-stone-700"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
