import React, { useState, useEffect } from 'react';
import Filter from './components/guide/Filter';
import Notification from './components/common/Notification';
import PersonForm from './components/guide/PersonForm';
import Persons from './components/guide/Persons';
import personService from './services/persons';
import './App.css'
import './index.css'

const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filter, setFilter ] = useState('')
  const [ notification, setNotification ] = useState(null)
  const [ notificationStyle, setNotificationStyle ] = useState('success')
  const [ personsToShow, setPersonsToShow ] = useState([])

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

    const index = persons.findIndex(person => person.name === newName);

    if (index >= 0 && window.confirm(
     `${newName} is already added to phonebook, replace the old number with a new one?`
    )) {
      const person = { ...persons[index], number: newNumber }
      const id = person.id

      personService
        .update(id, person)
        .then(returnedPerson => {
          setPersons(persons.map(person => (person.id !== id) ? person : returnedPerson))
          setPersonsToShow(personsToShow.map(person => (person.id !== id) ? person : returnedPerson))
          setNewName('')
          setNewNumber('')
          //Updated notification
          setNotificationStyle("success")
          setNotification(`Updated ${returnedPerson.name}`)
          setTimeout(() => {
            setNotification(null)}, 2500
          )
        })
        .catch(error => {
          //Error notification
          setNotificationStyle("error")
          setNotification(`Information of ${person.name} has already been removed from server`)
          setTimeout(() => {
            setNotification(null)}, 2500
          )
        })
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
        //Show notification
        setNotificationStyle("success")
        setNotification(`Added ${returnedPerson.name}`)
        setTimeout(() => {
          setNotification(null)}, 2500
        )
      })
  }
  const deletePerson = (e) => {
    if (window.confirm(`Delete ${e.target.nextElementSibling.innerHTML}?`)) {
      const id = parseInt(e.target.value)

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
      <Notification className={notificationStyle} message={notification} />
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