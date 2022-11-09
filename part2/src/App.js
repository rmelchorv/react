import React, { useState } from 'react';

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filter, setFilter ] = useState('')
  const [ personsToShow, setPersonsToShow] = useState(persons)

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
    setNewNumber('')
  }
  const handlePersonNameChange = (e) => {
    setNewName(e.target.value)
  }
  const handlePersonNumberChange = (e) => {
    setNewNumber(e.target.value)
  }
  const handleFilterChange = (e) => {
    if (e.target.value.trim().length > 0)
      setPersonsToShow(persons.filter(person => person.name.toLocaleLowerCase().includes(e.target.value.toLowerCase())))
    else
      setPersonsToShow(persons)
    setFilter(e.target.value)
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with: <input value={filter} onChange={handleFilterChange} />
      </div>
      <h2>add a new</h2>
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
      <ul>{personsToShow.map(person =>
        <li key={person.name}>{person.name} | {person.number}</li>
      )}</ul>
    </div>
  )
}

export default App