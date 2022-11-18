import React, { useState, useEffect } from 'react';
import Filter from './components/guide/Filter';
import PersonForm from './components/guide/PersonForm';
import Persons from './components/guide/Persons';
import personService from './services/persons';

const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filter, setFilter ] = useState('')
  const [ personsToShow, setPersonsToShow] = useState([])

  const hook = () => {
    personService
      .readAll()
      .then(initialPersons => {
        setPersons(initialPersons)
        setPersonsToShow(initialPersons)
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
    personService
      .create(person)
      .then(returnedPerson => {
        if (person.name.toLowerCase().includes(filter.toLowerCase())) {
          setPersonsToShow(personsToShow.concat(returnedPerson))
        }
        setPersons(persons.concat(returnedPerson))
        setNewName('')
        setNewNumber('')
      })
  }
  const deletePerson = (e) => {
    if (window.confirm(`"Delete ${e.target.nextElementSibling.innerHTML}?`)) {
      let id = parseInt(e.target.value)

      personService
        .deletePerson(id)
        .then(returnedPerson => {
          setPersons(persons.filter(person => person.id !== id))
          setPersonsToShow(personsToShow.filter(person => person.id !== id))
        })
    }
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
      <Persons persons={personsToShow} deletePerson={deletePerson} />
    </div>
  )
}

export default App