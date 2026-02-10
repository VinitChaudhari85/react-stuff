import Header from "./components/Header.jsx";
import AddPerson from "./components/AddPerson.jsx";
import { useState } from "react";

export default function App() {
  const [persons, setPersons] = useState([]);

  function handleAddPerson(name) {
    const newPerson = {
      id: Math.random(),
      name: name,
    };
    setPersons((prevPersons) => [...prevPersons, newPerson]);
  }

  return (
    <div className="min-h-screen bg-stone-900 text-white pt-6">
      <Header heading="Expense Splitter" />
      <div className="max-w-2xl mx-auto p-6">
        <AddPerson addFunction={handleAddPerson} />
        
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-3">People in Group:</h2>
          {persons.length === 0 ? (
            <p className="text-stone-400">No people added yet</p>
          ) : (
            <ul className="space-y-2">
              {persons.map((person) => (
                <li key={person.id} className="bg-stone-800 p-3 rounded">
                  {person.name}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}