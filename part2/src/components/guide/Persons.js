import React from 'react';
import Person from './Person';

const Persons = ({ persons, deletePerson }) => {
  return (
    <>
      <ul>{persons.map(person =>
        <Person key={person.name} person={person} deletePerson={deletePerson} />
      )}</ul>
    </>
  )
}

export default Persons