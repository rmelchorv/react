import React, { useState } from 'react';

const App = () => {
  const [ persons, setPersons ] = useState([{ name: 'Arto Hellas', number: 0 }]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState(0)

  const addPerson = (e) => {
    e.preventDefault()

    if (persons.findIndex(person => person.name === newName) >= 0) {
      alert(`${newName} is already added to the phonebook`)
      return;
    }

    const person = {
      name: newName,
      number: newNumber
    }
    setPersons(persons.concat(person))
    setNewName('')
    setNewNumber(0)
  }
  const handlePersonNameChange = (e) => {
    setNewName(e.target.value)
  }
  const handlePersonNumberChange = (e) => {
    setNewNumber(e.target.value)
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handlePersonNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handlePersonNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>{persons.map(person =>
        <li key={person.name}>{person.name} | {person.number}</li>
      )}</ul>
    </div>
  )
}

export default App