import React, { useState, useEffect } from 'react';
import Filter from './components/guide/Filter';
import PersonForm from './components/guide/PersonForm';
import Persons from './components/guide/Persons';
import axios from 'axios';

const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filter, setFilter ] = useState('')
  const [ personsToShow, setPersonsToShow] = useState([])

  const hook = () => {
    axios
      .get('http://localhost:3001/persons')
      .then(res => {
        setPersons(res.data)
        setPersonsToShow(res.data)
      })
  }
  useEffect(hook, [])

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
    if (person.name.toLowerCase().includes(filter.toLowerCase())) {
      setPersonsToShow(personsToShow.concat(person))
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
    if (e.target.value.trim().length > 0) {
      setPersonsToShow(persons.filter(person => 
        person.name.toLowerCase().includes(e.target.value.toLowerCase())
      ))
    } else {
      setPersonsToShow(persons)
    }
    setFilter(e.target.value)
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} handleFilterChange={handleFilterChange} />
      <h2>add a new</h2>
      <PersonForm addPerson={addPerson} newName={newName} newNumber={newNumber}
        handlePersonNameChange={handlePersonNameChange} handlePersonNumberChange={handlePersonNumberChange} />
      <h2>Numbers</h2>
      <Persons persons={personsToShow} />
    </div>
  )
}

export default App