import Header from "./components/Header.jsx";
import AddPerson from "./components/AddPerson.jsx";
import { useState } from "react";
import Button from "./components/Button.jsx";

export default function App() {
  const [persons, setPersons] = useState([]);

  function handleAddPerson(name) {
    const newPerson = {
      id: Math.random(),
      name: name,
    };
    setPersons((prevPersons) => [...prevPersons, newPerson]);
  }

  function handleRemovePerson(id){
    //okay so we are not actually deleting the person from the existing array
    //but instead we are simply using filter method which automatically creates a new array for us
    //we are using filter method inside setter function pair so it will set the new values to the array without that person which is to be 
    //removed, that is the efficient way to handle removing array
    setPersons((prevPersons)=> prevPersons.filter((person) => person.id != id))
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
                  <div className="flex gap-2 items-center"><span>{person.name}</span><Button onClick={() => handleRemovePerson(person.id)}>Remove</Button></div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}